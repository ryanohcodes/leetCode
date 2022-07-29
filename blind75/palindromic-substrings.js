// 647. Palindromic SubStrings

var countSubstrings = function(s) {
    let answer = 0
    for(let i = 0; i < s.length;i++){
        answer++
        let j = i-1
        let j2 = i
        let k = i+1 
        let k2 = i+1
        while(j >= 0 && s[k] !== undefined){
             if(s[j] === s[k]){
                 answer++
                 j--
                 k++
             }else break
        }
        while(j2 >= 0 && s[k2] !== undefined){
             if(s[j2] === s[k2]){
                 answer++
                 j2--
                 k2++
             }else break
        }
    }
    return answer
};