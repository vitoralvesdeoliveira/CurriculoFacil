import { Text, View, TouchableOpacity,TextInput} from 'react-native';
import styles from '../styles'
import {useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function FormDadosPessoais({navigation}) {



  const schema = yup.object({
    nomeCompleto : yup.string().required('Digite o nome completo'),
    telefone : yup.string().required('Digite o telefone'),
    email : yup.string().email('Email inválido').required('Digite o email')
  })
  
  const {control, handleSubmit, formState : {errors}} = useForm({
    
     resolver:yupResolver(schema)
  });
  
  handleDadosPessoais = async(data) => {
    
    await AsyncStorage.removeItem("@curriculofacil:formacoesteste")
    console.log("handleDadosPessoais() --> ",data)
    
    setObjectValue = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem("@curriculofacil:dadosPessoais", jsonValue)
          console.log('Armazenado.')
        } catch(e) {
          console.log("erro no armazenamento")
        }
    }

    setObjectValue(data);

    navigation.navigate('FormContato');

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
      style={[styles.input,{borderWidth: errors.email && 1, borderColor:errors.email && 'red'}]}
      />
      )}
      />
      

      <Text style={styles.subtitle}>Telefone</Text>
      
      <Controller
      name='telefone' control={control} render={({field : {onChange,value}}) => (
      <TextInput 
      keyboardType={'numeric'}
      placeholder='Digite o texto'
      onChangeText={onChange}
      value={value}
      style={[styles.input,{borderWidth: errors.telefone && 1, borderColor:errors.telefone && 'red'}]}
      />
  )}
  />

  <View>
  {errors.nomeCompleto && <Text style={styles.subtitle}>{errors.nomeCompleto?.message}</Text>}
  {errors.email && <Text style={styles.subtitle}>{errors.email?.message}</Text>}
  {errors.telefone && <Text style={styles.subtitle}>{errors.telefone?.message}</Text>}
  </View>
    
      
      <TouchableOpacity
      style={styles.button}
      onPress={handleSubmit(handleDadosPessoais)}
      ><Text>OK</Text>
      </TouchableOpacity>
      
    </View>
  );
}




//<Button title='OK' onPress={()=>navigation.navigate('TelaB')} />