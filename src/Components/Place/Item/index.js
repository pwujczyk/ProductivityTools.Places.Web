import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import service from '../../../services/api.js'
import VisitEdit from '../../Visit/Edit/index.js';
import VisitItem from '../../Visit/Item'

function PlaceItem() {
    const { id } = useParams();

    const [place, setPlace] = useState();
    const [updatePlace, setUpdatePlace] = useState(false)
    const [mode, setMode] = useState(null);

    useEffect(() => {
        const call = async () => {
            let result = await service.getPlace(id);
            setPlace(result);
        }
        call();
    }, [])

    // useEffect(()=>{
    //     const call = async () => {
    //         let result = await  service.updatePlace(place)
    //         setPlace(result);
    //     }
    //     call();
    // },[place.visits])


    const newVisit = () => {
        setMode('newVisit')
    }

    const updateVisit = (visit) => {
        debugger;
        console.log(visit);
        if (place.Visits == undefined) {
            place.Visits  = [];
        }
        let placeVisits = place.Visits;
        // if (placeVisits == undefined) {
        //     placeVisits = [];
        // }


        placeVisits.push(visit);
        let result = service.updatePlace(place)

        setPlace(prevState => ({
            ...prevState, Visits: placeVisits
        }))
        console.log("updatevisit, does place have visits?")
        console.log(place);
        setMode('visitList');
        // let updatePlace = {
        //     documentId: id,
        //     name: "FDafsaf"
        // }


    }

    const renderVisits = () => {
        if (mode == 'newVisit') {
            return (
                <VisitEdit updateVisit={updateVisit} placeId={place.id} />
            )
        }
        else {
            return (
                <>
                    <span>Visits:</span>
                    {console.log(place)}
                    {console.log(place?.visits)}
                    {place && place.Visits && place.Visits.map(x => {
                        return (<VisitItem item={x}></VisitItem>)
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
            <p>PlaceName: {place && place.Name}</p>
            <p>Description: {place && place.Description}</p>
            {renderVisits()}

        </div>

    )
}

export default PlaceItem;