
import React, {useState} from 'react';
import {Text,View,ScrollView,StyleSheet,RefreshControl,FlatList,SectionList,TextInput,Button,TouchableOpacity,Pressable,Alert,ToastAndroid,Modal,Image} from 'react-native';



const app = ()=>{
    const[name,Setname] = React.useState('');
    const[email,Setemail] = React.useState('');
    const[showWarning,SetshowWarning] = React.useState(false)
    const[Submited,SetSubmit] = React.useState(false)



const onPresshandler = ()=>{
    if(name.length>0){

   SetSubmit(!Submited)
} else{

    SetshowWarning(true)
//     Alert.alert('Warning', 'Name must be longer than 3 character',[
//         {text:"OK" ,onPress:()=>console.table('ok pressed')
//     },

//         {text:"Cancel" ,onPress:()=>console.table('ok pressed')
    
//     },

//         {text:"Do Not show again" ,onPress:()=>console.table('ok pressed')
//     }
//     ],{cancelable:true,})
// }
// } 
//     ToastAndroid.showWithGravity('Name must be longer than 3 Chararcter ',
//     ToastAndroid.SHORT,
//     ToastAndroid.TOP,
//     0,
//     30
//   



} }




// const app = ()=>{
//     const[Item,SetItems] = useState([
       /* {key:"1", name:"Item 1",},
        {key:"2", name:"Item 2",},
        {key:"3", name:"Item 3",},
        {key:"4", name:"Item 4",},
       {key:"5", name:"Item 5",},
        {key:"6", name:"Item 6",},
       {key:"7", name:"Item 7",},
        {key:"8", name:"Item 8",},
        {key:"9", name:"Item 9",},
       {key:"0", name:"Item 10",},
        {key:"1", name:"Item 11"},

   
   
    //   {name:"Item 1"},
    //   {name:"Item 2"},
    //   {name:"Item 3"},
    //   {name:"Item 4"} ,
    //   {name:"Item 5"},
    //   {name:"Item 6"},
    //   {name:"Item 7"},
    //   {name:"Item 8"},
    //   {name:"Item 9"},
    //   {name:"Item 10"},
    //   {name:"Item 11"},
    // // *///
/*
const [title,Settitle] = useState(false)

    const DATA = [
{ title:"Title 1",
    data:["Title-1-1","Title-1-2","Title-1-3"],  },
   
   
   
    { title:"Title 2",
        data:["Title-1-4","Title-1-5","Title-1-6"],

    },
    {
        title:"Title 3",
        data:["Title-1-7","Title-1-8","Title-1-9"],
    },
    {
        title:"Title 4",
        data:["Title-1-10","Title-1-11","Title-1-12"],
    },
    {
        title:"Title 5",
        data:["Title-1-13","Title-1-14","Title-1-15"],
    },
    {
        title:"Title 6",
        data:["Title-1-16","Title-1-17","Title-1-18"],
    },
    ]

*/
const [Refreshing,SetRefreshing] = useState(false);

const onRefresh = ()=>{
    SetRefreshing(true);
    Settitle([...DATA, {title:"Title 7",data:["Title-1-9"]}]);
    SetRefreshing(false);
    
}
return(


<View style={styles.body}>

<Modal visible={showWarning} onRequestClose={()=>SetshowWarning(false)}>
<View style={styles.warning}>
<View style={ styles.warningtitle}>
<Text>Warning!</Text>
</View>
<View style={styles.text}>
    <Text style={styles.text}>Plz Add your Name</Text>

<TouchableOpacity>
    <View>
        <Text style={styles.ok} onPress={()=>SetshowWarning(false)}>Ok</Text>
        
    </View>
    </TouchableOpacity>
    </View>
    </View>
    
</Modal>

<Text style={styles.text}> Enter UserName</Text>
<TextInput placeholder='Enter Name' style={styles.input}  onChangeText={(value)=>Setname(value)}/>
<TextInput placeholder='Enter Email' style={styles.input} onChangeText={(value)=>Setemail(value)}/>

{/* <TouchableOpacity  activeOpacity={0.3} u style={styles.button} onPress={onPresshandler}> */}
<Pressable
onPress={onPresshandler} hitSlop={{top:10,left:10,right:10,bottom:10}}
android_ripple={{color:"#f45"}}
style={({Pressed})=>[
    {backgroundColor: Pressed? "#ff6":"#00f"},
    styles.button
]}>

<Text style={styles.text}>{Submited?"submit":"clear"}</Text>

</Pressable>

<Text style={styles.text}> your Register{name}</Text>



</View>
)
}
// }
// {/* }
//     {/* /*/{///////* /*    <SectionList
//         keyExtractor={(item,index)=>index.toString()}
//    sections={DATA}
//    renderItem={({item})=>(
//    <View style={styles.item}>
//    <Text style={styles.text}>{item}</Text>
//    </View>
// )}

