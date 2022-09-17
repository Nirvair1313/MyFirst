import React from 'react';
import{Text,View,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





const Global ={
    headerStyle:{backgroundColor:"violet"},
    headerTitle:"Pay",
    headerTitleAlign:"center"
}
function HomeScreen (){
    return(
        <View>
        
        
            <Text style={{fontSize:25}}>

            </Text>
        </View>
    )
}



function QrScreen (){
    return(
        <View>
            <Text style={{fontSize:25}}>

            </Text>
        </View>
    )
}


function PayScreen (){
    return(
        <View>
            <Text style={{fontSize:25}}></Text>
        </View>
    )
}


function SettingScreen (){
    return(
        <View>

        </View>
    )
}


const Tab = createBottomTabNavigator();



function MyTabs (){
    return(
     <Tab.Navigator screenOptions={Global} headerShown={false}>
         <Tab.Screen name='Home' component={HomeScreen} 

         options={{

             tabBarIconStyle:"rounded",
             tabBarInactiveTintColor:"grey",
             tabBarActiveBackgroundColor:"blue",
             tabBarLabelPosition:"below-icon",
             
             tabBarActiveTintColor:"red",
             tabBarIcon:({color,size})=>(
                 <CreateMaterialCommunityIcons name='home' size={23} color={color}/>

             ),
         }}/>
         <Tab.Screen name='Pay' component={PayScreen} 
             options={{
                 tabBarLabelPosition:"below-icon",
                 tabBarActiveTintColor:"red",
                 tabBarActiveBackgroundColor:"blue",
                 tabBarIcon:({color,size})=>(
                     <CreateMaterialCommunityIcons name='bank' size={26} color={color}/>
                 )
             }}
         />
         <Tab.Screen name='Qr' component={QrScreen} 
             options={{
                 
                 tabBarActiveTintColor:"red",
                 tabBarActiveBackgroundColor:"blue",
                 tabBarLabel:"Bar-code",
                 tabBarIcon:({color,size})=>(
                     <CreateMaterialCommunityIcons name='barcode-scan' size={26} color={color} 
                        
                     />
                 )
             }}
         />
         <Tab.Screen name='Setting' component={SettingScreen} options={{
             tabBarActiveTintColor:"red",
             tabBarActiveBackgroundColor:'blue',
             tabBarIcon:({color,size})=>(
<CreateMaterialCommunityIcons name='account-cog-outline' size={26} color={color}/>
             ),
         }}
         />
     </Tab.Navigator>
    )
}


export default function App ()  {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}