import { auth } from '/firebase'
import { createContext, useEffect } from "react";

const AuthContext = createContext({
    user: null
})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        return auth.onIdTokenChanged(async (user) => {
            if (!user) {
                console.log("missing user");
                setUser(null);
            }
            else {
                const token = await user.getIdToken();
                setUser(user);
                localStorage.setItem("token", token);
                localStorage.setItem("refreshToken", user.refreshToken);
                console.log("After getIdToken, onIdTokenChanged method invoked and token in the localstorage updated", token);
                //toast("New token saved in local storage")
            }
        })
    }, [])

    useEffect(() => {
        const minutes = 4;
        const interval = minutes * 60 * 1000;

        const handle=setInterval(async ()=>{
            const user=auth.currentUser;
            if (user){
                console.log("Auth Context, setInterval invoked, getIdToken o user performed");
                //toast(minutes + ' min passed and token refresh invoked')
                await user.getIdToken(true);
                console.log(user);
            }
        },interval);

        return ()=>clearInterval(handle);
    }, [])

    return (
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}