import { Link } from 'react-router-dom'

function VisitThumbnail({ visit }) {

    // console.log("thumbnail")
    // console.log(place);
    const defaultThumbnail = "/thumbnail/thumbnail.png";
    const getThumbnail = () => {
        debugger;
        if (visit==undefined) {
            return defaultThumbnail;
        }
        else {
            if (visit.visitThumbnail != undefined) {
                return visit.visitThumbnail;
            }
            else {
                if (visit.Photos.length > 0) {
                    return visit.Photos[0];
                }
                else {
                    return defaultThumbnail;
                }
            }
        }
    }
    return (
        <div className='thumbnailContainer' >
            <div className='thumbnail crop'>
                <img src={getThumbnail()}></img>
                <div>Name:{visit.Place.Name}</div>
            </div><br />
            <Link to={"Item\\" + visit.Place.id}>{visit.Place.Name} {visit.Date}</Link>
        </div>)
}

export default VisitThumbnail;


