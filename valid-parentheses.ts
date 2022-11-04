// 20. Valid Parentheses

function isValid(s: string): boolean {
    let arr: string[] = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || (s[i] === '[') || (s[i] === '{')) arr.push(s[i])
        else if(s[i] ===')' && arr[arr.length-1] === '('){
            arr.pop()
        }else if(s[i] ===']' && arr[arr.length-1] === '['){
            arr.pop()
        }else if(s[i] ==='}' && arr[arr.length-1] === '{'){
            arr.pop()
        }else{
            arr.push(s[i])
        }
    }
    return arr.length === 0 ? true : false
    
};