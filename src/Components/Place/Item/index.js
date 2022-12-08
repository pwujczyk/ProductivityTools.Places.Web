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
    const [editedVisit, setEditedVisit] = useState(null);

    useEffect(() => {
        const call = async () => {
            let result = await service.getPlace(id);
            setPlace(result);
        }
        call();
    }, [])

    const editPlace = () => {
        setMode('editPlace')
    }

    const newVisit = () => {
        setMode('newVisit')
    }

    const editVisit = (item) => {
        setMode('editVisit')
        setEditedVisit(item);
    }

    const setThumbnail = async (url) => {
        setPlace({...place, 'Thumbnail': url});
        savePlace();
    }

    const updateVisit = async (visit) => {
        debugger;
        console.log(visit);
        if (place.Visits == undefined) {
            place.Visits = [];
        }
        let placeVisits = place.Visits;

        let elementInArray = false;
        for (var i = 0; i < placeVisits.length; i++) {
            if (placeVisits[i].uuid == visit.uuid) {
                placeVisits[i] = { ...placeVisits[i], ...visit }
                elementInArray = true;
                break
            }
        }
        if (elementInArray == false) {
            placeVisits.push(visit);
        }
        let result = await savePlace();

        setPlace(prevState => ({
            ...prevState, Visits: placeVisits
        }))
        console.log("updatevisit, does place have visits?")
        console.log(place);
        setMode('visitList');
    }

    const savePlace = async () => {
        let result = await service.updatePlace(place)
        return result;
    }

    const renderVisits = () => {
        if (mode == 'newVisit') {
            return (
                <VisitEdit updateVisit={updateVisit} placeId={place.id} />
            )
        }
        else if (mode == 'editVisit') {
            return (
                <VisitEdit updateVisit={updateVisit} visit={editedVisit} placeId={place.id} />
            )
        }
        else {
            return (
                <>
                    <span>Visits:</span>
                    {console.log(place)}
                    {console.log(place?.visits)}
                    {place && place.Visits && place.Visits.map(x => {
                        return (<VisitItem editVisit={editVisit} setThumbnail={setThumbnail} item={x}></VisitItem>)
                    })}

                    <div className="newLine">
                        <button onClick={newVisit}>New visit</button>
                    </div>
                </>
            )
        }
    }

    const renderPlace = () => {
        if (mode == 'editPlace') {
            return (
                <>
                    <h2>Name: <input type="text" value={place?.Name} onChange={(e) => setPlace(prevState => ({ ...prevState, Name: e.target.value }))}></input></h2>
                    <p>Description: {place && place.Description}</p>
                    <button onClick={savePlace}>save</button><br />
                </>
            )
        } else {
            return (
                <>
                    <h2>Name: {place && place.Name}<button className='editLink' onClick={editPlace}></button> </h2>
                    <p>Description: {place && place.Description}</p>
                </>
            )
        }
    }


    return (
        <div>
            <Link to='/'>Home</Link>
            {renderPlace()}
            {renderVisits()}
            <hr></hr>
            <div className='debug'>
                <p>id: {id}</p>
                <p>PlaceId: {place && place.id}</p>
            </div>
        </div>

    )
}

export default PlaceItem;