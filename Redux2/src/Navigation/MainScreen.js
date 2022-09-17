import React ,{ useEffect,useLayoutEffect} from "react";
import { View, Text ,Button} from "react-native";
//import { NaviagationContainer } from '@react-navigation/native'
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { useCameraRoll } from "@react-native-community/hooks";
import { useNavigation } from '@react-navigation/native-stack'








function  MainScreen () {
    



const navigation = useNavigation()
useLayoutEffect(() => {
    navigation.setOption({
        headerShown: false,
    });
},[])






    return (
        <View >
            <Text>
                Main Screen

                <Button title="Scrren2" onPress={()=>navigation.navigate('Home')}/>
            </Text>
        </View>
    )
}




export default MainScreen;