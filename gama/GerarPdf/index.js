import { View, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default GerarPdf = ({route,navigation}) => {



  
  const Submissao = async() => {

  let values = null;
  try {
    values = await AsyncStorage.multiGet(['@curriculofacil:dadosPessoais', '@curriculofacil:contato','@curriculofacil:objetivosProfissionais',"@curriculofacil:formacoesteste"])
  } catch(e) {
    console.log("deu erro na multipla requisicao para gerar o pdf")
  }
  const dadosPessoaisJSON = JSON.parse(values[0][1])
//  const nomeCompletoCV  =  dadosPessoaisJSON.nomeCompleto;
  const contatoJSON = JSON.parse(values[1][1])
  console.log(values,'-->',dadosPessoaisJSON,'-->',contatoJSON)
  const objetivosProfissionaisJSON = JSON.parse(values[2][1])
  // example console.log output:
  // [ ['@DadosPessoais', 'myUserValue'], ['@Contato', 'myKeyValue'] ]
  const formacoesJSON = JSON.parse(values[3][1])
  console.log(formacoesJSON)
  console.log("Chegou na Funcao de Gerar o PDF",values);     


      const html = 
      `<html>
      <body style="padding: 26pt;">
        <div style="font-family: Arial, sans-serif;
        font-size: 24pt;
        margin: 3pt;">
            <p>Endereço: Rua Joaquim Nabuco, Nº 754, Bairro: Vila Teixeira, Cidade: Salto/SP</p>
            <p>E-mail: <a href="mailto:${dadosPessoaisJSON.email}">${dadosPessoaisJSON.email}</a></p>
            <p>Telefone: ${dadosPessoaisJSON.telefone}</p>
        </div>
        <h1 style="font-family: Arial, sans-serif;
        text-align: center;
        font-size: 280%;">${dadosPessoaisJSON.nomeCompleto}</h1>

        <div style="font-family: Arial, sans-serif;
        font-size: 24pt;
        margin: 3pt;">
            <p><b>Idade: </b>25 anos</p>
            <p><b>Data de nascimento: </b>${contatoJSON.dataNascimento}</p>
            <p><b>Estado Civil: </b>${contatoJSON.estadoCivil}</p>
            <p><b>Nacionalidade: </b>${contatoJSON.nacionalidade}</p>
            <p><b>Naturalidade: </b>${contatoJSON.naturalidade}</p>
            <br>
        </div>
        <div class="retangulo" style="height: 36pt;
        width: 100%;
        border: 1px solid black;
        background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            font-size: 210%;">Objetivo:</h2></div>
        <p>${objetivosProfissionaisJSON.objetivos}</p>
        <br>
        <div style="height: 36pt;
                width: 100%;
                border: 1px solid black;
                background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            font-size: 210%;">Formação:</h2></div>
        <p><b>Curso: </b>${formacoesJSON[0].curso}</p>
        <p><b>Escola: </b>${formacoesJSON[0].escola}</p>
        <p><b>Período: </b>${formacoesJSON[0].periodo1} até ${formacoesJSON[0].periodo2}</p>
        <br>
        <p><b>Curso: </b>${formacoesJSON[1].curso}</p>
        <p><b>Escola: </b>${formacoesJSON[1].escola}</p>
        <p><b>Período: </b>${formacoesJSON[1].periodo1} até ${formacoesJSON[1].periodo2}</p>
        <br>
            
        <div style="height: 36pt;
                width: 100%;
                border: 1px solid black;
                background-color: #eeece1;"><h2 style="margin-top: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            font-size: 210%;">Cursos complementares:</h2></div>
        <p><b>Curso: </b>Gastronomia Italiana</p>
        <p><b>Escola: </b>Escola da Comida</p>
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
        <p><b>Empresa: </b>Casa da Moeda</p>
        <p><b>Função: </b>Auxiliar de departamento</p>
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
        base64: false,
      });

      await shareAsync(file.uri);


    return;
  }

  return (
    <View style={styles.container}>
      <Button title='GERAR PDF' onPress={Submissao}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
