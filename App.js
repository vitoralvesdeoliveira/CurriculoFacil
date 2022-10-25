import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button, Avatar, IconButton, MD3Colors } from 'react-native-paper';

const CurIcon = props => <Avatar.Icon {...props} icon="book-education" />
//o card comeca da linha 10 ate 16
const MyComponent = () => (
  <View style={styles.container}>
    <Text style={styles.header2}>Formação</Text>
    <Card style={styles.card}> 
    <Card.Title title="Formação 1" left={CurIcon} />
    <Card.Actions>
      <Button>Excluir</Button>
      <Button>Editar</Button>
    </Card.Actions>
    </Card>
    <Card style={styles.card}>
    <Card.Title title="Formação 2" left={CurIcon} />
    <Card.Actions>
      <Button>Excluir</Button>
      <Button>Editar</Button>
    </Card.Actions>
    </Card>
   <IconButton
      icon="plus"
      mode="contained"
      iconColor={MD3Colors.primary10}
     size={40}
     onPress={() => console.log('Pressed')}
    />
    <Button style={styles.button}>OK</Button>
  </View>
);

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
    backgroundColor: "white",
    borderRadius: 15,
    width: 250,
    height:45,
  }
});

export default MyComponent;