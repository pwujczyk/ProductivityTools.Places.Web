import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import service from '../../../services/api.js'

function VisitEdit()
{
    const [vistEdit, setVisitEdit] = useState();
    const { pathname } = useLocation();
    const [mode, setMode] = useState('new')

    useEffect(() => {
        if (pathname == '/VisitNew') {
            setMode('new')
        } else {
            setMode('edit')
        }
    }, [])

    return (
        <div>VisitEdit
            <div>Mode: {mode}</div>
            <div>Date:<input type="text"></input></div>
            <div>Commment: <input type="text"></input></div>
            Photos:
        </div>

    )
}

export default VisitEdit