import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { mathtoken,data, Boshqa } from '../Token'
import { useDispatch } from 'react-redux'
import { setType } from '../type'
import LocalStore from "sync-storage"


const Home = () => {
    const distpatch = useDispatch()
    async function typer(type){
        console.log(type);
        if(await !LocalStore.get("son")){
            await LocalStore.set("son",0)
        }
        distpatch(setType(parseInt(type)))
    }

    const data1=data

 
    return (
        <View>
            <Text style={{color:"green",fontSize:25}}>Fanlar:</Text>
            <FlatList
                data={data1}
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
            <Text style={{color:"green",fontSize:25}}>Boshqa:</Text>
            <FlatList
                data={Boshqa}
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