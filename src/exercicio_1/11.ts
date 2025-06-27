function combine(a: boolean, b: number): boolean | number {
    return a ? b : a;
  }
  
  console.log(combine(true, 10));  
  console.log(combine(false, 5));  