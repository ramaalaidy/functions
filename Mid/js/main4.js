function minMaxLengthAverage(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr); 
    const length = arr.length; 
    const average = arr.reduce((sum, num) => sum + num, 0) / length; 
  
    return [min, max, length, average]; 
  }
  
  console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); 
  