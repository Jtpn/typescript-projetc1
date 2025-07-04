import { TouchableOpacity } from 'react-native';


<ScrollView style={StyleSheet.lista}>
    {tarefas.map((tarefa, index) => (
        <TouchableOpacity key={index} onPress={() => removerTarefa(index)}>
            <Text style={StyleSheet.itemTarefa}>{tarefa}</Text>
        </TouchableOpacity>
    ))}
</ScrollView>

const removerTarefa = (index: number)  => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
};