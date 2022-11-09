import { View, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default GerarPdf = ({ route, navigation }) => {
  const Submissao = async () => {
    let values = null;
    try {
      values = await AsyncStorage.multiGet([
        '@curriculofacil:dadosPessoais',
        '@curriculofacil:contato',
        '@curriculofacil:objetivosProfissionais',
        '@curriculofacil:formacoesteste',
        '@curriculofacil:cursoscomplementares',
        '@curriculofacil:ExpProfissionais',
      ]);
    } catch (e) {
      console.log('deu erro na multipla requisicao para gerar o pdf');
    }

    const dadosPessoaisJSON = JSON.parse(values[0][1]);

    const expprofissionalJSON = JSON.parse(values[5][1]);

    const information = await AsyncStorage.getItem(
      '@curriculofacil:adicionais'
    );

    const contatoJSON = JSON.parse(values[1][1]);
    const objetivosProfissionaisJSON = JSON.parse(values[2][1]);
    const formacoesJSON = JSON.parse(values[3][1]);
    const cursoscomplementaresJSON = JSON.parse(values[4][1]);
    //mudar o numero minimo de formacoes

    let formacaofrase = '';
    for (let i = 0; i < formacoesJSON.length; i++) {
      formacaofrase +=
        '<p style="font-family: Arial, sans-serif;font-size: 12pt;margin: 2pt;"><b>Curso: </b>' +
        formacoesJSON[i].curso +
        '</p>' +
        '<p style="font-family: Arial, sans-serif;font-size: 12pt;margin: 2pt;"><b>Escola: </b>' +
        formacoesJSON[i].escola +
        '</p><p style="font-family: Arial, sans-serif;font-size: 12pt;margin: 2pt;"><b>Período: </b>' +
        formacoesJSON[i].periodo1 +
        ' até ' +
        formacoesJSON[i].periodo2 +
        '</p><br>';
    }
    
    let cursoscomplementaresfrase = '';
    for (let i = 0; i < cursoscomplementaresJSON.length; i++) {
      cursoscomplementaresfrase +=
        '<p style="font-family: Arial, sans-serif;font-size: 12pt;margin: 2pt;"><b>Curso: </b>' +
        cursoscomplementaresJSON[i].curso +
        '</p>' +
        '<p style="font-family: Arial, sans-serif; font-size: 12pt; margin: 2pt;"><b>Escola: </b>' +
        cursoscomplementaresJSON[i].escola +
        '</p><p style="font-family: Arial, sans-serif; font-size: 12pt; margin: 2pt;"><br>';
    }

    let expprofissionalfrases = '';
    for (let i = 0; i < expprofissionalJSON.length; i++) {
      expprofissionalfrases +=
        '<p style="font-family: Arial, sans-serif;font-size: 12pt; margin: 2pt;"><b>Empresa: </b>' +
        expprofissionalJSON[i].empresa +
        '</p>' +
        '<p style="font-family: Arial, sans-serif;font-size: 12pt; margin: 2pt;"><b>Função: </b>' +
        expprofissionalJSON[i].funcao +
        '</p>' +
        '<p style="font-family: Arial, sans-serif; font-size: 12pt; margin: 2pt;"><b>Principais Atividades: </b>' +
        expprofissionalJSON[i].principaisatividades +
        '</p><br>';
    }

    const html = `<html>
      <body>
        <div>
            <p style="font-family: Arial, sans-serif;
        font-size: 12pt;
        margin: 2pt;">Endereço: ${contatoJSON.endereco}</p>
            <p style="font-family: Arial, sans-serif;
        font-size: 12pt;
        margin: 2pt;">E-mail: <a href="mailto:${contatoJSON.email}">${contatoJSON.email}</a></p>
            <p style="font-family: Arial, sans-serif;
        font-size: 12pt;
        margin: 2pt;">Telefone: ${contatoJSON.telefone}</p>
        </div>
        <h1 style="font-family: Arial, sans-serif;
        text-align: center;
        ">${dadosPessoaisJSON.nomeCompleto}</h1>

        <div>
            <p style="font-family: Arial, sans-serif;
        font-size: 12pt;
        margin: 2pt;"><b>Data de nascimento: </b>${dadosPessoaisJSON.dataNascimento}</p>
            <p style="font-family: Arial, sans-serif;
        font-size: 12pt;
        margin: 2pt;"><b>Estado Civil: </b>${dadosPessoaisJSON.estadoCivil}</p>
            <p style="font-family: Arial, sans-serif;
        font-size: 12pt;
        margin: 2pt;"><b>Nacionalidade: </b>${dadosPessoaisJSON.nacionalidade}</p>
            <p style="font-family: Arial, sans-serif;
        font-size: 12pt;
        margin: 2pt;"><b>Naturalidade: </b>${dadosPessoaisJSON.naturalidade}</p>
            <br>
        </div>
        <div class="retangulo" style="height: 26pt;
        width: 100%;
        border: 1px solid black;
        background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            ">Objetivo:</h2></div>
        <p style="font-family: Arial, sans-serif;
        font-size: 12pt;
        margin: 2pt;">${objetivosProfissionaisJSON.objetivos}</p>
        <br>
        <div style="height: 26pt;
                width: 100%;
                border: 1px solid black;
                background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            ">Formação:</h2></div>

        ${formacaofrase}
           
        <div style="height: 26pt;
                width: 100%;
                border: 1px solid black;
                background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            ">Cursos complementares:</h2></div>
        
        ${cursoscomplementaresfrase}

        <div style="height: 26pt;
                width: 100%;
                border: 1px solid black;
                background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            ">Experiência Profissional:</h2></div>



          ${expprofissionalfrases}
        
        <br>

        <div style="height: 26pt;
                width: 100%;
                border: 1px solid black;
                background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;">Informações Adicionais:</h2></div>
        <br>
        <p style="font-family: Arial, sans-serif;
        font-size: 14pt;
        margin: 2pt;">${information}</p>
        <br>

        
        </body>
        </html>`;

    const file = await printToFileAsync({
      html: html,
      base64: false,
      options: null,
      //uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540vitoremcaos%252Fgama/Print/d52c4469-12a6-43be-add5-c352fd9e29fd.pdf'
    });

    await shareAsync(file.uri);

    return;
  };

  return (
    <View style={styles.container}>
      <Button title="GERAR PDF" onPress={Submissao} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
