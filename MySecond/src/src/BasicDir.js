import  React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';



const FlexDir = ()=>{
  const[flexDirection,setflexDirection] = useState("column");



return(
    <PreviewLayout
    label="flexDirection"
    values={["column","row","row-reverse","column-reverse"]}
    selectedValue={flexDirection}
    setSelectedValue={setflexDirection}>
        <View style={[styles.box,{backgroundColor:"powderblue"}]}/>
        <View style={[styles.box,{backgroundColor:"darkviolet"}]}/>
        <View style={[styles.box,{backgroundColor:"darkorange"}]}/>
    </PreviewLayout>
);




}

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}) =>(
    <View style={{padding:20,flex:1}}>
        <Text style={styles.label}>{label}</Text>
    

<View style ={styles.row}>
{
    values.map((value)=>(
        <TouchableOpacity
        key={value}
        onPress={()=> setSelectedValue(value)}
        style={[styles.button,
        selectedValue === value && styles.selected,]}>
            <Text style={[styles.buttonLabel,
            selectedValue === value && styles.selectedLabel,]}>
                {value}
            </Text>
            
        </TouchableOpacity>
    ))
}
</View>
<View style={[styles.Container,{[label]: selectedValue}]}>
{children}
</View>
</View>
)





const styles = StyleSheet.create({
    Container:{
        flex:1,
        padding:10,
        backgroundColor:"aliceblue",
    
},
row:{
 flexDirection:"row",
 flexWrap:"wrap"
},
box:{
    width:50,
    height:50,
},
selectedLabel:{
    
    color:"#00ffff"
    

},

row:{
    flexDirection:"row",
    flexWrap:"wrap",
},
buttonLabel:{
    fontSize:20,
    borderRadius:2,
    
   
    

},
selected:{
    backgroundColor:"burlywood",
    borderWidth:1,
    borderRadius:5,
    margin:10,


},
label:{
    textAlign:"center",
    margin:15,
    borderRadius:5,
    borderWidth:1,
    fontSize:20,
    backgroundColor:"cornsilk"
    
},
button:{
    justifyContent:"center",
    paddingHorizontal:8,
    marginVertical:16,
    alignSelf:"flex-start",
    marginHorizontal:"1%",
    minWidth:"48%",
    textAlign:"center",


}
})


export default FlexDir;
