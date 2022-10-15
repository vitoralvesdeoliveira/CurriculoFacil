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
    <View>
      <Text style={styles.titles}>Vamos começar com seus dados Pessoais</Text>
      <Text>Nome Completo</Text>
      <TextInput 
      placeholder='Digite o texto'
      onChangeText={setTexto}
      style={border_state}
      />
      <Text>Nome Completo</Text>
      <TextInput 
      placeholder='Digite o texto'
      onChangeText={setTexto}
      style={border_state}
      />
      <Text>Nome Completo</Text>
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
    backgroundColor : 'blue',
    padding : 18,
  },
  titles : {
    fontWeight: 'bold',
  },
  button : {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius:20,
    width: 150,
    height:30,
    margin:10,
  },
  input_red_border : {
    backgroundColor:'white',
    borderWidth:2,
    borderRadius:10,
    marginVertical : 100,
    marginHorizontal:18,
    borderColor: 'red',
  },
  input_green_border : {
    backgroundColor:'white',
    borderWidth:2,
    marginVertical : 100,
    marginHorizontal:18,
    borderRadius:10,
    borderColor: 'green',
  },
})

