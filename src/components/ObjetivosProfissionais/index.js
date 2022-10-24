import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,TextInput, Button} from 'react-native';
import styles from '../../styles'
import {useForm, Controller} from 'react-hook-form';

export default ObjetivosProfissionais = ({navigation,route}) => {

  handleData2 = (data) => { //armazenar com asyncStorage e navegar para a proxima pagina com React Navigation Stack-navigation

  //  reload=(data)=>{
  //    route.params.nacionalidade = data.nacionalidade
  //   }
    console.log("DATA2:",data)
    /*TEMP:*/
    
    route.params.objetivos = data.objetivos;
    console.log("Obj:",route.params.objetivos)
    route.params.nacionalidade = data.nacionalidade
    route.params.naturalidade = data.naturalidade;
    route.params.estadoCivil = data.estadoCivil
    route.params.dataNascimento = data.dataNascimento
    
    //route.params.nacionalidade = data["nacionalidade"]
    console.log("Nacionalidade:",route.params.nacionalidade); //aqui sera o armazenamento
    console.log("Nome:",route.params.nomeCompleto)
    console.log("params:",route.params)
    //esta sobrescrevendo os dados da tela A
    
    navigation.navigate('GerarPdf',route.params);
    
    return;
  }
  
  
  
  const {control, handleSubmit, formState : {errors}} = useForm({});

  


  return(<View style={styles.container}>

      <View>
      <Text style={styles.header}>Objetivos Profissionais</Text>
      <Text style={styles.paragraphleftalign}>Digite seus objetivos de carreira de maneira clara e direta!</Text>
      </View>
      
      <Controller
      name='objetivos' control={control} render={({field: {onChange,value}}) => ( 
        <TextInput
        placeholder='Digite seus objetivos profissionais'
        onChangeText={onChange}
        style={[styles.input,{borderWidth: errors.objetivos && 1, borderColor:errors.objetivos && 'red'}]}
        value={value}
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