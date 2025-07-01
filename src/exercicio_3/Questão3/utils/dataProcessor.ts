import { UsuarioCompleto, ItemPedido } from "../types/Dados";

export function processarDados(dados: any[]) {
  dados.forEach((item) => {
    if (item && typeof item.nome === "string" && typeof item.email === "string") {
      const usuario = item as UsuarioCompleto;
      console.log("Usuário:", usuario.id, usuario.nome, usuario.email);
    } else if (item && typeof item.produtoId === "string" && typeof item.valor === "number") {
      const pedido = item as ItemPedido;
      console.log("Pedido:", pedido.id, pedido.produtoId, pedido.valor);
    } else {
      console.log("Item com estrutura desconhecida:", item);
    }
  });
}
