import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,TextInput, Button} from 'react-native';
import styles from '../styles'
import {useForm, Controller} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
//tentar ler com async storage as informacoes armazenadas antes (dados do formDadosPessoais) 

export default FormContato = ({navigation,route}) => {


  handleContato = (data) => { 

    console.log("handleContato() --> ",data)

    // const response = await AsyncStorage.getItem("@curriculofacil:dadosPessoais")
    // const responseData = (response != null && response != undefined)? JSON.parse(response) : 'falso'
    // console.log(responseData.nomeCompleto);

    
    setObjectValue = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem("@curriculofacil:contato", jsonValue)
          console.log('Armazenado.')
        } catch(e) {
          console.log("erro no armazenamento de dados")
        }
    }

    setObjectValue(data);


    navigation.navigate('ObjetivosProfissionais');
    
    return;
  }
  
  const {control, handleSubmit, formState : {errors}} = useForm({});

  return(<View style={styles.container}>

      <Text style={styles.subtitle}>Nacionalidade</Text>
      
      <Controller
      name='nacionalidade' control={control} render={({field: {onChange,value}}) => ( 
        <TextInput
        placeholder='Digite sua nacionalidade'
        onChangeText={onChange}
        style={[styles.input,{borderWidth: errors.nacionalidade && 1, borderColor:errors.nacionalidade && 'red'}]}
        value={value}
        />
        )}
      />


      <Text style={styles.subtitle}>Naturalidade</Text>

      <Controller
      name='naturalidade' control={control} render={({field : {onChange,value}}) => (
      <TextInput 
      placeholder='Digite o texto'
      onChangeText={onChange}
      value = {value}
      style={[styles.input,{borderWidth: errors.telefone && 1, borderColor:errors.telefone && 'red'}]}
      />
      )}
      />
      

      <Text style={styles.subtitle}>Data de Nascimento</Text>
      
      <Controller
      name='dataNascimento' control={control} render={({field : {onChange,value}}) => (
      <TextInput 
      keyboardType={'numeric'}
      placeholder='Digite o texto'
      onChangeText={onChange}
      value={value}
      style={[styles.input,{borderWidth: errors.telefone && 1, borderColor:errors.telefone && 'red'}]}
      />
  )}
  />

  <Text style={styles.subtitle}>Estado Civil</Text>
      
      <Controller
      name='estadoCivil' control={control} render={({field : {onChange,value}}) => (
      <TextInput 
      placeholder='Digite o texto'
      onChangeText={onChange}
      value={value}
      style={[styles.input,{borderWidth: errors.telefone && 1, borderColor:errors.telefone && 'red'}]}
      />
  )}
  />

      
  {errors.nomeCompleto && <Text style={styles.subtitle}>{errors.nomeCompleto?.message}</Text>}
  {errors.email && <Text style={styles.subtitle}>{errors.email?.message}</Text>}
  {errors.telefone && <Text style={styles.subtitle}>{errors.telefone?.message}</Text>}

    
      <TouchableOpacity
      style={styles.button}
      onPress={handleSubmit(handleContato)}
      ><Text>OK</Text>
      </TouchableOpacity>
      
    </View>);
}