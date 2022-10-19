import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,TextInput, Button} from 'react-native';
import styles from '../../../styles'
import {useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function TelaA({navigation}) {

  console.log(navigation)

  const schema = yup.object({
    nomeCompleto : yup.string().required('Digite o nome completo'),
    telefone : yup.number("Digite apenas números!").required('Digite o telefone'),
    email : yup.string().email('Email inválido').required('Digite o Email'),
  })
  
  const {control, handleSubmit, formState : {errors}} = useForm({
    
    resolver:yupResolver(schema)
  });
  
  

  handleData = (data) => { //armazenar com asyncStorage e navegar para a proxima pagina com React Navigation Stack-navigation
    
    console.log(data); //aqui sera o armazenamento
    
    navigation.navigate('TelaB');
    
    return;
  }





  return (
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
        style={[styles.input,{borderWidth: errors.nomeCompleto && 1, borderColor:errors.nomeCompleto && 'red'}]}
        value={value}
        />
        )}
      />


      <Text style={styles.subtitle}>E-mail</Text>

      <Controller
      name='email' control={control} render={({field : {onChange,value}}) => (
      <TextInput 
      placeholder='Digite o texto'
      onChangeText={onChange}
      value = {value}
      style={[styles.input,{borderWidth: errors.telefone && 1, borderColor:errors.telefone && 'red'}]}
      />
      )}
      />
      

      <Text style={styles.subtitle}>Telefone</Text>
      
      <Controller
      name='telefone' control={control} render={({field : {onChange,value}}) => (
      <TextInput 
      placeholder='Digite o texto'
      onChangeText={onChange}
      value={value}
      style={[styles.input,{borderWidth: errors.telefone && 1, borderColor:errors.telefone && 'red'}]}
      />
  )}
  />

      
  {errors.telefone && <Text style={styles.subtitle}>{errors.telefone?.message}</Text>}
  {errors.nomeCompleto && <Text style={styles.subtitle}>{errors.nomeCompleto?.message}</Text>}
  {errors.email && <Text style={styles.subtitle}>{errors.email?.message}</Text>}

    

      
      
      <TouchableOpacity
      style={styles.button}
      onPress={handleSubmit(handleData)}
      ><Text>OK</Text>
      </TouchableOpacity>
      
    </View>
  );
}




//<Button title='OK' onPress={()=>navigation.navigate('TelaB')} />