import { useEffect, useState } from "react";
import Thumbnail from './thumbnail.js'

function GroupByYearView({ placeList }) {

    const [placesByYear, setPlacesByYear] = useState([]);

    useEffect(() => {

        const getYears = () => {
            let yearDictionary = {};
            placeList.forEach(place => {
                //console.log("getYears");
                place.Visits?.forEach((visit) => {
                    if (visit.Date != undefined) {
                        //console.log("DATE",visit);
                        let x = new Date(visit.Date);
                        let utcYear = x.getFullYear()
                        if (yearDictionary[utcYear] == undefined) {
                            let emptyPlace = { ...place }
                            emptyPlace.Visits = [visit]
                            yearDictionary[utcYear] = [emptyPlace]
                            console.log("utc year",utcYear, x, visit)
                            if (utcYear=='NaN')
                            {
                                debugger;
                            }
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
                            else {
                                chosenPlaceInYear.Visits.push(visit);
                            }
                        }
                    }
                })
            });
            setPlacesByYear(yearDictionary);
            console.log("year dictionarys", yearDictionary)
        }
        getYears();
    }, [placeList])

    const getThumbnail = (visit) => {
        if (visit.visitThumbnail) {
            return visit.visitThumbnail;
        } else {
            if (visit.Photos && visit.Photos.length > 0) {
                if (visit.Photos.length == 1) {
                    if (visit.Thumbnail != undefined) {
                        return visit.Thumbnail;
                    }
                    else {
                        return visit.Photos[0]
                    }
                } else {
                    return visit.Photos[0]
                }
            }
            else {
                return undefined
            }
        }
    }

    return (
        <div>Group by year:
            {
                Object.keys(placesByYear).sort(function ( a, b ) { return b - a; }).map((key, index) => (
                    <div>
                        <div>key: {key}</div>
                        <div>{placesByYear[key].map(place => {
                            return (
                                <div>
                                    {/* <div>PlaceId: {place.id} PlaceName: {place.Name}</div> */}
                                    <div>
                                        {place.Visits.map(visit => {
                                            //console.log("VV")
                                            //console.log(visit);

                                            return (
                                                <div>
                                                    {/* <div>{visit.Date}</div>
                                                    <div>{visit.Photos && visit.Photos.length > 0 ? visit.Photos[0] : "fda"}</div> */}
                                                    <Thumbnail place={place} thumbnail={getThumbnail(visit)} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}</div>
                        <div className='newLine'></div>
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