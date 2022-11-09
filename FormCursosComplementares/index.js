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

export default FormCursosComplementares = ({ route, navigation }) => {
  const [curso, setText1] = useState('');
  const [escola, setText2] = useState('');

  handleNewFormacao = async () => {
    const listItem = {
      //criar id
      curso: curso,
      escola: escola,
    };
    //console.log("-->",listItem)

    let savedItems = [];
    const response = await AsyncStorage.getItem(
      '@curriculofacil:cursoscomplementares'
    );

    if (response) savedItems = JSON.parse(response);
    savedItems.push(listItem);
    await AsyncStorage.setItem(
      '@curriculofacil:cursoscomplementares',
      JSON.stringify(savedItems)
    );
    navigation.navigate('CursosComplementares', listItem);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header2}>Curso Complementar</Text>
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
