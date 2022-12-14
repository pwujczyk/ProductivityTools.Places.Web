import { useEffect, useState } from "react"
import service from '../../../services/api.js'
import { Link, useNavigate } from 'react-router-dom'
import Thumbnail from './thumbnail.js'
import { logout } from '../../../Session/firebase'
import { useAuth } from '../../../Session/AuthContext'

function PlaceList() {

    const ctx = useAuth();
    let navigate = useNavigate();

    const [placeList, setPlaceList] = useState([]);

    useEffect(() => {
        const call = async () => {
            var data = await service.getPlaceList()
            console.log(data);
            setPlaceList(data);

        }
        call();
    }, [])

    const logoutClick = () => {
        console.log('logout')
        console.log(ctx);
        logout();
        
    }

    if (ctx.user == undefined) {
        console.log('user.context not undefined')
        navigate('/Login')
    }
    else {
        return (
            <div>
                <button onClick={logoutClick}>Log out</button>
                <h1>Place List</h1><Link to='New'>New</Link>
                <br></br>
                {placeList && placeList.map(place => {
                    return (
                        <Thumbnail place={place} />
                    )
                })}
            </div>
        )
    }
}

export default PlaceList


