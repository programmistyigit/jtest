import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Search = () => {
    const [search, setsearch] = useState('')

    return (
        <View>
            <TextInput
                style={{ height: 40, borderWidth: 1, borderRadius: 7, backgroundColor: "#ffffef",marginTop:10,fontSize:25 }}
                onChange={setsearch}
                value={search}
                placeholder='Test qidirish'
            />
        </View>
    )
}

export default Search