import { Text, View, StyleSheet, ScrollView } from 'react-native';
import {
  Card,
  Button,
  Avatar,
  IconButton,
  MD3Colors,
} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const CurIcon = (props) => <Avatar.Icon {...props} icon="book-education" />;

const CardFormacoes = (props) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title={props.text} left={CurIcon} />
        <Card.Actions>
          <Button>Excluir</Button>
          <Button>Editar</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const Formacoes = ({ navigation, route }) => {
  plusPressed = () => {
    navigation.navigate('Copia');
  };

  okPressed = () => {
    navigation.navigate('CursosComplementares');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header2}>Formação</Text>

      <CardFormacoes />
      <CardFormacoes />

      <IconButton
        icon="plus"
        mode="contained"
        iconColor={MD3Colors}
        size={40}
        onPress={plusPressed} //chama a nova tela de add
      />
      <Button style={styles.button} onPress={okPressed}>
        <View>OK</View>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#A9DEF9',
    justifyContent: 'center',
  },
  header2: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: 250,
    marginVertical: 8,
    borderRadius: 12,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    width: 250,
    height: 45,
  },
});

export default Formacoes;
