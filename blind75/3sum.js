// 15. 3Sum
// Time: O(n log n)

var threeSum = function(nums) {
    //sort the array 
    nums = nums.sort((a,b) => a-b)
    let ans = [];
    let target = 0;
    for(let i = 0; i < nums.length-2; i++){
        // after the first number, skip anything that is dupe and move along the array
        if(i > 0 && nums[i] === nums[i-1]) continue
        // once the number is greater then target, there is no point to loop because the array is sorted
        if(nums[i] > target) break
        //start from the next and the last and converge
        let j = i + 1
        let k = nums.length -1;
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k] 
            if(sum === target) {
                ans.push([nums[i],nums[j],nums[k]])
                // once a match has been found, you must move j and k to new unique numbers to find additional matches. this prevents dupes.
                while(nums[k] === nums[k-1]){
                    k--;
                }
                while(nums[j] === nums[j+1]){
                    j++;
                }
                k--;
                j++;
            }
            //increment j forward to increase your sum because you are in a sorted array
            else if(sum < target){
                j++;
            }
            //decrement k to lower your sum because you are in a sorted array
            else if(sum > target){
                k--;
            }
        }
    }
    return ans
};