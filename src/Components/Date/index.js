import { useEffect, useState } from "react";
import service from '../../services/api.js'

function Date() {
    const [dt, setDate] = useState("Waiting for date from server");

    useEffect(() => {
        const call=async()=>{
            let r=await service.getDate();
            setDate(r);
        }
        call();
    }, []);

    return (
        <p>{dt}</p>
    )
}

export default Date;