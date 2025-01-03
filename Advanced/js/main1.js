function countWords(str) {
    const words = str.split(/\s+/); 
    return words.length;
  }
  
  console.log(countWords('hello from CodingAcademy!')); 
  