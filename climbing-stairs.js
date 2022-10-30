// 70. Climbing Stairs

var climbStairs = function(n) {
    if (n===1) return 1
    if (n===2) return 2
     if(n===3) return 3
     let first = 1
     let second = 2
     for(let i = 3; i <= n; i++){
         let temp = first + second
         first = second
         second = temp
     }
     return second
  
 };