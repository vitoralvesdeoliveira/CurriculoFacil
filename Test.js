import React, { useTransition } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default function Test() {
  //let [name, setName] = useState("");

  const {control, handleSubmit, formState : {errors}} = useForm()

  
  
  Submissao = async(data) => {
      
      console.log(data);
      
      const html = `
        <html>
          <body>
            <h1>Hi ${data.nomeCompleto}</h1>
            
            <h1>Hi ${data.email}</h1>
            
            <h1>Hi ${data.telefone}</h1>
            <p style="color: red;">Hello. Bonjour. Hola.</p>
          </body>
        </html>
      `;

    const file = await printToFileAsync({
        html: html,
        base64: false
      });
  
      await shareAsync(file.uri);

    
    return;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vamos começar</Text>
      <Text style={styles.header}>com seus</Text>
      <Text style={styles.header2}>Dados Pessoais</Text>

      
      
      <Text style={styles.subtitle}>Nome Completo</Text>
      
      <Controller
      name='nomeCompleto' control={control} render={({field: {onChange,value}}) => ( 
        <TextInput
        placeholder='Digite o nome completo'
        onChangeText={onChange}
        style={[styles.input_green_border,{borderWidth: errors.nomeCompleto && 1, borderColor:errors.nomeCompleto && 'red'}]}
        value={value}
        />
      )}
      />
      {errors.nomeCompleto && <Text style={styles.subtitle.dois}>{errors.nomeCompleto?.message}</Text>}

      <Text style={styles.subtitle}>E-mail</Text>

      
      <Controller
      name='email' control={control} render={({field : {onChange,value}}) => ( 
        <TextInput
        placeholder='Digite o email'
        onChangeText={onChange}
        style={[styles.input_green_border,{borderWidth: errors.email && 1, borderColor:errors.email && 'red'}]}
        value={value}
        />
      )}
      />
      {errors.email && <Text style={styles.subtitle.dois}>{errors.email?.message}</Text>}

      <Text style={styles.subtitle}>Telefone</Text>

      <Controller
      name='telefone' control={control} render={({field : {onChange,value}}) => ( 
        <TextInput
        placeholder='Digite o telefone'
        onChangeText={onChange}
        style={[styles.input_green_border,{borderWidth: errors.telefone && 1, borderColor:errors.telefone && 'red'}]}
        value={value}
        />
      )}
      />
      {errors.telefone && <Text style={styles.subtitle.dois}>{errors.telefone?.message}</Text>}


      <TouchableOpacity
      style={styles.button}
      onPress={handleSubmit(Submissao)}
      ><Text>OK</Text>
      </TouchableOpacity>
    </View>
    // <View style={styles.container}>
    //   <TextInput value={name} placeholder="Name" style={styles.textInput} onChangeText={(value) => setName(value)} />
    //   <Button title="Generate PDF" onPress={generatePdf} />
    //   <StatusBar style="auto" />
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    alignSelf: "stretch",
    padding: 8,
    margin: 8
  }
});