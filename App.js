import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import DadosPessoais from './src/pages/DadosPessoais'
import TelaB from './src/components/TelaB'

export default function App() {

  const Stack = createStackNavigator(); 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen initialRoutename="TelaA"
        name="DadosPessoais" component={DadosPessoais}/>
        <Stack.Screen 
        name="TelaB" component={TelaB}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}