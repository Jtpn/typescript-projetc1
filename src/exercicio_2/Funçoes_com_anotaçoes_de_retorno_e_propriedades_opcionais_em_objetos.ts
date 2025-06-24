interface Pessoa{
    primeiroNome: string;
    ultimoNome?: string;
}

function gerarSaudacao(pessoa: Pessoa): string{
    if (pessoa.ultimoNome) {
        return `Olá, ${pessoa.primeiroNome} ${pessoa.ultimoNome}!`;
    } else {
        return `Olá, ${pessoa.primeiroNome}!`;
    }
}

const pessoa1: Pessoa = {primeiroNome: "Ana", ultimoNome: "Silva" };
const pessoa2: Pessoa = {primeiroNome: "Pedro" };

console.log(gerarSaudacao(pessoa1))
console.log(gerarSaudacao(pessoa2))