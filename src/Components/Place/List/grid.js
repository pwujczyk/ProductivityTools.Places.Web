

import GroupByLastVisit from './groupByLastVisit.js';
import GroupByYearView from './groupByYearView.js';
import GroupByYearView2 from './groupByYearView2.js';
function Grid({ placeList, grouping }) {



    if (grouping == 'groupByYear') {
        return (
            <GroupByYearView placeList={placeList}></GroupByYearView>
        )
    }
    else if (grouping == 'groupByYear2') {
        return (
            <GroupByYearView2 placeList={placeList}></GroupByYearView2>
        )
    }
    else {
        return (
            <GroupByLastVisit placeList={placeList} ></GroupByLastVisit>
        )
    }
}
export default Grid;