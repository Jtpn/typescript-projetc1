import { IItemCatalogo } from "../interfaces/IItemCatalogo";

export class CatalogoGenerico<T extends IItemCatalogo> {
  private produtos: T[] = [];

  adicionarProduto(produto: T) {
    this.produtos.push(produto);
  }

  listarProdutos(): T[] {
    return this.produtos;
  }

  buscarPorNome(nome: string): T[] {
    const termo = nome.toLowerCase();
    return this.produtos.filter(p => p.nome.toLowerCase().includes(termo));
  }
}
