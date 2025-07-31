import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Button, Alert } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import ProdutoCardAdmin from '../componentes/ProdutoCardAdmin';

const TelaAdminProdutos = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    const resposta = await axios.get('https://fakestoreapi.com/products');
    setProdutos(resposta.data);
  };

  const excluirProduto = (id) => {
    Alert.alert('Confirmar Exclusão', 'Deseja excluir este produto?', [
      { text: 'Cancelar' },
      {
        text: 'Excluir',
        onPress: async () => {
          try {
            await axios.delete(`https://fakestoreapi.com/products/${id}`);
            Toast.show({ type: 'success', text1: 'Produto excluído!' });
            carregarProdutos();
          } catch {
            Toast.show({ type: 'error', text1: 'Erro ao excluir!' });
          }
        },
      },
    ]);
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <View>
      <Button title="Adicionar Produto" onPress={() => navigation.navigate('FormProduto')} />
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Editar" onPress={() => navigation.navigate('FormProduto', { produto: item })} />
            <Button title="Excluir" onPress={() => excluirProduto(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default function TelaAdminProdutos({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProdutos(res.data))
      .catch(() => Toast.show({ type: 'error', text1: 'Erro ao carregar produtos' }));
  };

  const excluirProduto = (id: number) => {
    Alert.alert("Confirmar Exclusão", "Deseja excluir este produto?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir", style: "destructive", onPress: () => {
          axios.delete(`https://fakestoreapi.com/products/${id}`)
            .then(() => {
              Toast.show({ type: 'success', text1: 'Produto excluído com sucesso' });
              setProdutos(produtos.filter(p => p.id !== id));
            })
            .catch(() => Toast.show({ type: 'error', text1: 'Erro ao excluir produto' }));
        }
      }
    ]);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Adicionar Novo Produto" onPress={() => navigation.navigate('NovoProduto')} />
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProdutoCardAdmin
            produto={item}
            onEditar={() => navigation.navigate('EditarProduto', { id: item.id })}
            onExcluir={() => excluirProduto(item.id)}
          />
        )}
      />
    </View>
  );
}