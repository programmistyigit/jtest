import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Test = () => {
    const [data,setdata]=useState([])
    fetch(`https://opentdb.com/api.php?amount=10&category=19&type=boolean`)
    .then(r=>r.json())
    .then(d=>)
  return (
    <View>
        <View>
            <Text></Text>
        </View>
    </View>
  )
}

export default Test