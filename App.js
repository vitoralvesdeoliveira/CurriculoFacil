import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Avatar, IconButton, MD3Colors, TextInput, Button, Checkbox } from 'react-native-paper';

const MyComponent = () => {
  const [curso, setText1] = React.useState("");
  const [escola, setText2] = React.useState("");
  const [periodo1, setText3] = React.useState("Mês/Ano");
  const [periodo2, setText4] = React.useState("Mês/Ano");
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
      <Text style={styles.paragraph}>Período</Text>
      <TextInput style={styles.input}
        label="Mês de início"
        value={periodo1}
        mode='outlined'
        onChangeText={periodo1 => setText3(periodo1)}
      />
      <TextInput style={styles.input}
        label="Mês de conclusão"
        value={periodo2}
        mode='outlined'
        onChangeText={periodo2 => setText4(periodo2)}
      />
      <Text style={styles.paragraph}>Curso concluído?</Text>
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
  paragraph: {
    fontSize: 20,
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