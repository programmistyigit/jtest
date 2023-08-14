import { View, Text, TouchableOpacity, Alert, ImageBackground ,ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { data, mathtoken } from '../Token'
import typer, { setType } from '../type'
import { useDispatch, useSelector } from 'react-redux'




const Test = () => {
  const [data,setdata]=useState([])
  const [trr,settr]=useState(null)
  const [i,seti]=useState(0)
  const [ball,setball]=useState(0)
  const {typer}=useSelector((e)=>e.typer)
  const distpatch = useDispatch()
for (let i = 0; i < data.length; i++) {
  if(data[i].type==typer){
    const fan=data[i].fan
  }
  
}




  useEffect(()=>{
    
    fetch(`${mathtoken}${typer}&type=boolean`)
    .then(r=>r.json())
    .then(d=>{
      console.log(d)
      setdata(d)
    })
  },[])
  


  function tr(){
    if(data.length == 0) return ;
    settr(null)
    console.log(data.results[i]?.question);
    fetch(`https://api.mymemory.translated.net/get?q=${data.results[i]?.question}&langpair=en|uz`)
    .then(r=>r.json())
    .then(d=>{
      console.log(d, "------",trr)
     
      if(d.matches!=""){
        settr(d.matches[0].translation)
      }else{
        settr(data.results[i].question)
      }
    })
    
   
  }

  useEffect(tr , [i, data])


function onInputt(top){
  seti(prevState => prevState + 1)
  if(data.results[i]?.correct_answer==top){
    Alert.alert("Barakalla")
    setball(p=>p+1)
 
  }else{
    Alert.alert("Xato")
    
  }

  if(i==9){
    ttt()
  }

}
function ttt(){
  settr('')
  Alert.alert("Test yakunlandi. Sizning balingiz: "+ball)
  distpatch(setType(0))
}




  // {data.results[0]}
  return (
    <ImageBackground style={{flex:1,marginTop:20}} source={{uri:"https:unsplash.it/300/600?random"}}>

    <View style={{flex:1,marginTop:50,display:"flex",justifyContent:"center",alignItems:"center"}}>
    <View style={{width:"auto",height:"auto",backgroundColor:"green",borderRadius:5}}>
      <Text style={{fontSize:26}}>{i+1}/10</Text>
    </View>

    <View style={{width:300,height:"auto",backgroundColor:"#ffffaf",marginTop:10,marginBottom:10}}>
      <Text style={{fontSize:23,margin:10,textAlign:"center"}}>{trr?trr:<ActivityIndicator size="large" color="#00ff00" />}</Text>
    </View>
    <View>
      <TouchableOpacity disabled={!trr} onPress={()=>onInputt("True")} style={{width:250,height:50,backgroundColor:"blue",borderRadius:7,borderWidth:2}}>
        <Text style={{fontSize:35,color:"green",textAlign:"center"}}>To'gri</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={!trr} onPress={()=>onInputt("False")} style={{width:250,height:50,backgroundColor:"blue",borderRadius:7,borderWidth:2,marginTop:10}}>
        <Text style={{fontSize:35,textAlign:"center",color:"red"}}>Noto'gri</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={!trr} onPress={ttt} style={{width:250,height:40,backgroundColor:"blue",borderRadius:7,borderWidth:2,marginTop:30}}>
        <Text style={{fontSize:25,textAlign:"center",color:"green"}}>Testni yakunlash</Text>
      </TouchableOpacity>
    </View>

    </View>
    </ImageBackground>
  )
}




// &#39; = '

export default Test