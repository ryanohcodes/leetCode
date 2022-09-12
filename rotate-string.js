// 796. Rotate String

var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false
    goal = goal+goal
    if(goal.indexOf(s) !== -1) return true
    return false
  };