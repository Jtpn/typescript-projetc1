import { processarDados } from "./utils/dataProcessor";

const dadosRecebidos: any[] = [
  { id: 1, nome: "Alice", email: "alice@email.com" },
  { id: 2, produtoId: "P123", valor: 100 },
  { id: 3, descricao: "Algo aleatório" }
];

processarDados(dadosRecebidos);
