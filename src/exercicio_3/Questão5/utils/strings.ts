export default function formatarNome(nomeCompleto: string): string {
    const partes = nomeCompleto.trim().split(" ");
    return partes.map((parte, i) => i === 0
      ? parte.toUpperCase()
      : parte[0].toUpperCase() + parte.slice(1).toLowerCase()
    ).join(" ");
  }
  
  export function contarVogais(texto: string): number {
    const vogais = "aeiou";
    let contador = 0;
    for (const letra of texto.toLowerCase()) {
      if (vogais.includes(letra)) contador++;
    }
    return contador;
  }
  