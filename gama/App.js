import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import FormDadosPessoais from './FormDadosPessoais/index'
import ObjetivosProfissionais from './ObjetivosProfissionais/index'
import GerarPdf from './GerarPdf/index'
import FormContato from './FormContato/index'
import Formacoes from './Formacoes/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Copia from './copia/index';
import AppList from './AppList/index'
export default App;
function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="FormDadosPessoais" component={FormDadosPessoais}/>
      <Stack.Screen 
        name="FormContato" component={FormContato}/>
      <Stack.Screen       
        name="ObjetivosProfissionais" component={ObjetivosProfissionais}/> 
      <Stack.Screen 
        name="AppList" component={AppList}/>
      <Stack.Screen 
        name="Copia" component={Copia}/>
      <Stack.Screen       
        name="GerarPdf" component={GerarPdf}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

