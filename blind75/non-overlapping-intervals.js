//435. Non-overlapping Intervals

var eraseOverlapIntervals = function(intervals) {
    let counter = 0
    if(intervals.length === 1) return counter
    intervals =intervals.sort((a,b) => a[0]-b[0])
    let active = intervals[0]
    for(let i = 1; i < intervals.length;i++){
        if(active[1] > intervals[i][0] && active[1] < intervals[i][1]) counter++
        else if(active[1] >= intervals[i][1]){
            counter++
            active= intervals[i]
        }
        else active= intervals[i]
    }
    return counter
};