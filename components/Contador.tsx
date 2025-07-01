import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {

    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Contagem: {count}</Text>
            <button title="Incrementar" onPress={() }></button>
        </View>
    );
}