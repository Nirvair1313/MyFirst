import React from "react";
import { View,SafeAreaView ,Text} from "react-native";
import { Counter } from './fetures/counter/Counter'
import  store   from './app/store'
import { Provider }  from "react-redux";





     
  export function App1() {

      return (
        <SafeAreaView>
              
              
       
        
          <Provider store={store}>
     
           
                  
              
                  <Counter/>
               
            </Provider>
      </SafeAreaView>


      
              
            
           

         
        
     
        
    )
}
export default App1;


