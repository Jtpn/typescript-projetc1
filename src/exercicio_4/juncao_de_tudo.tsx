import React, { useState } from 'react';
import { StyleSheet, Text,  View,  TextInput,  Button,  ScrollView,  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState<string[]>([]);

  const adicionarTarefa = () => {
    if (texto.trim()) {
      setTarefas([...tarefas, texto]);
      setTexto('');
    }
  };

  const removerTarefa = (index: number) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa"
          value={texto}
          onChangeText={setTexto}
        />
        <Button title="Adicionar" onPress={adicionarTarefa} />
      </View>

      <ScrollView style={styles.lista}>
        {tarefas.map((tarefa, index) => (
          <TouchableOpacity key={index} onPress={() => removerTarefa(index)}>
            <Text style={styles.itemTarefa}>
              {tarefa} <Text style={styles.excluir}></Text>
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#90CAF9',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  lista: {
    marginTop: 10,
  },
  itemTarefa: {
    backgroundColor: '#BBDEFB',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  excluir: {
    color: '#D32F2F',
    fontWeight: 'bold',
  },
});
