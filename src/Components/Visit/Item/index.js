function VisitItem({ item }) {
    return (
        <p>
            <span>VisitItem</span><br />
            <span>Comment:</span><span>{item && item.Comment}</span><br/>
            <span>Photos:</span><br/>
            {item && item.Photos && item.Photos.map(x => {
                return(<p>{x}</p>)
            })}
        </p>
    )
}

export default VisitItem;