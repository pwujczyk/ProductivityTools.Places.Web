
import Photo from './photo.js'

function VisitItem({ item, editVisit, setThumbnail }) {

    const edit = () => {
        editVisit(item);
    }

    return (
        <div className="visit" >
            <b>{item && item.Date} </b><span>{item && item.Comment}</span><button className='editLink' onClick={edit}></button><br /><br />
            {item && item.Photos && item.Photos.map(x => {
                return (<Photo setThumbnail={setThumbnail} photo={x} />)
            })}


        </div>
    )
}

export default VisitItem;