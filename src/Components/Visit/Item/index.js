function VisitItem({ item, editVisit }) {

    const edit = () => {
        editVisit(item);
    }


    return (
        <div className="visit">
            <span>Date: </span><span>{item && item.Date}</span><button onClick={edit}>Edit</button><br />
            <span>Comment: </span><span>{item && item.Comment}</span><br /><br />
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