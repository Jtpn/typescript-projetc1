import React { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './telas/TelaLogin';
import TelaProdutos from './telas/TelaProdutos';
import { obterToken,removerToken } from './servicos/servicoArmazenamento';
import api from './api/axiosConfig';
import Toast from 'react-native-toast-message';
import TelaAdminProdutos from './src/telas/TelaAdminProdutos';
import TelaEditarProduto from './src/telas/TelaEditarProduto';
import TelaNovoProduto from './src/telas/TelaNovoProduto';


const Pilha = createNativeStackNavigator();

export default function App() {
    const [autenticado, setAutenticado] = useState<boolean | null>(null);
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

    return (
        <NavigationContainer>
            <Pilha.Navigator screenOptions={{ headShown: false }}>
                {autenticado ? (
                    <Pilha.Group>
                        <Pilha.Screen name="Produtos" options={{ title: "Lista de Produtos" }}>
                            {(props) => <TelaDetalhesProduto {...props} />}
                        </Pilha.Screen>
                    </Pilha.Group>
                ) : (
                    <Pilha.Group>
                        <Pilha.Screen name="Login" options={{ title: "Entrar" }}>
                           {(props) => <TelaLogin {...props} aoLoginSucesso={() => setAutenticado(true)} />}  
                        </Pilha.Screen>
                    </Pilha.Group>
                )}
                </Pilha.Navigator>
                </NavigationContainer>
    );
}

const estilos = StyleSheet.create({
    containerCentral: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

<Stack.Screen
  name="Busca"
  component={TelaBuscaProdutos}
  options={{ title: 'Buscar Produtos' }}
/>

export default function App() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>{/* suas rotas */}</Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </>
    );
  }



<Stack.Screen name="AdminProdutos" component={TelaAdminProdutos} />
<Stack.Screen name="EditarProduto" component={TelaEditarProduto} />
<Stack.Screen name="NovoProduto" component={TelaNovoProduto} />