import { useEffect, useState } from "react";

function GroupByYearView({ placeList }) {

    const [placesByYear, setPlacesByYear] = useState([]);

    useEffect(() => {

        const getYears = () => {
            let yearDictionary = {};
            placeList.forEach(place => {
                console.log("getYears");
                console.log(place);
                place.Visits?.forEach((visit) => {
                    if (visit.Date != undefined) {
                        console.log("DATE");
                        let x = new Date(visit.Date);
                        let utcYear = x.getFullYear()
                        debugger;
                        if (yearDictionary[utcYear] == undefined) {
                            let emptyPlace = { ...place }
                            emptyPlace.Visits = [visit]
                            yearDictionary[utcYear] = [emptyPlace]
                        }
                        else {
                            let placesInYear = yearDictionary[utcYear]
                            let chosenPlaceInYear = placesInYear.find(x => x.id == place.id);
                            if (chosenPlaceInYear == undefined) {
                                let emptyPlace = { ...place }
                                emptyPlace.Visits = [visit]
                                placesInYear.push(emptyPlace)
                                chosenPlaceInYear = emptyPlace;
                            }
                            debugger;
                            chosenPlaceInYear.Visits.push(visit);

                        }
                    }
                })
            });
            setPlacesByYear(yearDictionary);
            console.log(yearDictionary)
        }
        getYears();
    }, [placeList])

    return (
        <div>Group by year:
            {
                Object.keys(placesByYear).map((key, index) => (
                    <div>
                        <div>{key}</div>
                        <div>{placesByYear[key].map(x => {
                            return (
                                <div>
                                    <div>PlaceId: {x.id} PlaceName: {x.Name}</div>
                                    <div>
                                        {x.Visits.map(visit => {
                                            return (
                                                <div>{visit.Date}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}</div>
                    </div>
                ))
            }
            {/* {placesByYear.map(year => {
                return (
                    <div>{year}</div>
                )
            })} */}
        </div>
    )
}

export default GroupByYearView;