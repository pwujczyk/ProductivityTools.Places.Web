import { auth, tokenExpired } from './firebase'
import { createContext, useEffect, useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'

const AuthContext = createContext({
    user: null
})

export function AuthProvider({ children }) {
    let navigate = useNavigate();

    const [data, setData] = useState(null)
    console.log("AuthContext/AuthProvier invoked")
    useEffect(() => {
        console.log("AuthContext/AuthProvider useEffect")
        return auth.onIdTokenChanged(async (user) => {
            if (!user) {
                console.log("missing user");
                setData(prevState => ({ ...prevState, user: null }));
            }
            else {
                const token = await user.getIdToken();
                setData(prevState => ({ ...prevState, user: user }));
                localStorage.setItem("token", token);
                localStorage.setItem("refreshToken", user.refreshToken);
                console.log("After getIdToken, onIdTokenChanged method invFoked and token in the localstorage updated", token);
                //toast("New token saved in local storage")
            }
        })
    }, [])

    useEffect(() => {
        console.log("token expired")
        let te = tokenExpired();
        setData(prevState => ({ ...prevState, tokenExpired: te }));

        if (te) {
            console.log("List/Navigate to login");
            navigate("/Login")
        }
    }, [])

    useEffect(() => {
        console.log("AuthContext/AuthProvider useEffect2")
        const minutes = 4;
        const interval = minutes * 60 * 1000;

        const handle = setInterval(async () => {
            const user = auth.currentUser;
            if (user) {
                console.log("Auth Context, set nterval invoked, getIdToken o user performed");
                //toast(minutes + ' min passed and token refresh invoked')
                await user.getIdToken(true);
                console.log(user);
            }
        }, interval);

        return () => clearInterval(handle);
    }, [])

    return (
        <AuthContext.Provider value={{ data }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    console.log("AuthContext/UseAuth")
    return useContext(AuthContext);
}