import *as React from 'react';
import{Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const globalScreenOption={
  headerStyle:{backgroundColor:"#f2F"},
  headerTitleAlign:"center",
  

  
}
function HomeScreen (){
  return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    
      <Text style={{fontSize:34}}>Home</Text>
      
    </View>
  );
}


function SettingsScreen (){
  return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <Text style={{fontSize:34}}>Settings</Text>
    </View>
  );
}

function SearchScreen (){
  return(
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:34}}>Search  </Text>
    </View>
  )
}


const Tab = createBottomTabNavigator();

function MyTabs (){
  return(
    <Tab.Navigator screenOptions={globalScreenOption}>
      <Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon:({color,size}) =>(
        <MaterialCommunityIcons name="home" color={color} size={26} />

      ),
      }} />
      <Tab.Screen name='Settings' component={SettingsScreen} options={{tabBarIcon:({color,size})=>(
<MaterialCommunityIcons name="cog-outline" color={color} size={26}/>
      ),}}/>
       <Tab.Screen name='Search' component={SearchScreen} options={{tabBarIcon:({color,size})=>(
<MaterialCommunityIcons name="magnify" color={color} size={26} />
      ),}}/>
    </Tab.Navigator>
  );
}

export default function App (){
  return(
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}

