import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import service from '../../../services/api.js'


function PlaceItem() {
    const { id } = useParams();

    const [place, setPlace] = useState();

    useEffect(() => {
        const call = async () => {
            let result = await service.getPlace(id);
            setPlace(result);
        }
        call();
    }, [])

    return (
        <div>
            <p>item</p>
            <p>id: {id}</p>
            <p>PlaceId: {place && place.id}</p>
            <p>PlaceName: {place && place.name}</p>
            <p>Visits:</p>
            <button>Add Visit</button>
        </div>

    )
}

export default PlaceItem;