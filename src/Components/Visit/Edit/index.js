import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import service from '../../../services/api.js'


function VisitEdit({ updateVisit, placeId }) {
    const [vistEdit, setVisitEdit] = useState({ Comment: '', Photos: [] });
    const { pathname } = useLocation();
    const [mode, setMode] = useState('new')
    const [file, setFile] = useState();

    useEffect(() => {
        if (pathname == '/VisitNew') {
            setMode('new')
        } else {
            setMode('edit')
        }
    }, [])


    const onFileChange = event => {
        console.log(vistEdit);
        setFile(event.target.files[0])
        console.log(event.target.files[0])

    };

    const onFileUpload = async () => {
        console.log("XXXXXXXX")
        var r = await service.uploadPhoto(file,placeId);
        console.log(vistEdit);
        let photos = vistEdit.Photos;
        console.log("Photo url:")
        console.log(r);
        console.log("photos:")
        console.log(photos);
        photos.push(r);

        console.log("photos after push")
        console.log(photos);
        setVisitEdit({...vistEdit, Photos: photos });
        console.log(r);

    };

    const add = () => {
        console.log("Visit EDIT!!")
        console.log(vistEdit);
        updateVisit(vistEdit);
    }

    return (
        <div>VisitEditpm
            <div>Mode: {mode}</div>
            <div>Date:<input type="text"></input></div>
            <div>Commment: <input type="text" onChange={(e) => setVisitEdit(prevState => ({ ...prevState, Comment: e.target.value }))}></input></div>
            Photos:
            <input type="file" onChange={onFileChange} />
            <button onClick={onFileUpload}>
                Upload!
            </button>
            <span>file{file && file.name}</span>
            <span>{vistEdit && vistEdit.Comment}</span>
            <br />
            <span>Photos:
                {vistEdit && vistEdit.Photos && vistEdit.Photos.map(x => {
                    return (<span>
                        <span>{x}</span>
                        obrazek
                        <img src={x}/>
                    </span>)
                })}
            </span>
            <button onClick={add}>Add</button>
        </div >

    )
}

export default VisitEdit