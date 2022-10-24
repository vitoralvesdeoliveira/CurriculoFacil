import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import FormDadosPessoais from './components/FormDadosPessoais/index'
import ObjetivosProfissionais from './components/ObjetivosProfissionais/index'
import GerarPdf from './components/GerarPdf/index'
import FormContato from './components/FormContato/index'
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
        name="GerarPdf" component={GerarPdf}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}