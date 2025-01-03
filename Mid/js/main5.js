function romanNumbers(num) {
    const romanNumerals = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 80, symbol: "LXXX" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
    ];
  
    let result = "";
  
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].symbol;
        num -= romanNumerals[i].value;
      }
    }
    return result;
  }
  console.log(romanNumbers(1989)); 
  