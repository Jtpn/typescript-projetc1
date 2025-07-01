import { Publicacao } from './models/livro';

export class Livro extends Publicacao {
  public estaDisponivel: boolean = true;

  constructor(
    id: string,
    titulo: string,
    public autor: string,
    public anoPublicacao: number
  ) {
    super(id, titulo);
  }

  emprestar(): boolean {
    if (this.estaDisponivel) {
      this.estaDisponivel = false;
      return true;
    }
    return false;
  }

  devolver(): boolean {
    if (!this.estaDisponivel) {
      this.estaDisponivel = true;
      return true;
    }
    return false;
  }
}
