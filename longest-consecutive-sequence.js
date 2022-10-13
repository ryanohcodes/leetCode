// 128. Longest Consecutive Sequence
// Runtime O(n) b/c traversing the array of numbers only once
// Space O(1) b/c same amount of space every time regardless of the size of the input

var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    if(nums.length === 1) return 1
    nums = nums.sort((a,b)=> a-b)
    let len = 1
    let max = 1
    let i = 0
    let j = i+1
    while( i < nums.length && j < nums.length){
        while(nums[i] === nums[j]){
            i++
            j++
        }
        if(nums[i] === nums[j] - 1){
            len++
            if(len > max) max = len
        }else{
            len = 1
        }
        i++
        j++
    }
    return max
};