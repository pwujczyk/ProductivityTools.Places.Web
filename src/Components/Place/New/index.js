import { useEffect, useState } from "react"
import service from '../../../services/api.js'

function PlaceEdit() {
    const [placeEdit, setPlaceEdit] = useState();

    return (
        <div>
            <span>Place Edit</span>
            <span><span>name</span><input type="text"></input></span>
        </div>
    )
}

export default PlaceEdit


