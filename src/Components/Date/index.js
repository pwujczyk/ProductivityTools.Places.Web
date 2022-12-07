import { useEffect, useState } from "react";
import service from '../../services/api.js'

function Date() {
    const [dt, setDate] = useState("Waiting for date from server");

    useEffect(() => {
        const call = async () => {
            let r = await service.getDate();
            setDate(r);
        }
        call();
    }, []);

    return (
        <div className="debug">
            <p>{dt}</p>
        </div>
    )
}

export default Date;