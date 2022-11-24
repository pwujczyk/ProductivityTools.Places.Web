import { useEffect, useState } from "react"
import service from '../../../services/api.js'
import {Link} from 'react-router-dom'

function PlaceList() {


    const [placeList, setPlaceList] = useState([]);

    useEffect(() => {
        const call = async () => {
            var data = await service.getPlaceList()
            console.log(data);
            setPlaceList(data);

        }
        call();
    }, [])

    return (
        <div>
            <span>Place List</span>
            {placeList && placeList.map(x => {
                return (
                    <div>
                        <p>{x.id} - <Link to={"Item\\"+x.id}>{x.Name}</Link></p>
                    </div>
                )
            })}
            <Link to='New'>New</Link>
        </div>
    )
}

export default PlaceList


