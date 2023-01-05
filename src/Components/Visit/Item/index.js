
import Photo from './photo.js'

function VisitItem({ item, editVisit, setPlaceThumbnail, updateVisit }) {

    const edit = () => {
        editVisit(item);
    }

    const setVisitThumbnail = (photo) => {
        let visit = { ...item, visitThumbnail: photo }
        updateVisit(visit);
    }

    return (
        <div className="visit" >
            <b>{item && item.Date} </b><span>{item && item.Comment}</span><button className='editLink' onClick={edit}></button><br /><br />
            {item && item.Photos && item.Photos.map(x => {
                console.log("Photo");
                console.log(x);
                return (<Photo setPlaceThumbnail={setPlaceThumbnail} setVisitThumbnail={setVisitThumbnail} photo={x} />)
            })}


        </div>
    )
}

export default VisitItem;