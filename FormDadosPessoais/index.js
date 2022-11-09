import { Text, ScrollView, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text';

export default function FormDadosPessoais({ navigation }) {
  const schema = yup.object({
    nomeCompleto: yup.string().required('Digite o nome completo'),
    dataNascimento : yup.string().required('Digite sua data de nascimento'),
    estadoCivil : yup.string().required('Digite seu estado civil'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  handleDadosPessoais = async (data) => {
    /* TEMP: */
    // await AsyncStorage.removeItem('@curriculofacil:cursoscomplementares');
    // await AsyncStorage.removeItem('@curriculofacil:formacoesteste');
    // await AsyncStorage.removeItem('@curriculofacil:ExpProfissionais');

    setObjectValue = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('@curriculofacil:dadosPessoais', jsonValue);
      } catch (e) {
        console.log('erro no armazenamento');
      }
    };

    setObjectValue(data);

    navigation.navigate('FormDadosPessoais2');

    return;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Vamos começar</Text>
      <Text style={styles.header}>com seus</Text>
      <Text style={styles.header2}>Dados Pessoais</Text>

      <Text style={styles.subtitle}>Nome Completo</Text>

      <Controller
        name="nomeCompleto"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Digite o nome completo"
            onChangeText={onChange}
            style={[
              styles.input,
              {//como reescrever?
                borderWidth: errors.nomeCompleto && 1,
                borderColor: errors.nomeCompleto && 'red',
              },
            ]}
            value={value}
          />
        )}
      />

      <Text style={styles.subtitle}>Data de Nascimento</Text>


      <Controller
        name="dataNascimento"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInputMask
            type={'custom'}
            options={{
              mask: '99/99/9999',
            }}
            keyboardType={'numeric'}
            placeholder="Digite a data de nascimento"
            onChangeText={onChange}
            value={value}
            style={[
              styles.input,
              {
                borderWidth: errors.dataNascimento && 1,
                borderColor: errors.dataNascimento && 'red',
              },
            ]}
          />
        )}
      />

      

      <Text style={styles.subtitle}>Estado Civil</Text>

      <Controller
        name="estadoCivil"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Digite o estado civil"
            onChangeText={onChange}
            value={value}
            style={[
              styles.input,
              {
                borderWidth: errors.estadoCivil && 1,
                borderColor: errors.estadoCivil && 'red',
              },
            ]}
          />
        )}
      />

      

      <View>
        {errors.nomeCompleto && (
          <Text style={styles.subtitle}>{errors.nomeCompleto?.message}</Text>
        )}
        {errors.dataNascimento && (
          <Text style={styles.subtitle}>{errors.dataNascimento?.message}</Text>
        )}
        {errors.estadoCivil && (
          <Text style={styles.subtitle}>{errors.estadoCivil?.message}</Text>
        )}
       
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleDadosPessoais)}>
        <Text>OK</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}