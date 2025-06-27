function comprimentoTotal(input: string | string[]): number {
    if (typeof input === "string") {
      return input.length;
    } else {
      return input.reduce((soma, item) => soma + item.length, 0);
    }
  }
  
  console.log(comprimentoTotal("Olá")); 
  console.log(comprimentoTotal(["Oi", "mundo"])); 
  