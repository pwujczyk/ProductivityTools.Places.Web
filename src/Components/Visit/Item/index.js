function VisitItem({ item, editVisit }) {

    const edit = () => {
        editVisit(item);
    }


    return (
        <div className="visit">
            <b>{item && item.Date} </b><span>{item && item.Comment}</span><button className='editLink' onClick={edit}></button><br /><br />
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