import { View, Text, TextInput, ActivityIndicator, StyleSheet, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LocalStore from "sync-storage"
import SelectDropdown from 'react-native-select-dropdown'



const Search = () => {
    const [from, setfrom] = useState('')
    const [to, setto] = useState('')
    const [froml, setfroml] = useState(-1)
    const [tol, settol] = useState(-1)
    const [l, setl] = useState(false)
    const lang = ["uz", "en", "ru"]
    const languages = ["O'zbek", "English", "Russian"]
    const uri = `https://api.mymemory.translated.net/get?q=${from}&langpair=${lang[froml]}|${lang[tol]}`
    function btn() {
        if (from != "" && froml != -1 && tol != -1) {
            setl(true)
            setto('')
            fetch(uri).then(r => r.json())
                .then(d => {
                    setto(d.responseData.translatedText)
                    setl(false)

                })
            console.log(to);

        } else {
            Alert.alert("To'liq to'ldiring")
        }
    }
    return (

        <View>
            <Text style={{ fontSize: 20, color: "white" }}>Tarjima Qilish:</Text>
            <View style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center" }}>

                <SelectDropdown
                    data={languages}
                    onSelect={(selectedItem, index) => {
                        setfroml(index)
                    }}

                />
                <TextInput
                    style={{ width: "100%", height: 130, borderWidth: 1, fontSize: 20, borderColor: "white", backgroundColor: "white", marginBottom: 10, marginTop: 10, borderRadius: 7 }}
                    onChangeText={setfrom}
                    value={from}
                    placeholder='Matnni kiriting!!!'
                />

                <SelectDropdown
                    data={languages}
                    onSelect={(selectedItem, index) => {
                        settol(index)
                    }}
                />
                <ScrollView style={{ width: "100%", height: 130, borderWidth: 1,  borderColor: "white", backgroundColor: "white", marginBottom: 10, marginTop: 10, }}>
                    <View>

                        <Text style={{fontSize: 20,}}>
                            {l ? (<ActivityIndicator size="30" color="red" />) : ""}
                            {to}
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <Button

                onPress={btn}
                title="Tarjima Qilish"
                color="#841584"


            />


        </View>
    );
}

const styles = StyleSheet.create({




})


export default Search