export interface CredenciaisLogin {
    usuario: string;
    senha: string;
}

export interface RespostaLoginAPI {
    token: string
}

export interface ProdutoAPI {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    };
}