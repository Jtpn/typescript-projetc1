import React { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import TelaLogin from './telas/TelaLogin';
import TelaProdutos from './telas/TelaProdutos';
import { obterToken,removerToken } from './servicos/servicoArmazenamento';
import api from './api/axiosConfig';

export default function App() {
    const [autenticado, setAutenticado] = useState<boolean | null>(null);
   verificando
    const [carregandoInicial, setCarregandoInicial] = useState(true);
    useEffect(() => {
    const verificarAutenticacao = async () => {
    const token = await obterToken();
    if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setAutenticado(true);
    } else {
    setAutenticado(false);
    }
    setCarregandoInicial(false);
    };
    verificarAutenticacao();
   logout forçado.
    }, []);
    const lidarComLogout = async () => {
    await removerToken();
    delete api.defaults.headers.common['Authorization']; 
    setAutenticado(false);
    };
    if (carregandoInicial) {
    return (
    <View style={estilos.containerCentral}>
    <ActivityIndicator size="large" />
    </View>
    );
    }
    if (autenticado) {
    return <TelaProdutos aoLogout={lidarComLogout} />;
    } else {
    return <TelaLogin aoLoginSucesso={() => setAutenticado(true)} />;
    }
   }
   const estilos = StyleSheet.create({
    containerCentral: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
   });

function useState<T>(arg0: null): [any, any] {
    throw new Error('Function not implemented.');
}


function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error('Function not implemented.');
}
