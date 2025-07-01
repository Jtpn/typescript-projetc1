import formatarNome, { contarVogais } from "./utils/strings";
import { OperacoesMatematicas, MAX_VALOR } from "./utils/numeros";

console.log("Nome formatado:", formatarNome("joão da silva souza"));
console.log("Quantidade de vogais:", contarVogais("Isso é um teste!"));

const numeros = [10, 25, 5, 40, 15];
const soma = OperacoesMatematicas.somarArray(numeros);

console.log("Soma dos números:", soma);
console.log("É par?", OperacoesMatematicas.ehPar(soma));
if (soma > MAX_VALOR) {
  console.log("Soma excede o valor máximo permitido.");
} else {
    console.log("Soma dentro do limite.")
}