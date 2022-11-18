import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import service from '../../../services/api.js'
import VisitEdit from '../../Visit/Edit/index.js';

function PlaceItem() {
    const { id } = useParams();

    const [place, setPlace] = useState();
    const [mode, setMode] = useState(null);

    useEffect(() => {
        const call = async () => {
            let result = await service.getPlace(id);
            setPlace(result);
        }
        call();
    }, [])


    const newVisit = () => {
        setMode('newVisit')
    }

    const renderVisits = () => {
        if (mode == 'newVisit') {
            return (
                <VisitEdit />
            )
        }
        else {
            return (
                <span>Visits:</span>
            )
        }
    }


    return (
        <div>
            <p>item</p>
            <p>id: {id}</p>
            <p>PlaceId: {place && place.id}</p>
            <p>PlaceName: {place && place.name}</p>
            {renderVisits()}
            <button onClick={newVisit}>New visit</button>
        </div>

    )
}

export default PlaceItem;