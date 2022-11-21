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

    const updateVisit = (visit) => {
        console.log(visit);
        let placeVisits = place.visits;
        if (placeVisits == undefined) {
            placeVisits = [];
        }

        placeVisits.push(visit);

        setPlace(prevState => ({
            ...prevState, visits: placeVisits
        }))
        console.log(place);
        setMode('visitList');
    }

    const renderVisits = () => {
        if (mode == 'newVisit') {
            return (
                <VisitEdit updateVisit={updateVisit} />
            )
        }
        else {
            return (
                <>
                    <span>Visits:</span>
                    {console.log(place)}
                    {console.log(place?.visits)}
                    {place && place.visits && place.visits.map(x=>{
                        return(<p>fsdafad</p>)
                    })}
                    <button onClick={newVisit}>New visit</button>
                </>
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

        </div>

    )
}

export default PlaceItem;