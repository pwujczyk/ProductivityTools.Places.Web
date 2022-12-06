function VisitItem({ item }) {
    return (
        <div className="visit">
            <span>VisitItem</span><br />
            <span>Comment:</span><span>{item && item.Comment}</span><br/>
            <span>Photos:</span><br/>
            {item && item.Photos && item.Photos.map(x => {
                return (<div className="crop">
                    {/* <span>{x}</span><br/> */}
                    <img src={x}/>
                </div>)
            })}
        </div>
    )
}

export default VisitItem;