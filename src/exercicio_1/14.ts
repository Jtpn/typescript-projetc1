function isOdd(n: number): boolean {
    if (typeof n === "number" && !isNaN(n)) {
      return n % 2 !== 0;
    }
    throw new Error("Entrada inválida");
  }
  
  console.log(isOdd(3));
  