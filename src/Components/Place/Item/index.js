import {useParams} from 'react-router-dom'
function PlaceItem() {
    const { id } = useParams();

    return (
        <div>
            <p>item</p>
            <p>{id}</p>
        </div>

    )
}

export default PlaceItem;