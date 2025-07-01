import { Text } from 'react-native';

interface SaudacaoProps {
    nome: string;
}

export default function Saudacao({ nome }: SaudacaoProps) {
    return (
        <Text>Olá, {nome}!</Text>
    );
}