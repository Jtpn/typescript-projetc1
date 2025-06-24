function processarDados(nome: string, idades: number[]): void {
    console.log(`Olá, ${nome.toUpperCase()}!!`);
  
    const somaIdades = idades.reduce((soma, idade) => soma + idade, 0);
    console.log(`Soma das idades: ${somaIdades}`);
  
    const primeiraIdade = idades[0];
    if (primeiraIdade % 2 === 0) {
      console.log("A primeira idade é par.");
    } else {
      console.log("A primeira idade é ímpar.");
    }
  }
  
  processarDados("João", [25, 30, 22]);