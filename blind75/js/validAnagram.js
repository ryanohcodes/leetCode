// Valid Anagram

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let container = []
    for(let letter of s){
        let i = letter.charCodeAt(0) - 'a'.charCodeAt(0)
        container[i] = (container[i] || 0) + 1
    }
    for(let letter of t){
        let i = letter.charCodeAt(0) - 'a'.charCodeAt(0)
        if(!container[i]) return false
        container[i]--
    }
    return true
};