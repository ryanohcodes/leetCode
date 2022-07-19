// 125. Valid Palindrome
// Time: O(n*m)
// Space: O(n)
var isPalindrome = function(s) {
    if(s.trim() === '') return true
    let arr = []
    for(let i = 0; i < s.length;i++){
        if(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57 ||
           s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 ||
           s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
            let letter = s[i].toLowerCase()
            arr.push(letter)
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[arr.length-1-i]) return false
    }
    return true
};