import { Link } from 'react-router-dom'

function Thumbnail({ place }) {

    console.log("thumbnail")
    console.log(place);

    return (
        <div className='thumbnailContainer' >
            <div className='thumbnail crop'>
                <img src={place.Thumbnail}></img>
            </div><br/>
            <Link to={"Item\\" + place.id}>{place.Name}</Link>
        </div>)
}

export default Thumbnail;


