
import React ,{ useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet, Image } from 'react-native'




export default function app() {
    const [data, setData] = useState([])
    

    useEffect(() => {

        let fetchres = fetch(`https://fakestoreapi.com/products`)
        fetchres.then(Res => {
            Res.json().then(d => {
                console.log(d);
                setData(d)
                 
            })

            
        





        }).catch(error => {
                console.log(error)
            
        
            })
        
        
    }
   ,[] )

    return (

        <View>
            
            
          
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Text style={styles.text}>{item.title}{item.price}</Text>
                        <Image style={{width:150,height:100}}
                            source={{
                                uri: `${item.image}`
                            }}/>
                    </View>
                )}
                
 />

            
        </View>
        
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize:20,
    },
    text: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
        margin:10
    }



})
