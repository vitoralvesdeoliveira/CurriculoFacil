//arrumar erros e yup

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

export default ObjetivosProfissionais = ({ navigation, route }) => {
  handleObjetivosProfissionais = (data) => {

    setObjectValue = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(
          '@curriculofacil:objetivosProfissionais',
          jsonValue
        );
      } catch (e) {
        console.log('erro no armazenamento de dados');
      }
    };

    setObjectValue(data);

    navigation.navigate('AppList');

    return;
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Objetivos Profissionais</Text>
        <Text style={styles.paragraphleftalign}>
          Digite seus objetivos de carreira de maneira clara e direta!
        </Text>
      </View>

      <Controller
        name="objetivos"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Digite seus objetivos profissionais"
            onChangeText={onChange}
            style={[
              styles.input,
              {
                borderWidth: errors.objetivos && 1,
                borderColor: errors.objetivos && 'red',
              },
            ]}
            value={value}
          />
        )}
      />
      

      {errors.nomeCompleto && (
        <Text style={styles.subtitle}>{errors.nomeCompleto?.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleObjetivosProfissionais)}>
        <Text>OK</Text>
      </TouchableOpacity>
    </View>
  );
};
