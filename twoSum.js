// 1. Two Sum
// O(n) space and time

var twoSum = function(nums, target) {
    let hash = {}
    for(let i = 0; i < nums.length;i++){
        let compliment = target - nums[i]
        if(hash[compliment] !== undefined) return [i,hash[compliment]]
        hash[nums[i]] = i
    }
    return
};