let dadosFlexiveis: any;

dadosFlexiveis = "Olá TypeScript!";
console.log(dadosFlexiveis);

dadosFlexiveis = 123;
console.log(dadosFlexiveis);

function inferirTipo(valor: any) {
  console.log(typeof valor);
}

inferirTipo("TypeScript");
inferirTipo(42);