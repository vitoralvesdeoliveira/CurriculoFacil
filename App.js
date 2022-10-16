import React, { useTransition } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useForm, Controller} from 'react-hook-form';

export default App = () => {

  //const [texto,setTexto]= useState('');
  const {control, handleSubmit, formState : {errors}} = useForm({});
  const [bar_color,setBarColor] = useState(styles.input_green_border); //teria que ter 3 ou um form state
  //useState() para cor da borda ou validação com yup ou os dois
  //const border_state = texto!=''? styles.input_green_border : styles.input_red_border
  //quando focado, o input deve colorir de vermelho e quando validado, devem ficar vermelhos apenas os campos inválidos -> add onBlur in formState
  Submissao = (data) => {
    if(!data.nomeCompleto){
      console.log("digite um nome válido")
      setBarColor(styles.input_red_border)
    }
    else{setBarColor(styles.input_green_border)}

    if(!data.email){
      console.log("digite um email válido")
      setBarColor(styles.input_red_border)
      
    }
    else{setBarColor(styles.input_green_border)}

    if(!data.telefone){
      console.log("digite um telefone válido")
      setBarColor(styles.input_red_border)
    }
    else{setBarColor(styles.input_green_border)}
    
    console.log(data);
    
    return;
  }


  return(
    <View style={styles.container}>
      <Text style={styles.header}>Vamos começar</Text>
      <Text style={styles.header}>com seus</Text>
      <Text style={styles.header2}>Dados Pessoais</Text>

      
      
      <Text style={styles.subtitle}>Nome Completo</Text>
      
      <Controller
      name='nomeCompleto' control={control} render={({field: {onChange,value}}) => ( 
        <TextInput
        placeholder='Digite o nome completo'
        onChangeText={onChange}
        style={bar_color}
        value={value}
        />
      )}
      />

      <Text style={styles.subtitle}>E-mail</Text>

      
      <Controller
      name='email' control={control} render={({field : {onChange,value}}) => ( 
        <TextInput
        placeholder='Digite o email'
        onChangeText={onChange}
        style={bar_color}
        value={value}
        />
      )}
      />


      <Text style={styles.subtitle}>Telefone</Text>

      <Controller
      name='telefone' control={control} render={({field : {onChange,value}}) => ( 
        <TextInput
        placeholder='Digite o telefone'
        onChangeText={onChange}
        style={bar_color}
        value={value}
        />
      )}
      />

      <TouchableOpacity
      style={styles.button}
      onPress={handleSubmit(Submissao)}
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
