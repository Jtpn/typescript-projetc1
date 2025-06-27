let result: string | number = "Resultado";

function identificarTipo(valor: string | number | boolean) {
  console.log(`Tipo: ${typeof valor}`);
}

identificarTipo(result);
