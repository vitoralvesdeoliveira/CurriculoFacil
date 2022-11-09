import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
//import AppItem from './AppItem';
import {
  Card,
  Button,
  Avatar,
  IconButton,
  MD3Colors,
} from 'react-native-paper';
import styles from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export default AppList = ({ route, navigation }) => {
  function getItems() {
    return AsyncStorage.getItem('@curriculofacil:formacoesteste').then(
      (response) => {
        if (response) return Promise.resolve(JSON.parse(response));
        else return Promise.resolve([]);
      }
    );
  }

  useEffect(() => {
    getItems().then((items) => setItems(items));
  }, [route]);

  const [items, setItems] = useState([
    { curso: 'Matematica', escola: 'arroz', periodo: 2 },
    { curso: 'Historia', escola: 'feijão', periodo: 2 },
    { curso: 'Ingles', escola: 'lentilha', periodo: 2 },
  ]);

  plusPressed = () => {
    navigation.navigate('Copia', { navigation, route });
  };

  okPressed = () => {
    navigation.navigate('CursosComplementares', { navigation, route });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header2}>Formação</Text>

      <ScrollView>
        {items.map((item) => {
          return <CardFormacoes text={item.curso} />;
        })}
      </ScrollView>

      <IconButton
        icon="plus"
        mode="contained"
        iconColor={MD3Colors}
        size={40}
        onPress={plusPressed}
      />
      <Button style={styles.button} onPress={okPressed}>
        <View>
          <Text>OK</Text>
        </View>
      </Button>
    </View>
  );
};
