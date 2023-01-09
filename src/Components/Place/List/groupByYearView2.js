import { useEffect, useState } from "react";
import Thumbnail from './thumbnail.js'
import VisitThumbnail from './visitThumbnail.js'

function GroupByYearView2({ placeList }) {

    const [visitsByYear, setVisitsByYear] = useState([]);

    useEffect(() => {

        const getYears = () => {
            let yearDictionary = {};
            placeList.forEach(place => {
                console.log("getYears");
                place.Visits?.forEach((visit) => {
                    if (visit.Date != undefined) {
                        console.log("DATE");
                        let x = new Date(visit.Date);
                        let utcYear = x.getFullYear()
                        if (yearDictionary[utcYear] == undefined) {
                            // let emptyPlace = { ...place }
                            // emptyPlace.Visits = [visit]
                            visit.Place = place;
                            yearDictionary[utcYear] = [visit]
                        }
                        else {
                            let visitsInYear = yearDictionary[utcYear]
                            visit.Place = place;
                            visitsInYear.push(visit);
                        }
                    }
                })
            });
            let structure = []
            Object.keys(yearDictionary).map((key, index) => {
                let visits = yearDictionary[key].sort((a, b) => a.Date > b.Date ? -1 : 1)
                structure.push({ 'key': key, 'data': visits });
            });
            structure.sort((a, b) => a.key > b.key ? -1 : 1);
            debugger;
            setVisitsByYear(structure);
            console.log(structure)
        }
        getYears();
    }, [placeList])

    // const getThumbnail = (visit) => {
    //     if (visit.visitThumbnail) {
    //         return visit.visitThumbnail;
    //     } else {
    //         if (visit.Photos && visit.Photos.length > 0) {
    //             if (visit.Photos.length == 1) {
    //                 if (visit.Thumbnail != undefined) {
    //                     return visit.Thumbnail;
    //                 }
    //                 else {
    //                     return visit.Photos[0]
    //                 }
    //             } else {
    //                 return visit.Photos[0]
    //             }
    //         }
    //         else {
    //             return undefined
    //         }
    //     }
    // }

    return (
        <div>Group by year4:
            {
                visitsByYear.map(item => (
                    <div>
                        <div>key2: {item.key}</div>
                        <div>{item.data.map(visit => {
                            // return (
                            // <div>
                            {/* <div>PlaceId: {place.id} PlaceName: {place.Name}</div> */ }
                            // <div>
                            // {place.Visits.map(visit => {
                            // console.log("VV")
                            // console.log(visit);

                            return (
                                <div>
                                    {/* <div>{visit.Date}</div>
                                                    <div>{visit.Photos && visit.Photos.length > 0 ? visit.Photos[0] : "fda"}</div> */}
                                    <VisitThumbnail visit={visit} />
                                </div>
                            )
                            // })}
                            {/* </div> */ }
                            {/* </div> */ }
                            // )
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

export default GroupByYearView2;