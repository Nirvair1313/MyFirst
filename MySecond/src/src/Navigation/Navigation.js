import * as React from 'react';
import{View, Text} from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from'@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen  from '../HomeScreen';
import DetailScreen  from '../DetailScreen';



// function HomeScreen(){
//     return(
//         <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text> HomeScreen</Text>
//         </View>
//     );
// }


const Home  = createNativeStackNavigator();
const Detail  = createNativeStackNavigator();
const RootStack  = createNativeStackNavigator();

function HomeRoot() {
  return (
    <Home.Navigator>
      <Home.Screen name="Home" component={HomeScreen} />
    </Home.Navigator>
  );
}
function DetailRoot() {
  return (
    <Detail.Navigator>
      <Detail.Screen name="Detail" component={DetailScreen} />
    </Detail.Navigator>
  );
}

//function nestingRoot(){
  //return(
    //<Navigation.Navigator>
      //<Navigation.Screen name="navigation" component={NavigationScreen}/>
      //</Navigation.Navigator>
  //);
//
//}


//function nestingRoot(){
  //return(
    //<Navigation.Navigator>
    //<Navigator.Screen name="nesting" component={nestingScreen}/>
    //</Navigation.Navigator>
  //);
//}



function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="HomeScreen"
          component={HomeRoot}
          options={{ headerShown: false }}
        />
         <RootStack.Screen
          name="DetailScreen"
          component={DetailRoot}
          options={{ headerShown: false }}
           />

           {/* <RootStack.Screen */}
           {/* name="nestingscreen"
           component={nestingRoot}
           options={{headerShown: false}}
           /> */}


        
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;