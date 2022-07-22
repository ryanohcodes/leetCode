// 49. Group Anagrams

// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)

var groupAnagrams = function(strs) {
    let obj = {}
    for(let word of strs){
        let sorted = word.split('').sort().join('')
        if(obj[sorted] == undefined){
            obj[sorted] = [word]
        }else{
            obj[sorted].push(word)
        }
    }
    return Object.values(obj)
};