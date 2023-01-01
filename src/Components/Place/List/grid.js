
import Thumbnail from './thumbnail.js'
function Grid({placeList,grouping }) {

    const getMinimumVisit = (visits) => {
        let maxVisit = '';
        visits.forEach(element => {

            console.log("Visita");
            console.log(element);
            if (element.Date > maxVisit) {
                maxVisit = element.Date;
            }
        });
        return maxVisit;
    }

    const sorting = (a, b) => {
        if (a.Visits == undefined) {
            console.log("undefined");
            return 1;
        }
        else {
            if (b.Visits == undefined) {
                return -1;
            }
            else {
                debugger;
                let aMinVisitDate = getMinimumVisit(a.Visits);
                let bMinVisitDate = getMinimumVisit(b.Visits);
                if (aMinVisitDate < bMinVisitDate) {
                    return 1;
                }
                else {
                    return -1;
                }
            }
        }
    }

    if (grouping == 'groupByYear') {
        return (
            <div>groupByYearView</div>
        )
    }
    else {
        //     return (
        //         <div>grid
        //             {
        //                 {
        //                 < GroupByYearView ></GroupByYearView>
        //             }
        //             else
        // {
        return (
            <div>
                {placeList && placeList.sort(sorting).map(place => {
                    return (
                        <Thumbnail place={place} />
                    )
                })
                }
            </div >
        )
    }
}
export default Grid;