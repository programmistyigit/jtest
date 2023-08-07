import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { mathtoken } from '../Token'

const Home = () => {
    function typer(type){
        console.log(type);
    }
    const data=[{
        fan:"Matematika",
        type:19,
        
    },
    {
        fan:"Sport",
        type:16,
        
    },{
        fan:"Tarix",
        type:23,
        
    },{
        fan:"Geografiya",
        type:22,
    },{
        fan:"Kompyuterlar",
        type:18
    }
]
    useState(()=>{
        fetch(mathtoken)
        .then(r=>r.json())
        .then(d=>console.log(d))
    },[])
    return (
        <View>
            <Text style={{color:"green",fontSize:25}}>Tanlang:</Text>
            <FlatList
                data={data}
                horizontal={true}
                style={{padding:5}}
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=> {
                   return  (
                        <TouchableOpacity onPress={()=>typer(item.type)} style={{width:200 , marginHorizontal:2 , height:60 , display:"flex" , justifyContent:"center" , alignItems:"center" , backgroundColor:"red" , borderRadius:20}}>
                             <Text style={{fontSize:25}}>{item.fan}</Text>
                        </TouchableOpacity>
                   )
                }}
                keyExtractor={(item)=>{
                    return item.type
                }}
            />
        </View>
    )
}

export default Home