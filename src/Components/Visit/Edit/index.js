import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import service from '../../../services/api.js'
import { v4 as uuidv4 } from 'uuid'


function VisitEdit({ updateVisit, placeId, visit }) {
    const [vistEdit, setVisitEdit] = useState({ Comment: 'x', Photos: [] });
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

    useEffect(() => {
        setVisitEdit(visit);
        console.log("UseEffect set visit")
        console.log(visit);
    }, [visit])


    const onFileChange = event => {
        console.log(vistEdit);
        setFile(event.target.files[0])
        console.log(event.target.files[0])

    };

    const onFileUpload = async () => {
        var r = await service.uploadPhoto(file, placeId);
        let photos = vistEdit.Photos;
        photos.push(r);

        setVisitEdit({ ...vistEdit, Photos: photos });
        console.log(r);
    };

    const add = () => {
        if (vistEdit.uuid==undefined)
        {
            vistEdit.uuid=uuidv4();
        }
        console.log(vistEdit);
        updateVisit(vistEdit);
    }

    return (
        <div>VisitEditpm
            <div>Mode: {mode}</div>
            <div>Date:<input type="text" value={vistEdit?.Date} onChange={(e) => setVisitEdit(prevState => ({ ...prevState, Date: e.target.value }))}></input></div>
            <div>Commment: <input type="text" value={vistEdit?.Comment} onChange={(e) => setVisitEdit(prevState => ({ ...prevState, Comment: e.target.value }))}></input></div>
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
                        <div className="crop">
                            <img src={x} />
                        </div>
                    </span>)
                })}
            </span><br/>
            <button onClick={add}>Add or update visit</button>
        </div >

    )
}

export default VisitEdit