// renderSectionHeader={({section})=>(
// <View style={styles.title}>
// <Text style={styles.text}>{section.title}</Text>

// </View>
// )} 
// // */
// // refreshControl={
// // //     <RefreshControl */}
// // //         refreshing={Refreshing}
// // //         onRefresh={onRefresh}
// // //     />
    
// // // }
   
// // //     />
//  */}











   
   
   

const styles = StyleSheet.create({
    item:{
        margin:15,
        backgroundColor:"#909",
    
        alignItems:"center",
        justifyContent:"center",
    
    
        
    },
    modal:{
        alignItems:"center",
        justifyContent:"center",
        fontSize:23,
        width:300,
        height:300,
    },

    text:{
        fontSize:30,
       
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        
    },
    body:{
        flex:1,
        margin:15,
        justifyContent:"center",
        alignItems:"center"
        
        
        
    },
    title:{
        backgroundColor:"#f45",
        alignItems:"center",
        justifyContent:"center",
        

    },
    input:{
        width:200,
        
        borderRadius:5,
        borderWidth:1,
        margin:10
    },
    button:{
        width:80,
        height:42,
        backgroundColor:"#04f",
     
        borderRadius:3,
        borderWidth:1,
        fontSize:25,
        justifyContent:"center",
        alignItems:"center",
        
    },
    warning:{
        width:300,
        height:300,
        margin:30,
        textAlign:"center",
        borderRadius:10,
        
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ff0",
        borderWidth:2,
    },
    ok:{
        fontSize:27,
        margin:40,
        backgroundColor:"#00f"

    },
    warningtitle:{
        fontSize:25,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"red"
    }
    })
    
    export default app;

// /*

// ///* <SectionList
// //keyExtractor={item}
//   //  sections={Data}
//    // //renderItem={({item,index}=>// index.index.}//</SectionList>

    

    




// //<SectionList
//   //  keyExtractor={(item,index)=>index.to}
// ///>
// //<FlatList/>


// // keyExtractor={(item,index)=>index.toString()}
// //     data={Item}
// //     renderItem={({item})=>(
// //         <View style={styles.item} >
// //         <Text style={styles.text}>{item.name}</Text>
// //         </View>
// //     )}

// //     refreshControl={
// //         <RefreshControl
// //             refreshing={Refreshing}
// //             onRefresh={onRefresh}
// //         />
// //     }
// // />

// // )
// //     }


// // {
// //     <ScrollView  refreshControl={
// //         <RefreshControl  
// //             refreshing={Refreshing}
// //             onRefresh={onRefresh}
// //             colors={["#f10"]}
// //             progressBackgroundColor={["#f378"]}
// //         />
        
// //     }>
// //     <View style={styles.body}>
      
// // { 
  
// //     Item.ma"p",(name)=>{
// //         return(
// //             <View style={styl"e",.name}> 
// // <Text style={styles.text"}",{na"m",.name}</Text>
// // </View> 
// //         )}
// //         )}     
        

// //         </View>

// //     </ScrollView> 
    





// // const styles = StyleSheet.create({
// // item:{
// //     margin:15,
// //     backgroundColor:"#909",

// //     alignItems:"center",
// //     justifyContent:"center",


    
// // },
// // text:{
// //     fontSize:27,
// //     justifyContent:"center",
    
// // },
// // body:{
// //     margin:10,
// //     backgroundColor:"#003"
    
    
// // }
// // })

// // export default app;
// 