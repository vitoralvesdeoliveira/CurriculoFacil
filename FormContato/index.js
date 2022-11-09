import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import styles from '../styles';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default FormContato = ({ navigation }) => {

  const schema = yup.object({
    telefone: yup.string().required('Digite o telefone'),
    email: yup.string().email('Email inválido').required('Digite o email'),
    endereco: yup.string().required('Digite o endereco'),
  });


  handleContato = (data) => {
    setObjectValue = async (value) => {
      //funcao global para todas as 'armazenagens'
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('@curriculofacil:contato', jsonValue);
      } catch (e) {
        console.log('erro no armazenamento de dados');
      }
    };

    setObjectValue(data);

    navigation.navigate('ObjetivosProfissionais');

    return;
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <View style={styles.container}>

      <Text style={styles.subtitle}>E-mail</Text>

      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Digite o texto"
            onChangeText={onChange}
            value={value}
            style={[
              styles.input,
              {
                borderWidth: errors.email && 1,
                borderColor: errors.email && 'red',
              },
            ]}
          />
        )}
      />

      <Text style={styles.subtitle}>Telefone</Text>

      <Controller
        name="telefone"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99)',
            }}
            keyboardType={'numeric'}
            placeholder="Digite o texto"
            onChangeText={onChange}
            value={value}
            style={[
              styles.input,
              {
                borderWidth: errors.telefone && 1,
                borderColor: errors.telefone && 'red',
              },
            ]}
          />
        )}
      />

      <Text style={styles.subtitle}>Endereço</Text>
      <Text style={styles.paragraphleftalign}>Rua, Nº, Bairro, Cidade, UF</Text>

      <Controller
        name="endereco"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Diga onde você mora"
            onChangeText={onChange}
            style={[
              styles.input,
              {
                borderWidth: errors.endereco && 1,
                borderColor: errors.endereco && 'red',
              },
            ]}
            value={value}
          />
        )}
      />
           

      {errors.email && (
        <Text style={styles.subtitle}>{errors.email?.message}</Text>
      )}
      {errors.telefone && (
        <Text style={styles.subtitle}>{errors.telefone?.message}</Text>
      )}
      {errors.endereco && (
        <Text style={styles.subtitle}>{errors.endereco?.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleContato)}>
        <Text>OK</Text>
      </TouchableOpacity>
    </View>
  );
};
