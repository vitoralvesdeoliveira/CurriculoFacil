import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from '../styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text';

export default function FormDadosPessoais2({ navigation }) {
  const schema = yup.object({
    nacionalidade: yup.string().required('Digite sua nacionalidade'),
    naturalidade: yup.string().required('Digite sua naturalidade'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  getValue = async () => {
    let response = null;
    try {
      response = await AsyncStorage.getItem(
        '@curriculofacil:dadosPessoais'
      );
    } catch (e) {
      console.log('erro no armazenamento: ' + e);
    }
    a = (response)? JSON.parse(response) : null
    return a;
  };

  handleDadosPessoais = async (data) => {

    console.log('data -->', data);
    const nacionalidade = data.nacionalidade;
    const naturalidade = data.naturalidade;

    let responseJSON;
    responseJSON = await getValue();

    responseJSON["nacionalidade"] = nacionalidade
    responseJSON["naturalidade"] = naturalidade

    console.log("NEW: ",responseJSON)
    

    setObjectValue = async (value) => {//funcao global?
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('@curriculofacil:dadosPessoais', jsonValue);
      } catch (e) {
        console.log('erro no armazenamento');
      }
    };

    setObjectValue(responseJSON);

    navigation.navigate('FormContato');

    return;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subtitle}>Nacionalidade</Text>

      <Controller
        name="nacionalidade"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Digite sua nacionalidade"
            onChangeText={onChange}
            style={[
              styles.input,
              {
                borderWidth: errors.nacionalidade && 1,
                borderColor: errors.nacionalidade && 'red',
              },
            ]}
            value={value}
          />
        )}
      />

      <Text style={styles.subtitle}>Naturalidade</Text>

      <Controller
        name="naturalidade"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Digite o texto"
            onChangeText={onChange}
            value={value}
            style={[
              styles.input,
              {
                borderWidth: errors.naturalidade && 1,
                borderColor: errors.naturalidade && 'red',
              },
            ]}
          />
        )}
      />

      <View>
        {errors.nacionalidade && (
          <Text style={styles.subtitle}>{errors.nacionalidade?.message}</Text>
        )}
        {errors.naturalidade && (
          <Text style={styles.subtitle}>{errors.naturalidade?.message}</Text>
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
