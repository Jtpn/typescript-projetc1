import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
    const [texto, setTexto] = useState('');
    const [tarefas, setTarefas] = useState<string[]>([]);

    const adicionarTarefa = () => {
        if(texto.trim()) {
            setTarefas([...tarefas, texto]);
            setTexto('');
        }
    };


return (
    <View style={StyleSheet.container}>
        <text style={StyleSheet.titulo}>Minhas Tarefas</text>

        <TextInput style={Styles.input}
        placeholder="Digite um nova tarefa"
        value={texto}
        onchangeText={setTexto}
        />

        <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
        <Text style={StyleSheet.preview}>{JSON.stringify(tarefas)}</Text>
    </View>
    );
}