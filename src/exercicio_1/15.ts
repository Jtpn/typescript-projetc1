let misturado: (number | string)[] = [1, "dois", 3, "quatro"];

let primeiroNumero = misturado[0] as number;
let segundoTexto = misturado[1] as string;

console.log(primeiroNumero, segundoTexto);
