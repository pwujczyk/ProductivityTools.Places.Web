import { Link } from 'react-router-dom'

function VisitThumbnail({ visit }) {

    // console.log("thumbnail")
    // console.log(place);
    const defaultThumbnail = "/thumbnail/thumbnail.png";
    return (
        <div className='thumbnailContainer' >
            <div className='thumbnail crop'>
                <img src={visit.visitThumbnail ?? defaultThumbnail}></img>
            </div><br />
            <div>XXXX</div>
            {/* <Link to={"Item\\" + place.id}>{place.Name}</Link> */}
        </div>)
}

export default VisitThumbnail;


