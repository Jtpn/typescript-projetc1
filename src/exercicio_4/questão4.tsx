import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState<string[]>([]);

  const adicionarTarefa = () => {
    if (texto.trim()) {
      setTarefas([...tarefas, texto]);
      setTexto('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa"
        value={texto}
        onChangeText={setTexto}
      />

      <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />

      <ScrollView style={styles.lista}>
        {tarefas.map((tarefa, index) => (
          <Text key={index} style={styles.itemTarefa}>
            {tarefa}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#E3F2FD',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#90CAF9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  lista: {
    marginTop: 20,
  },
  itemTarefa: {
    backgroundColor: '#BBDEFB',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
