import React from 'react';
import {Text,View,StyleSheet} from 'react-native';




function App (){
    return(
        <View style={styles.Box0}>
        <View style={styles.Box1}>
        <View style={styles.Box2}>
        <View style={styles.Box3}>
        <View style={styles.Box4}>
        <View style={styles.littleBox1}>
        <View style={styles.adjestlittlebox}></View>
        <View style={styles.adjestlittlebox2}></View>

        
        <View style={styles.littleBox2}>
         </View>
</View>
        </View>

        </View>
            <View>

            </View>
        </View>

        </View>
            
        </View>
    )
}

export default App;
const styles = StyleSheet.create({
    Box0:{
        justifyContent:"space-between",
        width:100,
        height:100,
        backgroundColor:"#4f9",
        flexDirection:"row",
        marginHorizontal:50,
        
        
    },
    Box1:{
        flexWrap:"wrap",
        width:100,
        height:100,
        backgroundColor:"#ff1",
        flexDirection:"row",
        marginLeft:160,
        justifyContent:"space-around",
    },
   
        
        
        
        
        
        
       
    Box3:{
        
        width:80,
        height:80,
marginLeft:-190,
justifyContent:"center",





        
        
        backgroundColor:"#f23",
        
        
        
        
        
    },
    Box2:{
        width:80,
        height:80,
        backgroundColor:"#f90",
        margin:120,
     marginLeft:-23,
     justifyContent:"space-around",
     flexDirection:"row"
        
    },
Box4:{
    width:80,
    height:80,
    backgroundColor:"#cc3",
    justifyContent:"space-around",
    marginHorizontal:270,
    margin:100,

},
littleBox1:{
    width:50,
    height:50,
    backgroundColor:"#b34",
    marginTop:180,
    marginHorizontal:20,
    marginStart:20,
    marginLeft:20,
},
adjestlittlebox:{
    width:50,
    height:50,
    backgroundColor:"#ff3",

    marginLeft:-200,
    marginBottom:-50,
},
adjestlittlebox2:{
    width:50,
    height:50,
    backgroundColor:"#b67",
    flexDirection:"row",
    marginHorizontal:-80,
    marginLeft:-100,

},
littleBox2:{
    width:50,
    height:50,
    backgroundColor:"#c90",
    justifyContent:"space-around",
    marginLeft:-290,
    flexDirection:"row",
    marginTop:-50,

},


})