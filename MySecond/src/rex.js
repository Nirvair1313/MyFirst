import *as React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'




function counter(state, action) {
    if (typeof state === 'undefined') {
        return 0;
    }




    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
    
        case 'DECREMENT':
            return state - 1;
    
        default:
            return state;
        
    }

}



let store = createStore(combineReducers({ count: counter }))


function Counter({ count, dispatch, navigation }) {
    return (
        <View style={styles.Container}>
            <Text style={styles.paragraph}>{count} </Text>
            <Button
                title='Increment'
                onPress={() => dispatch({ type: 'INCREMENT' })}
            />
              <Button
                title='Increment'
                onPress={() => dispatch({ type: 'DECREMENT' })}

            />
  <Button
                title='Go To Static Screen'
                onPress={() => navigation.navigate(' StaticCounter')}
            />


        </View>
    )
}


function StaticCounter({count}) {
    return (
        <View styles={styles.Container}>
            <Text style={styles.paragraph}>{count}</Text>
        </View>
    )
}


let CounterContainer = connect((state) => ({ count: state.count }))(Counter);
let StaticCounterContainer = connect((state) => ({ count: state.count })(StaticCounter));



let RootStack = createNativeStackNavigator();



export default function App() {
    return(
    <Provider store={store}>
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name='Counter' component={CounterContainer} />
                  <RootStack.Screen name=' StaticCounter' component={StaticCounterContainer} />
                

            </RootStack.Navigator>

    </NavigationContainer>
        </Provider>
    )
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:"center"
        
    },
    paragraph: {
        margin: 10,
        fontSize: 20,
        backgroundColor:"#ff6"
        
    }
})