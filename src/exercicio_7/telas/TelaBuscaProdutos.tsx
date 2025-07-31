import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import Toast from 'react-native-toast-message';
import { getProdutos } from '../servicos/api';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';

export default function TelaBuscaProdutos() {
  const [termo, setTermo] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [filtrados, setFiltrados] = useState([]);

  useEffect(() => {
    async function carregar() {
      const resultado = await getProdutos();
      setProdutos(resultado);
    }
    carregar();
  }, []);

  useEffect(() => {
    const resultado = produtos.filter(p =>
      p.title.toLowerCase().includes(termo.toLowerCase())
    );
    setFiltrados(resultado);

    if (resultado.length === 0 && termo !== '') {
      Toast.show({
        type: 'info',
        text1: 'Nenhum resultado encontrado',
        text2: `Para "${termo}"`,
      });
    }
  }, [termo]);

  return (
    <View>
      <TextInput
        placeholder="Buscar produtos..."
        value={termo}
        onChangeText={setTermo}
      />
      <FlatList
        data={filtrados}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}



export default function TelaProdutos() {
  const navigation = useNavigation();

  function navegarParaBusca() {
    navigation.navigate('BuscaProdutos');
  }

  return (
    <TouchableOpacity onPress={navegarParaBusca}>
      <Text> Buscar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 8, marginBottom: 16 },
});