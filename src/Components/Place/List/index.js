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
        console.log("List/ctx user");
        console.log(ctx.tokenExpired);


        call();
    }, [])

    const logoutClick = () => {
        console.log('logout')
        console.log(ctx);
        logout();

    }
    console.log("DDDDDDDDDDDDDDDDD");
    console.log(ctx?.data?.user);
    console.log(ctx?.data);

    const getMinimumVisit = (visits) => {
        let maxVisit = '';
        visits.forEach(element => {

            console.log("Visita");
            console.log(element);
            if (element.Date > maxVisit) {
                maxVisit = element.Date;
            }
        });
        return maxVisit;
    }

    const sorting = (a, b) => {
        if (a.Visits == undefined) {
            console.log("undefined");
            return 1;
        }
        else {
            if (b.Visits == undefined) {
                return -1;
            }
            else {
                debugger;
                let aMinVisitDate = getMinimumVisit(a.Visits);
                let bMinVisitDate = getMinimumVisit(b.Visits);
                if (aMinVisitDate < bMinVisitDate) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
        }
    }

    return (
        <div>
            <button onClick={logoutClick}>Log out</button>
            <span>Token expired :{ctx.data?.tokenExpired ? "yes" : "no"} </span>
            <span>user:{ctx.data?.user?.email}</span>
            <h1>Place List</h1><Link to='New'>New</Link>
            <br></br>
            {placeList && placeList.sort(sorting).map(place => {
                return (
                    <Thumbnail place={place} />
                )
            })}
        </div>
    )

}

export default PlaceList


