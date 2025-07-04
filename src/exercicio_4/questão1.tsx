import React from 'react';
import {Stylesheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={Styles.titulo}>Minhas Tarefas</Text>
        </View>
    );
}

const styles = Stylesheet.create({
    container: {
        felx: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});