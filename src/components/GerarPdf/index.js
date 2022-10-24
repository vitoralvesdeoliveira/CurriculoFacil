import * as React from 'react';
import { Text, View, StyleSheet, Button,TextInput} from 'react-native';

import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default GerarPdf = ({route,navigation}) => {

  const Submissao = async(data) => {

      console.log("chegounasubmissao",data);
      

      const html = 
      `<html>
      <body style="padding: 26pt;">
        <div style="font-family: Arial, sans-serif;
        font-size: 24pt;
        margin: 3pt;">
            <p>Endereço: Rua Joaquim Nabuco, Nº 754, Bairro: Vila Teixeira, Cidade: Salto/SP</p>
            <p>E-mail: <a href="mailto:${data.email}">${data.email}</a></p>
            <p>Telefone: ${data.telefone}</p>
        </div>
        <h1 style="font-family: Arial, sans-serif;
        text-align: center;
        font-size: 280%;">${data.nomeCompleto}</h1>

        <div style="font-family: Arial, sans-serif;
        font-size: 24pt;
        margin: 3pt;">
            <p><b>Idade: </b>25 anos</p>
            <p><b>Data de nascimento: </b>${data.dataNascimento}
            </p>
            <p><b>Estado Civil: </b>${data.estadoCivil}</p>
            <p><b>Nacionalidade: </b>${data.nacionalidade}</p>
            <p><b>Naturalidade: </b>${data.naturalidade}</p>
            <br>
        </div>
        <div class="retangulo" style="height: 36pt;
        width: 100%;
        border: 1px solid black;
        background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            font-size: 210%;">Objetivo:</h2></div>
        <p>${data.objetivos}</p>
        <br>
        <div style="height: 36pt;
                width: 100%;
                border: 1px solid black;
                background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            font-size: 210%;">Formação:</h2></div>
        <p><b>Curso: </b>Técnico em Automação Industrial</p>
        <p><b>Escola: </b>IFSP Campus Salto</p>
        <p><b>Período: </b>Ago/2018 a Jul/2020 (Cursando o 3º semestre noturno)</p>
        <br>
        <p><b>Curso: </b>Ensino Médio Completo</p>
        <p><b>Escola: </b>EE Leonor Fernandes da Silva</p>
        <p><b>Período: </b>Jan/2009 a Dez/2011 (Concluído)</p>
        <br>
            
        <div style="height: 36pt;
                width: 100%;
                border: 1px solid black;
                background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            font-size: 210%;">Cursos complementares:</h2></div>
        <p><b>Curso: </b>Informática básica</p>
        <p><b>Escola: </b>Intelecto Idiomas</p>
        <br>
        <p><b>Curso: </b>Rotina de escritório</p>
        <p><b>Escola: </b>SENAC</p>
        <br>

        <div style="height: 36pt;
                width: 100%;
                border: 1px solid black;
                background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            font-size: 210%;">Experiência Profissional:</h2></div>
        <p><b>Empresa: </b>Dynaplast Industrial Ltda.</p>
        <p><b>Função: </b>Auxiliar de serigrafia</p>
        <p><b>Principais atividades: </b>Execução de tarefas de impressão gráfica, impressão de
            ilustrações e desenhos sobre plástico e outros materiais.</p>
        <br>

        <div style="height: 36pt;
                width: 100%;
                border: 1px solid black;
                background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            font-size: 210%;">Informações Adicionais:</h2></div>
        <br>
        <p>Conhecimento intermediário no Pacote Office (Excel, PowerPoint e Word).</p>
        <p>Conhecimento avançado em Windows.</p>
        <br>

        
        </body>
        </html>`;

    const file = await printToFileAsync({
        html: html,
        base64: false
      });

      await shareAsync(file.uri);


    return;
  }

 toTelaA=()=>{
  console.log("nome:",route.params.nomeCompleto);
  console.log("nacion.:",route.params.nacionalidade)
  console.log("params:",route.params)
  Submissao(route.params);
  //navigation.navigate('GeraPdf',route.params)
 }

  return (
    <View style={styles.container}>
      <Button title='GERAR PDF' onPress={toTelaA}/>
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
