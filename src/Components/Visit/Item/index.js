function VisitItem({ item, editVisit }) {

    const edit = () => {
        editVisit(item);
    }


    return (
        <div className="visit">
            <button onClick={edit}>Edit</button><br />
            <span>VisitItem</span><br />
            <span>Comment:</span><span>{item && item.Comment}</span><br />
            <span>Date:</span><span>{item && item.Date}</span><br />
            <span>Photos:</span><br />
            {item && item.Photos && item.Photos.map(x => {
                return (<div className="crop">
                    {/* <span>{x}</span><br/> */}
                    <img src={x} />
                </div>)
            })}
        </div>
    )
}

export default VisitItem;