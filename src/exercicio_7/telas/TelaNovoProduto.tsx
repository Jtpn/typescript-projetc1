export default function TelaNovoProduto({ navigation }) {
    const [titulo, setTitulo] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
  
    const validar = () => {
      if (!titulo || !preco || !descricao || !imagem) {
        Toast.show({ type: 'error', text1: 'Todos os campos são obrigatórios' });
        return false;
      }
      if (isNaN(Number(preco)) || Number(preco) <= 0) {
        Toast.show({ type: 'error', text1: 'Preço inválido' });
        return false;
      }
      return true;
    };
  
    const salvarProduto = () => {
      if (!validar()) return;
  
      const novoProduto = {
        title: titulo,
        price: parseFloat(preco),
        description: descricao,
        image: imagem,
        category: categoria,
      };
  
      axios.post('https://fakestoreapi.com/products', novoProduto)
        .then(() => {
          Toast.show({ type: 'success', text1: 'Produto criado com sucesso' });
          navigation.goBack();
        })
        .catch(() => Toast.show({ type: 'error', text1: 'Erro ao criar produto' }));
    };
  
    return (
      <View style={{ padding: 16 }}>
        <TextInput placeholder="Título" value={titulo} onChangeText={setTitulo} />
        <TextInput placeholder="Preço" value={preco} onChangeText={setPreco} keyboardType="decimal-pad" />
        <TextInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
        <TextInput placeholder="Categoria" value={categoria} onChangeText={setCategoria} />
        <TextInput placeholder="URL da Imagem" value={imagem} onChangeText={setImagem} />
        <Button title="Salvar Produto" onPress={salvarProduto} />
      </View>
    );
  }
  