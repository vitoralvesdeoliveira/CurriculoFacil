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

export default Adicionais = ({ route, navigation }) => {
  const [info, setText1] = useState('');

  handleNewFormacao = async () => {
    await AsyncStorage.setItem('@curriculofacil:adicionais', info);

    navigation.navigate('GerarPdf');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header2}>Informações Adicionais</Text>
        <TextInput
          style={styles.input}
          label="Digite qualquer informação adicional (ex: Idioma)"
          value={info}
          mode="outlined"
          onChangeText={(info) => setText1(info)}
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
