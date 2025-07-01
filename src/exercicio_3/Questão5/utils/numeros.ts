export class OperacoesMatematicas {
    static somarArray(numeros: number[]): number {
      return numeros.reduce((soma, n) => soma + n, 0);
    }
  
    static ehPar(numero: number): boolean {
      return numero % 2 === 0;
    }
  }
  
  export const MAX_VALOR = 1000;
  