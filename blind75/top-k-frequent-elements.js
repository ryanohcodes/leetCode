//347. Top K Frequent Elements

var topKFrequent = function(nums, k) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] == undefined ? obj[nums[i]] = 1 : obj[nums[i]]++
    }
    let sortedArr = Object.entries(obj).sort((a,b)=>b[1]-a[1])
    let answer = []
    for(let i = 0; i < k;i++){
        answer.push(Number(sortedArr[i][0]))
    }
    return answer
  };