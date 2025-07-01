import { Venda } from "./interfaces/IVenda";
import {
  gerarResumoVendas,
  atualizarStatusVenda,
  registrarVenda,
  prepararVendaParaCliente
} from "./utils/relatorioVendas";

const vendas: Venda[] = [
  { idVenda: "V001", data: "2025-07-01", valorTotal: 200, clienteId: "C001", status: "pendente" },
  { idVenda: "V002", data: "2025-07-01", valorTotal: 500, clienteId: "C002", status: "concluida" }
];

console.log("Resumo:");
console.log(gerarResumoVendas(vendas));

const vendaAtualizada = atualizarStatusVenda(vendas[0], { status: "concluida" });
console.log("Venda atualizada:", vendaAtualizada);

const vendaReadonly: Readonly<Venda> = {
  idVenda: "V003",
  data: "2025-07-01",
  valorTotal: 300,
  clienteId: "C003",
  status: "cancelada"
};
registrarVenda(vendaReadonly);
// vendaReadonly.valorTotal = 0; // Erro

const vendaCliente = prepararVendaParaCliente(vendas[1]);
console.log("Para cliente:", vendaCliente);

console.log("Vendas concluídas:");
for (const v of vendas) {
  if (v.status === "concluida") {
    console.log(v);
  }
}
