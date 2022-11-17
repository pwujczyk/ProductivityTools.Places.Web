import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import service from '../../../services/api.js'


function VisitEdit() {
    const [vistEdit, setVisitEdit] = useState({ Comment: '', Photos: ['dd', 'dd'] });
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
        setFile(event.target.files[0])
        console.log(event.target.files[0])

    };
    const onFileUpload = async () => {
        var r = await service.uploadPhoto(file);
        let photos = vistEdit.Photos;
        console.log(r);
        photos.push(r.data);
        setVisitEdit({ Photos: photos });
        console.log(r);

    };

    return (
        <div>VisitEditpm
            <div>Mode: {mode}</div>
            <div>Date:<input type="text"></input></div>
            <div>Commment: <input type="text" onChange={(e) => setVisitEdit({ Comment: e.target.value })}></input></div>
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
                    return (<span>{x}</span>)
                })}
            </span>
        </div >

    )
}

export default VisitEdit