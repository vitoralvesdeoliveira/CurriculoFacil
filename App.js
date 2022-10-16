import React, { useTransition } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default App = () => {
  //em required pode colocar como parametro a str de resposta caso nao digitado nada e no email() como parametro a string de resposta caso digitado algum email invalido 
  const schema = yup.object({
    nomeCompleto : yup.string().required('Digite o nome completo'),
    telefone : yup.number('Digite apenas números!').positive().integer().required('Digite o telefone'),
    email : yup.string().email('email inválido').required('Digite o Email'),
  })
  //const [texto,setTexto]= useState('');
  const {control, handleSubmit, formState : {errors}} = useForm({
    //defaultValues : {nomeCompleto : 'example'}
    resolver:yupResolver(schema)
  });
  const [bar_color,setBarColor] = useState(styles.input_green_border); //teria que ter 3 ou um form state
  //useState() para cor da borda ou validação com yup ou os dois
  //const border_state = texto!=''? styles.input_green_border : styles.input_red_border
  //quando focado, o input deve colorir de vermelho e quando validado, devem ficar vermelhos apenas os campos inválidos -> add onBlur in formState
  Submissao = (data) => {
    
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
      {errors.nomeCompleto && <Text style={styles.subtitle.dois}>{errors.nomeCompleto?.message}</Text>}

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
      {errors.email && <Text style={styles.subtitle.dois}>{errors.email?.message}</Text>}


      <Text style={styles.subtitle}>Telefone</Text>

      <Controller
      name='telefone' control={control} render={({field : {onChange,value}}) => ( 
        <TextInput
        placeholder='Digite o telefone'
        onChangeText={onChange}
        style={bar_color}//{[styles.input,{borderWidth: errors.username && 1, borderColor:errors.username && '#ff375b'}]}
        value={value}
        />
      )}
      />
      {errors.telefone && <Text style={styles.subtitle.dois}>{errors.telefone?.message}</Text>}


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
  subtitle : {um :{ //subtitle.um e dois foi criado pelo vitor, organizar da melhor forma pra voce, o dois é pra quando der erro (cor vermelha e pa), tem um problema quanto ao tamanho das fontes quando um, dois ou tres erros são mostrados
      fontSize: 20,       
  }, dois:{fontSize:20, color:'red'}},

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
