import React,{useState} from 'react';
import{View,Text,StyleSheet,TouchableOpacity} from 'react-native';



const Directionlayout =()=>{
    const[direction,setDirection]= React.useState("rtl");

    


return(
    <PreviewLayout
    label="Direction"
    selectedValue={direction}
    values={["ltr","rtl"]}
    setSelectedValue={setDirection}>
<View
style={[styles.box,{backgroundColor:"powderblue"}]}

/>



<View
style={[styles.box,{backgroundColor:"steelblue"}]}

/>
<View
style={[styles.box,{backgroundColor:"blue"}]}
/>
<View 
style={[styles.box,{backgroundColor:"orange"}]}
/>





</PreviewLayout>
)
}


const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}) =>(
    <View style={{flex:1,padding:10}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}> 
    {
        values.map((value)=>(
            <TouchableOpacity
            key={value}
            onPress={()=> setSelectedValue(value)}
            style={[styles.Button,
                selectedValue === value && styles.selected,]}>
                <Text
                style={[styles.ButtonLabel,
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
    


export default  Directionlayout;

const styles = StyleSheet.create({
    box:{
        width:100,
        height:100
    },
    label:{
        backgroundColor:"red",
        fontSize:30,
        textAlign:"center"
        

    },
    row:{
        fontSize:15,
        backgroundColor:"violet",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:'row',
        padding:10,
        tintColor:"white",
        borderRadius:5,
        flexWrap:"wrap",


    },
    ButtonLabel:{
        fontSize:18,
        fontWeight:"900"
        
    },
    Button:{
        backgroundColor:"white",
        borderRadius:5,
        alignSelf:"flex-start",
        marginVertical:6,
        marginHorizontal:"1%",
        marginBottom:6,
        maxWidth:"48%",
        textAlign:"center",
        
    },
    selected:{
        backgroundColor:"blue",
        borderWidth:1,
    },
    selectedLabel:{
        backgroundColor:"white"
    },
    Container:{
        flex:1,
        marginTop:6,
        backgroundColor:"aliceblue",
    }
})

