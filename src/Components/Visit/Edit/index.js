import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import service from '../../../services/api.js'


function VisitEdit() {
    const [vistEdit, setVisitEdit] = useState();
    const { pathname } = useLocation();
    const [mode, setMode] = useState('new')
     const [file,setFile]=useState();

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
        var r=await service.uploadPhoto(file);
        console.log(r);
    };

    return (
        <div>VisitEditpm
            <div>Mode: {mode}</div>
            <div>Date:<input type="text"></input></div>
            <div>Commment: <input type="text"></input></div>
            Photos:
            <input type="file" onChange={onFileChange} />
            <button onClick={onFileUpload}>
                Upload!
            </button>
            <span>file{file && file.name}</span>
        </div >

    )
}

export default VisitEdit