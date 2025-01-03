function numbersOnly(arr) {
    return arr.filter(element => typeof element !== 'string');
  }
  
  console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); 
  