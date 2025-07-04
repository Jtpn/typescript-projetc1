<View style={styles.formContainer}>
    <TextInput
    style={StyleSheet.input}
    placeholder="Digite uma nova tarefa"
    value={texto}
    onChangeText={setTexto}
    />
    <Button title="Adicionar" onPress={adicionarTarefa} />
</View>

