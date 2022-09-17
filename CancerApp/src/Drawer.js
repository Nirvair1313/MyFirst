import * as React from 'react';
import 'react-native-gesture-handler'

import { Button, View,Text,Image,TouchableOpacity,Pressable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SparklesIcon ,} from "react-native-heroicons/solid";




function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#13e8c4' }}>
      
      <View style={{width:290,height:180,backgroundColor:'white',marginBottom:290,borderRadius:10}}>
        <Text style={{ fontSize: 16, color: 'black', margin: 20, textAlign: 'center', fontWeight: 'bold' }}>Request A Self Diagnosis Kit ?</Text>
  
        <View ><Text style={{ textAlign: 'right',marginStart:13 }}> Lorem  Ipsum is simply dummy text </Text>
          <Text style={{ textAlign: 'right' ,marginHorizontal:15}}> of the printig Lorem Ipsum is {'\n'}
            simply dummy text of the printing</Text>
        </View>
 <View>
          
         
   
        <Image source={{ uri: 'data:image/jpeg;base64,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' }}
            style={{ width: 110, height: 120, marginVertical: -60 }} />
        
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:"space-between",marginVertical:120}} >
      
          <TouchableOpacity style={{ height: 100, width: 100, backgroundColor: '#1c1b1b', borderRadius: 10, }}>
            <Image source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAB8CAMAAABty38BAAAAk1BMVEX///8AAAAREiTs7O2pqal3d3dMTEy1tbVAQEDLy8sODyLU1NSRkZFfX19ZWVnZ2dm/v7+vr68AABzk5OTy8vJqamr5+fkkJCQfIC4ICAhGRkYdHR1lZWUtLS1UVFSKioo4ODgWFhaenp5/f38AABVoaXJeX2gYGSktLTpWV2AmJjFDREw5OUMyMzuCgohOTlRzc3wCtNgqAAACx0lEQVRoge2Yi3KiMBRAiTwDEQL4QLtKCwSFUPD/v24TqK5Wa7fEdnZ27kExJtd7TEiYIZoGAAAAAAAAAAAAAMDPMfMwtW1KcXw3LMZUhmFvpq700JHVck3wrYwzTNbL1SnOU3ba6Gn7az6fT62lTLgx36f0zI1sWFpTEfVr+4RsZWeIzKGw0AOaOyL7lp41062ocXIa6IuhwkShko+m5vT56BzEXv6CkB+8fQ18hF5yb3EWYaLnqZme/60vEQzXx7ys1YmoI32xL+mXzebwo0AbR4CWBiXvnWLOiLyOrulioM2rOWUiQo2lgtORc+jKqWlYDLAhhhVfN5lyDjnf4NRmUzF+01sLR8k5s8nHTpnWuVn/5iT2mHtDKBfBx04LWfecaNSSMRSdBjjBCU5wghOc4AQnOMH5LzpzbSH4C2cflj/EufHXjrO2/HmGz577Lpw6zua+JcP8zQOcFJ3jk+NOxh9nTPyLGKrs1EKKvSDwMLaJL7cUpvTCSeUT2tInNh7CqHxOUXLGOMyyNM/NPM9JFlIjFU+eDj45scj+kho0zEjeR6VZFuJYxXmDfvfEj3tn7J9qrnmg85jRR/4nEQ93ohVa3Q8Y47Tvp/yUMVtTCzFVbxNYp8RW8FGQd3UXUSM8OdX2vL5E4A2M3ZEBAAAAAAAAAAAAgP8U/efRFHdHxqBNLnGvCo9HOnfuiWJfuFHkRruo3n2nM6rqkie85Lx5JS1LO7+ek3W1H99TN+o7EMmPoehGRRHJzkSD0+XVgR26quSMdVnbktZw7LQY3w+36bqG75uq3De82zUNb3jZloxVFWPFMLZRWzFecdYx3jHSkpQwQlSc9eFwYKzlLRNHx9qWlWXVHsS54+7gdOuoqV/3SZNMkg4lSV3wROlyygEVp4k4dpEsuZMkKdxaTpzJ4BRz9G0KTfrX8H4sMuEx5/u18hP8Bt60QXD0rPlLAAAAAElFTkSuQmCC' }}
              style={{width:40,height:40,justifyContent:'center',margin:7,marginHorizontal:30}}
            />
            <Text style={{color:'white',textAlign:'center',textTransform:'uppercase'}}> Cancer Information </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 100, width: 100, backgroundColor: '#1c1b1b', borderRadius: 10 }}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GiJa_vDOPm12pkLLCgklmcO3BHZ16c3gew&usqp=CAU' }}
              style={{width:40,height:40,margin:7,marginHorizontal:30}}
            />
            <Text style={{color:'white',textAlign:'center',textTransform:'uppercase'}}> video information</Text>
          </TouchableOpacity>
  
          </View>

        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={{ height: 100, width: 100, backgroundColor: '#1c1b1b', borderRadius: 10, }} onPress={()=>navigation.navigate('Faq')}>
            <Image source={{ uri: 'data:image/png;base64,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' }}
              style={{width:40,height:40,marginHorizontal:30,margin:7}} /><Text style={{color:'white',textTransform:'uppercase',textAlign:'center'}}> faq`s section</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height: 100, width: 100, backgroundColor: '#1c1b1b', borderRadius: 10, }} >
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELAhqNP72cN0V2GRNfbpVkKwKQ8mMRvE5gQ&usqp=CAU' }}
              style={{width:40,height:40,margin:8,marginHorizontal:30}}
            />
            <Text style={{textAlign:'center',textTransform:'uppercase',color:'white',margin:3}}>register</Text>
                 </TouchableOpacity>
             </View>     
   
      </View>
        
          </View>
    
   
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    </View>
  );
}


function Faq({ navigation }) {
  return (
    <View style={{ flex: 1,padding:10, backgroundColor:'#13e8c4' }}>
      <TouchableOpacity style={{  backgroundColor: '#fff', margin:10,height:45,borderRadius:10}}>
        <Text style={{ textAlign: 'center', margin: 5, fontWeight: 'bold', fontSize: 14, marginEnd: 5 }}>Why Should I undrgo carvical Screening ?</Text>
        <chevron-down color="#0908" size={30}  na />
      </TouchableOpacity>


      <TouchableOpacity style={{backgroundColor:'#fff',margin:10,height:45,borderRadius:10}}>
        <Text style={{ textAlign: 'center', margin: 5, fontSize: 14, fontWeight: 'bold' }}> I have had the Hpv Vaccine do I still { '\n'}
          need Screening</Text>
      </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#fff',margin:10,height:50,borderRadius:10}}>
        <Text style={{textAlign:'center', margin:5,fontSize:14,fontWeight:'bold'}}> I haven't sexual contact for many year-do i need to be tested? </Text>
      </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#fff',margin:10,height:45,borderRadius:10}}>
        <Text style={{textAlign:'center',margin:5,fontSize:14,fontWeight:'bold'}}> I have had Pap test done recently should I still be Screened</Text>
</TouchableOpacity>
  <TouchableOpacity style={{backgroundColor:'#fff',margin:10,height:45,borderRadius:10}}>
        <Text style={{textAlign:'center',margin:5,fontSize:14,fontWeight:'bold'}}> I have had the Hpv Vaccine do I still need Screening</Text>
</TouchableOpacity>




    </View>

    
    
  )
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}  >
      <Drawer.Navigator initialRouteName="Home"  >
        <Drawer.Screen name="Home" component={HomeScreen} options={{title:'Welcome'}} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name='Faq' component={Faq}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
