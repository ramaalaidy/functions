function getAbsSum(arr) {
    return arr.map(Math.abs).reduce((sum, num) => sum + num, 0);
  }
  
  console.log(getAbsSum([-1, -3, -5, -4, -10, 0])); 
  