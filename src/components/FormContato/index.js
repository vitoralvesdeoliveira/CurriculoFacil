import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,TextInput, Button} from 'react-native';
import styles from '../../styles'
import {useForm, Controller} from 'react-hook-form';

export default TelaC = ({navigation,route}) => {

  handleData2 = (data) => { //armazenar com asyncStorage e navegar para a proxima pagina com React Navigation Stack-navigation

  //  reload=(data)=>{
  //    route.params.nacionalidade = data.nacionalidade
  //   }
    console.log("DATA2:",data)
    /*TEMP:*/
    route.params.nacionalidade = data.nacionalidade
    route.params.naturalidade = data.naturalidade;
    route.params.estadoCivil = data.estadoCivil
    route.params.dataNascimento = data.dataNascimento
    
    //route.params.nacionalidade = data["nacionalidade"]
    console.log("Nacionalidade:",route.params.nacionalidade); //aqui sera o armazenamento
    console.log("Nome:",route.params.nomeCompleto)
    console.log("params:",route.params)
    //esta sobrescrevendo os dados da tela A
    
    navigation.navigate('ObjetivosProfissionais',route.params);
    
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
      onPress={handleSubmit(handleData2)}
      ><Text>OK</Text>
      </TouchableOpacity>
      
    </View>);
}