import Thumbnail from './thumbnail.js'

function groupByLastVisit({ placeList }) {
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

    return (
        <div>
            {placeList && placeList.sort(sorting).map(place => {
                return (
                    <Thumbnail place={place} thumbnail={place.Thumbnail} />
                )
            })
            }
        </div >
    )
}

export default groupByLastVisit;