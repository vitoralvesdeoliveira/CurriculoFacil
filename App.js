import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[celular,setCelular]=useState('')
  const[valid,setValid] = useState(false);

    const data = {
      nome : username,
      email : email,
      celular : celular
     } // para JSON?

     const custom = valid?//colocar em styles e chamar style=styles.example
      {
        backgroundColor:'white',
        borderWidth:2,
        borderRadius:10,
        marginTop:10,
        marginBottom:10,
        borderColor: 'green',
      } :
       {
        backgroundColor:'white',
        borderWidth:2,
        borderRadius:10,
        marginTop:10,
        marginBottom:10,
        borderColor: 'red',
      }    

  return (
    <View style={styles.container}>
      <Text>Dados Pessoais</Text>
       
      <TextInput style={custom}
      placeholder='Digite seu Nome Completo'
      onChangeText={setUsername}   
      />
      <Text>Email</Text>
      <TextInput
      style={styles.input}
      placeholder='Digite seu Nome Completo'
      onChangeText={setEmail}      
      />
      <Text>Telefone</Text>
      <TextInput
      style={styles.input}
      placeholder='Digite seu Nome Completo'
      onChangeText={setCelular}      
      />
      <TouchableOpacity style={styles.button} onPress={setValid(true)}><Text>OK</Text></TouchableOpacity>
      <Text>{username+ email +celular}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius:20,
    width: 150,
    height:30,
    margin:10,
  },
});
