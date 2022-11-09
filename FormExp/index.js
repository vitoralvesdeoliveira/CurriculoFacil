import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import {
  Card,
  Avatar,
  IconButton,
  MD3Colors,
  TextInput,
  Button,
  Checkbox,
} from 'react-native-paper';

export default FormExp = ({ route, navigation }) => {
  const [empresa, setText1] = useState('');
  const [funcao, setText2] = useState('');
  const [principaisatividades, setText3] = useState('');

  handleNewFormacao = async () => {
    const listItem = {
      //criar id
      empresa: empresa,
      funcao: funcao,
      principaisatividades: principaisatividades,
    };

    let savedItems = [];
    const response = await AsyncStorage.getItem(
      '@curriculofacil:ExpProfissionais'
    );
    if (response) {
      savedItems = JSON.parse(response);
    }
    savedItems.push(listItem);

    await AsyncStorage.setItem(
      '@curriculofacil:ExpProfissionais',
      JSON.stringify(savedItems)
    );
    navigation.navigate('ExpProfissionais', listItem);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header2}>Experiência Profissional</Text>
        <TextInput
          style={styles.input}
          label="Empresa"
          value={empresa}
          mode="outlined"
          onChangeText={(empresa) => setText1(empresa)}
        />
        <TextInput
          style={styles.input}
          label="Função"
          value={funcao}
          mode="outlined"
          onChangeText={(funcao) => setText2(funcao)}
        />
        <TextInput
          style={styles.input}
          label="Principais Atividades"
          value={principaisatividades}
          mode="outlined"
          onChangeText={(principaisatividades) =>
            setText3(principaisatividades)
          }
        />
        <TouchableOpacity style={styles.button} onPress={handleNewFormacao}>
          <Text>OK</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#A9DEF9',
    justifyContent: 'center',
  },
  header2: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 250,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    width: 250,
    height: 45,
  },
});
