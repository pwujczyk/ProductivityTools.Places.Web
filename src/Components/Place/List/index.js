import { useEffect, useState } from "react"
import service from '../../../services/api.js'

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
                        <p>{x.id}</p>
                        <p>{x.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PlaceList


