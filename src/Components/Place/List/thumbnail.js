import { Link } from 'react-router-dom'

function Thumbnail({ place }) {

    console.log("thumbnail")
    console.log(place);
    const defaultThumbnail = "/thumbnail/thumbnail.png";
    return (
        <div className='thumbnailContainer' >
            <div className='thumbnail crop'>
                <img src={place.Thumbnail ?? defaultThumbnail}></img>
            </div><br />
            <Link to={"Item\\" + place.id}>{place.Name}</Link>
        </div>)
}

export default Thumbnail;


