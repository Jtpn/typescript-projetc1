type StatusPedido = "pendente" | "processando" | "concluido" | "cancelado";

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

enum PrioridadeEnvio {
    Baixa = 1,
    Media = 2,
    Alta = 3
}

function exibirDetalhesPedido(
    Produto: Produto,
    Status: StatusPedido,
    prioridade: PrioridadeEnvio
): void {
    const prioridadeNome = PrioridadeEnvio[prioridade];

    console.log("Detalhes do Pedido:");
    console.log(`Produto ID: ${Produto.id}`);
    console.log(`Nome do Produto: ${Produto.nome}`);
    console.log(`Preço: ${Produto.preco}`);
    console.log(`Status do Pedido: ${status}`);
    console.log(`Prioridade de Envio: ${prioridade} (${prioridadeNome})`);
}

const produtoExemplo: Produto = {
    id: 101,
    nome: "Camiseta",
    preco: 30.00
};

const statusExemplo: StatusPedido = "processando";
const prioridadeExemplo: PrioridadeEnvio = PrioridadeEnvio.Media;

exibirDetalhesPedido(produtoExemplo, statusExemplo, prioridadeExemplo);