import { useEffect, useState } from "react"
import service from '../../../services/api.js'
import { Link, useNavigate } from 'react-router-dom'

import { logout } from '../../../Session/firebase'
import { useAuth } from '../../../Session/AuthContext'
import GroupByYearView from "./groupByYearView.js"
import  Grid  from './grid.js'

function PlaceList() {

    const ctx = useAuth();
    let navigate = useNavigate();

    const [placeList, setPlaceList] = useState([]);
    const [grouping, setGrouping] = useState();

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

  

    return (
        <div>
            <button onClick={logoutClick}>Log out</button>
            <span>Token expired :{ctx.data?.tokenExpired ? "yes" : "no"} </span>
            <span>user:{ctx.data?.user?.email}</span>

            <h1>Place List</h1><Link to='New'>New</Link>
            <br></br>
            <span>Group by: year, area</span>
            <br></br>
            <Grid placeList={placeList}></Grid>
        </div>
    )

}

export default PlaceList


