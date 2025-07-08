import axios from 'axios';
import { obterToken, removerToken } from '../servicos/servicoArmazenamento';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/', //URL base da Fake Store API
    timeout: 10000, // Tempo limite da requisição em ms
    Headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor de requisição: Adiciona o token
api.interceptors.request.use(
    async (config: { headers: { Authorization: string; }; }) => {
        const token = await obterToken(); // Obtém o token armazenado
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (erro: any) => {
        return Promise.reject(erro);
    }
);

api.interceptors.response.use(
    (response: any) => response,
    async (erro: { response: { status: number; }; }) => {
        if (erro.response && erro.response.status === 401) {
            await removerToken();
            console.warn('Token de autenticação expirado ou inválido. Realize o login novamente.');
        }
        return Promise.reject(erro);
    }
);

export default api;