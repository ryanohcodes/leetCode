// 57. Insert Interval

var insert = function(intervals, newInterval) {
    //if there is no array, then the answer is just the addition
    if(intervals.length === 0) return [newInterval]
    let ans = []
    for(let i = 0; i < intervals.length; i++){
        //the interval is < the smallest of new int OR if there is nothing to insert, then just keep adding
        if(!newInterval || newInterval[0] > intervals[i][1]) ans.push(intervals[i])
        //the interval > than largerst of new int, it is implied here that newInterval must be added because everything else is larger 
        else if(newInterval[1] < intervals[i][0]){
            ans.push(newInterval)
            newInterval = null
            ans.push(intervals[i])
        }
        //overlap
        else{
            newInterval[0] = Math.min(newInterval[0],intervals[i][0])
            newInterval[1] = Math.max(newInterval[1],intervals[i][1])
        }
    }
    //in the case that the newInterval is larger than everything in the array
    if(newInterval) ans.push(newInterval)
    return ans
};