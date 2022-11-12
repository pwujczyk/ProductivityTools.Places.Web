import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import service from '../../../services/api.js'

function PlaceEdit() {
    const [placeEdit, setPlaceEdit] = useState();
    const { pathname } = useLocation();
    const [mode, setMode] = useState('new')

    useEffect(() => {
        if (pathname == '/New') {
            setMode('new')
        } else {
            setMode('edit')
        }
    }, [])

    const add = async () => {
        var r=await service.newPlace(placeEdit.Name);
        console.log(r);
    }

    return (
        <div>
            <span>{mode == 'new' ? "New" : "Edit"} </span>
            <span><span>name</span><input type="text" onChange={(e) => setPlaceEdit({ Name: e.target.value })}></input></span>
            <span><span>Description</span><input type="text" onChange={(e) => setPlaceEdit({ Description: e.target.value })}></input></span>
            <br></br>
            <span>{pathname}</span>
            <button onClick={add}>Add</button>
            <p> value:{placeEdit && placeEdit.Name}</p>
        </div >
    )
}

export default PlaceEdit


