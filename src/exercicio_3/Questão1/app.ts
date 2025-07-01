import { Livro } from './models/Livro';

// Criando instâncias
const livro1 = new Livro('1', 'O Senhor dos Anéis', 'J.R.R. Tolkien', 1954);
const livro2 = new Livro('2', '1984', 'George Orwell', 1949);

// Tentando emprestar o livro1
if (livro1.emprestar()) {
  console.log(`Livro "${livro1.titulo}" emprestado com sucesso.`);
} else {
  console.log(`Livro "${livro1.titulo}" não está disponível para empréstimo.`);
}

// Tentando emprestar novamente o mesmo livro
if (livro1.emprestar()) {
  console.log(`Livro "${livro1.titulo}" emprestado novamente.`);
} else {
  console.log(`Livro "${livro1.titulo}" já está emprestado.`);
}

// Devolvendo o livro
if (livro1.devolver()) {
  console.log(`Livro "${livro1.titulo}" devolvido com sucesso.`);
}

// Tentando emprestar novamente após devolução
if (livro1.emprestar()) {
  console.log(`Livro "${livro1.titulo}" emprestado após devolução.`);
}
