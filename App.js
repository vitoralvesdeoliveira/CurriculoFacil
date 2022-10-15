import React, { useTransition } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default App = () => {

  const [texto,setTexto]= useState('');
  
  const border_state = texto!=''? styles.input_green_border : styles.input_red_border

  Submissao = () => {

    if(texto==''){

      console.log("VAZIO")
    }

    const data = {
      nome : texto,
    }

    console.log(data);
    console.log('Forms Submetido.')
    return;
  }


  return(
    <View style={styles.container}>
      <Text style={styles.header}>Vamos começar</Text>
      <Text style={styles.header}>com seus</Text>
      <Text style={styles.header2}>Dados Pessoais</Text>
      <Text style={styles.subtitle}>Nome Completo</Text>
      <TextInput
      placeholder='Digite o texto'
      onChangeText={setTexto}
      style={border_state}
      />
      <Text style={styles.subtitle}>E-mail</Text>
      <TextInput 
      placeholder='Digite o texto'
      onChangeText={setTexto}
      style={border_state}
      />
      <Text style={styles.subtitle}>Telefone</Text>
      <TextInput 
      placeholder='Digite o texto'
      onChangeText={setTexto}
      style={border_state}
      />
      <TouchableOpacity
      style={styles.button}
      onPress={Submissao}
      ><Text>OK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#A9DEF9',
    padding: 18,
  },
  header : {
    fontSize: 40,
  },
  header2 : {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 80,
  },
  subtitle : {
    fontSize: 20,
  },
  button : {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    width: 300,
    height:45,
    marginTop: 40
  },
  input_red_border : {
    backgroundColor:'white',
    borderWidth:2,
    borderRadius:10,
    marginVertical : 20,
    width: 300,
    height: 40,
    borderColor: 'red',

  },
  input_green_border : {
    backgroundColor:'white',
    borderWidth:2,
    marginVertical : 20,
    borderRadius:10,
    width: 300,
    height: 40,
    borderColor: 'green',
  },
})