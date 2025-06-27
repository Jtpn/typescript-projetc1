function verificarTipo(valor: string | number) {
    if (typeof valor === "string") {
      console.log("É uma string:", valor);
    } else if (typeof valor === "number") {
      console.log("É um número:", valor);
    }
  }
  
  verificarTipo("teste");
  verificarTipo(123);
  