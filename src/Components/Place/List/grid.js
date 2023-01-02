
import GroupByYearView from './groupByYearView.js';
import GroupByLastVisit from './groupByLastVisit.js';
import Thumbnail from './thumbnail.js'
function Grid({ placeList, grouping }) {



    if (grouping == 'groupByYear') {
        return (
            <GroupByYearView></GroupByYearView>
        )
    }
    else {
        return (
            <GroupByLastVisit placeList={placeList} ></GroupByLastVisit>
        )
    }
}
export default Grid;