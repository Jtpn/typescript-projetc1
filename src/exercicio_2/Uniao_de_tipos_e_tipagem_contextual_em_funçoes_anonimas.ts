function ProcessarID(id: number | string): void {
    if (typeof id === 'string') {
        console.log(`Seu ID (string) em minúsculas: ${id.toLowerCase}`);
    } else if (typeof id === 'number') {
        console.log(`Seu ID (number) mutiplicado por 2: ${id * 2}`);
    }
}

const nomes = ["João", "Maria", "Lúcia"];

nomes.forEach(nome => {
    console.log(nome.toUpperCase())
    }
);

ProcessarID("abc123def");
ProcessarID(100);