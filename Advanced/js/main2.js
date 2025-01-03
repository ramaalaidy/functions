function MultiplyByLength(arr) {
    const length = arr.length; 
    return arr.map(element => element * length); 
  }
  
  console.log(MultiplyByLength([4, 2, 5])); 
  