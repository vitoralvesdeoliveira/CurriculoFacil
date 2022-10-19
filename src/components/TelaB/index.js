import * as React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';

export default TelaB = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        CONSEGUI TROCAR DE TELA E PEGAR OS DADOS CARAIO! PRECISAMOS DAS OUTRAS TELAS DO FORMS PARA PREENCHER AQUELE MODELO DE CURRICULO
      </Text>
      <Button title='OK' onPress={()=>navigation.navigate('DadosPessoais')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
