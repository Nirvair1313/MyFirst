
import React from 'react'
 import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Categeries from './Screens/Components/Categeries';
import Testy from './Screens/Components/Testy';



const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} 
           
             
            />
               <Stack.Screen name='Testy' component={Testy}/>

          </Stack.Navigator>
        
      
            </TailwindProvider>
              </NavigationContainer>
  );
}
