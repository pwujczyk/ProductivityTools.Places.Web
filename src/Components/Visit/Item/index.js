function VisitItem({ item }) {
    return (
        <p>
            <span>VisitItem</span><br />
            <span>Comment:</span><span>{item && item.Comment}</span><br/>
            <span>Photos:</span><br/>
            {item && item.Photos && item.Photos.map(x => {
                return (<div class="crop">
                    {/* <span>{x}</span><br/> */}
                    <img src={x}/>
                </div>)
            })}
        </p>
    )
}

export default VisitItem;