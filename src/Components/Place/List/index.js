import { useEffect, useState } from "react"
import service from '../../../services/api.js'
import { Link } from 'react-router-dom'
import Thumbnail from './thumbnail.js'

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
            <h1>Place List</h1><Link to='New'>New</Link>
            <br></br>
            {placeList && placeList.map(place => {
                console.log("MAPPING");
                console.log(place);
                return (
                    <Thumbnail place={place} />
                )
            })}                
        </div>
    )
}

export default PlaceList


