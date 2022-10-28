// 55. Jump Game
// O(n) run time
// O(1) Space

var canJump = function(nums) {
    let goal = nums.length-1
    for(let i = nums.length-1; i >= 0; i--){
        if(i + nums[i] >= goal) goal = i
    }
    return goal === 0 ? true : false
};