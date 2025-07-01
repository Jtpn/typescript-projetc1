import { IEletronico } from "./interfaces/IEletronico";
import { IVestuario } from "./interfaces/IVestuario";
import { CatalogoGenerico } from "./models/CatalogoGenerico";

const celular: IEletronico = { id: 1, nome: "Smartphone X", preco: 1999, marca: "Tech" };
const notebook: IEletronico = { id: 2, nome: "Notebook Pro", preco: 3999, marca: "FastTech" };

const camiseta: IVestuario = { id: 3, nome: "Camiseta Azul", preco: 59.9, tamanho: "M" };
const jaqueta: IVestuario = { id: 4, nome: "Jaqueta de Couro", preco: 299, tamanho: "G" };

const catalogoEletronicos = new CatalogoGenerico<IEletronico>();
catalogoEletronicos.adicionarProduto(celular);
catalogoEletronicos.adicionarProduto(notebook);

const catalogoVestuario = new CatalogoGenerico<IVestuario>();
catalogoVestuario.adicionarProduto(camiseta);
catalogoVestuario.adicionarProduto(jaqueta);

console.log("Eletrônicos:");
console.log(catalogoEletronicos.listarProdutos());

console.log("Vestuário:");
console.log(catalogoVestuario.listarProdutos());

const busca = catalogoEletronicos.buscarPorNome("note");
if (busca.length > 0) {
  console.log("Resultados da busca:", busca);
} else {
  console.log("Nenhum produto encontrado com esse nome.");
}
