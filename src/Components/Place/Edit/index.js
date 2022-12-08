import { useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import service from '../../../services/api.js'
import TextField from '@mui/material/TextField';

function PlaceEdit() {
    const [placeEdit, setPlaceEdit] = useState();
    const { pathname } = useLocation();
    const [mode, setMode] = useState('new')

    let navigate = useNavigate();
    // Somewhere in your code, e.g. inside a handler:
    
    useEffect(() => {
        if (pathname == '/New') {
            setMode('new')
        } else {
            setMode('edit')
        }
    }, [])

    const add = async () => {
        var r=await service.newPlace(placeEdit);
        console.log(r);
    }

    const cancel=async()=>{
        navigate("/"); 
    
    }

    return (
        <div>
            <TextField label="Name" variant="outlined" value={placeEdit.Name} onChange={(e) => setPlaceEdit({ ...placeEdit, Name: e.target.value })} />
            <TextField label="Description" variant="outlined" value={placeEdit.Description} multiline  minRows={3} onChange={(e) => setPlaceEdit({ ...placeEdit, Description: e.target.value })} />

            <span><span>name</span><input type="text" onChange={(e) => setPlaceEdit({ ...placeEdit, Name: e.target.value })}></input></span>
            <span><span>Description</span><input type="text" onChange={(e) => setPlaceEdit({ ...placeEdit,Description: e.target.value })}></input></span>
            <br></br>
            <span>{pathname}</span>
            <button onClick={add}>Add</button>
            <button onClick={cancel}>Cancel</button>
            <p> value:{placeEdit && placeEdit.Name}</p>
        </div >
    )
}

export default PlaceEdit


