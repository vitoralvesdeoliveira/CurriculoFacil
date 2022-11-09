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
import { TextInputMask } from 'react-native-masked-text';

export default Copia = ({ route, navigation }) => {
  const [curso, setText1] = useState('');
  const [escola, setText2] = useState('');
  const [periodo1, setText3] = useState('Mês/Ano');
  const [periodo2, setText4] = useState('Mês/Ano');
  const [checked, setChecked] = useState(false);

  handleNewFormacao = async () => {
    const listItem = {
      //criar id
      curso: curso,
      escola: escola,
      periodo1: periodo1,
      periodo2: periodo2,
    };
    console.log('-->', listItem);

    let savedItems = [];
    const response = await AsyncStorage.getItem(
      '@curriculofacil:formacoesteste'
    );

    if (response) savedItems = JSON.parse(response);
    savedItems.push(listItem);
    await AsyncStorage.setItem(
      '@curriculofacil:formacoesteste',
      JSON.stringify(savedItems)
    );
    navigation.navigate('AppList', listItem);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header2}>Formação</Text>
        <TextInput
          style={styles.input}
          label="Curso"
          value={curso}
          mode="outlined"
          onChangeText={(curso) => setText1(curso)}
        />
        <TextInput
          style={styles.input}
          label="Escola"
          value={escola}
          mode="outlined"
          onChangeText={(escola) => setText2(escola)}
        />
        <Text style={styles.paragraph}>Período</Text>
        <TextInputMask
          keyboardType={'numeric'}
          type={'custom'}
          options={{
            mask: '99/9999',
          }}
          style={styles.input}
          label="Mês de início"
          value={periodo1}
          mode="outlined"
          onChangeText={(periodo1) => setText3(periodo1)}
        />
        <TextInputMask
          keyboardType={'numeric'}
          type={'custom'}
          options={{
            mask: '99/9999',
          }}
          style={styles.input}
          label="Mês de conclusão"
          value={periodo2}
          mode="outlined"
          onChangeText={(periodo2) => setText4(periodo2)}
        />
        <Text style={styles.paragraph}>Curso concluído?</Text>
        <Checkbox
          color="purple"
          title="girl"
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
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
  paragraph: {
    fontSize: 20,
  },
  input: {
    backgroundColor: 'white',
    marginVertical: 10,
    width: 250,
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
