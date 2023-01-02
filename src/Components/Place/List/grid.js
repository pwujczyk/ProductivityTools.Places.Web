
import GroupByYearView from './groupByYearView.js';
import GroupByLastVisit from './groupByLastVisit.js';
function Grid({ placeList, grouping }) {



    if (grouping == 'groupByYear') {
        return (
            <GroupByYearView  placeList={placeList}></GroupByYearView>
        )
    }
    else {
        return (
            <GroupByLastVisit placeList={placeList} ></GroupByLastVisit>
        )
    }
}
export default Grid;