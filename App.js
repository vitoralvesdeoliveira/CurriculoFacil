import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormDadosPessoais from './FormDadosPessoais/index';
import ObjetivosProfissionais from './ObjetivosProfissionais/index';
import GerarPdf from './GerarPdf/index';
import FormContato from './FormContato/index';
import Copia from './copia/index';
import AppList from './AppList/index';
import CursosComplementares from './CursosComplementares/index';
import FormCursosComplementares from './FormCursosComplementares/index';
import ExpProfissionais from './ExpProfissionais/index';
import FormExp from './FormExp/index';
import Adicionais from './Adicionais/index';

export default App;

function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FormDadosPessoais" component={FormDadosPessoais} />
        <Stack.Screen name="FormContato" component={FormContato} />
        <Stack.Screen
          name="ObjetivosProfissionais"
          component={ObjetivosProfissionais}
        />
        <Stack.Screen name="AppList" component={AppList} />
        <Stack.Screen name="Copia" component={Copia} />
        <Stack.Screen
          name="CursosComplementares"
          component={CursosComplementares}
        />
        <Stack.Screen
          name="FormCursosComplementares"
          component={FormCursosComplementares}
        />
        <Stack.Screen name="ExpProfissionais" component={ExpProfissionais} />
        <Stack.Screen name="FormExp" component={FormExp} />
        <Stack.Screen name="Adicionais" component={Adicionais} />
        <Stack.Screen name="GerarPdf" component={GerarPdf} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//URGENTE
//reorganizar formularios de acordo com as informacoes mais adequadas
//useForm em todos os formulários
//modal ao invés de view quando for add formacoes e cursos
//mudar as chaves dos armazenamentos das listas, cada um com a sua chave
//botoes editar e excluir dos cards das empresas, cursos e formações (criar id para cada info)
//estudar sobre rotas
//adicionar alerts por meio de toasts
//ajustar formatação do PDF e ver como fica o pdf gerado em outros apps e comparar padding e tamanho etc,talvez fazer curriculo de duas colunas também
//criar componentes e paginas em sources (organização das pastas) e imports
//importar funcoes
//importar estilos de arquivo central
//adicionar mensagem placeholder no campo vazio quando nao forem adicionadas informacoes e gerados cards falando para clicar no botao e add formacao por exemplo

//BACKLOG
//date picker expo para as datas --acho que está bom do jeito que está
//limitar numero de caracteres para os inputs
//home com curriculos salvos, editar e excluir
//camera para tirar foto com expo-camera //selecionar midia tambem com expo-media-library
//separar botoes de gerar pdf para download e gerar pdf para compartilhamento
//salvar pdf com nome e em algum diretorio especifico

//POUCO URGENTES
// usar expo-shared-element nos cards
//arredondar cantos dos inputs e botoes, corrigir cor e texto dos botoes
//splash-screen com expo
