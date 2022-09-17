import * as React from 'react';
import { Button, View,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const GlobalScreenOptions = {
        headerStyle:{backgroundColor:"#fff"},
        headerTintColor:"steelblue",

      

      

}




function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 

   
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
  


function DetailScreen ({navigation}){
    return(
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>

      
<Button  title='Go To Detail' onPress={()=>navigation.navigate("Home")}/>
      </View>
    )




}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator  initialRouteName="Home" screenOptions={GlobalScreenOptions} >
        <Drawer.Screen name="Home" component={HomeScreen } 
         />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name='Detail' component={DetailScreen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
