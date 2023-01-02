import { useState } from "react";

function GroupByYearView({ placeList }) {

    useState(() => {

        const getYears = () => {
            placeList.forEach(place => {
                console.log("getYears");
                console.log(place);
                place.Visits?.forEach((visit) => {
                    if (visit.Date!=undefined)
                    {
                        console.log("DATE");
                        let x=new Date(visit.Date);
                        console.log(x.getUTCFullYear());
                    }
                    console.log(visit.Date);
                })
            });
        }
        getYears();
    }, [placeList])

    return (
        <div>Group by year</div>
    )
}

export default GroupByYearView;