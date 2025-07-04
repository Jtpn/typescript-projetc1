import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [tarefa, setTarefa] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />

      <Text style={styles.textoDigitado}>Você digitou: {tarefa}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    marginBottom: 10,
  },
  textoDigitado: {
    fontSize: 16,
    color: '#555',
  },
});
