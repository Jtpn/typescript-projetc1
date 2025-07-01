import { Venda } from "../interfaces/IVenda";

export function gerarResumoVendas(vendas: Venda[]): Pick<Venda, 'idVenda' | 'valorTotal' | 'status'>[] {
  return vendas.map(({ idVenda, valorTotal, status }) => ({ idVenda, valorTotal, status }));
}

export function atualizarStatusVenda(vendaOriginal: Venda, novoStatus: Partial<Venda>): Venda {
  return { ...vendaOriginal, ...novoStatus };
}

export function registrarVenda(venda: Readonly<Venda>): void {
  console.log("Registrando venda:", venda);
  // venda.valorTotal = 999; // Erro de compilação se descomentado
}

export function prepararVendaParaCliente(venda: Venda): Omit<Venda, "clienteId" | "status"> {
  const { clienteId, status, ...restante } = venda;
  return restante;
}
