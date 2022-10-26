import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button, Avatar, IconButton, MD3Colors, TextInput, Checkbox } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';

const MyComponent = () => {
  const [curso, setText1] = React.useState("");
  const [escola, setText2] = React.useState("");
  const [periodo, setText3] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  return(
  <View style={styles.container}>
    <Text style={styles.header2}>Formação</Text>
      <TextInput style={styles.input}
        label="Curso"
        value={curso}
        mode='outlined'
        onChangeText={curso => setText1(curso)}
      />
       <TextInput style={styles.input}
        label="Escola"
        value={escola}
        mode='outlined'
        onChangeText={escola => setText2(escola)}
      />
        <TextInput style={styles.input}
        label="Período"
        value={periodo}
        mode='outlined'
        onChangeText={periodo => setText3(periodo)}
      />
      <Text>Curso concluído</Text>
      <Checkbox
      color="purple"
      title="girl"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Button style={styles.button}>OK</Button>
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
  input: {
    backgroundColor: 'white',
    marginVertical: 10,
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