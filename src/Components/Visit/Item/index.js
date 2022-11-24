function VisitItem({ item }) {
    return (
        <p>
            <span>VisitItem</span><br />
            <span>Comment:</span><span>{item && item.Comment}</span><br/>
            <span>Photos:</span><br/>
            {item && item.Photos && item.Photos.map(x => {
                return (<span>
                    <span>{x}</span>
                    obrazek
                    <img src={x}/>
                </span>)
            })}
        </p>
    )
}

export default VisitItem;