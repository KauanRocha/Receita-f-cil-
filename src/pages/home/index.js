import { useState, useEffect } from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList,  } from 'react-native'

import { Ionicons} from '@expo/vector-icons'

import { Logo } from '../../componentes/logo'

import api from '../../services/api'

import { FoodList } from '../../componentes/foodsList'

export function Home(){
    const [inputValue, setInpuValue] = useState("")
    const [foods, setFoods] = useState([])

    useEffect( () => {
        async function fetchApi(){
            const response = await api.get("/foods")
            setFoods(response.data)
        
        }

        fetchApi();

    }, [])

    function handleSearch(){
        console.log("Você digitou:")
        console.log(inputValue)
    }


    return(
        <SafeAreaView style = {style.container}>
            <Logo/>
            <Text style = {style.title}>Encontre a receita</Text>
            <Text style = {style.title}>que combina com você!</Text>


        <View style = {style.form}>
            <TextInput
            placeholder = "Digite o nome da comida..."
            style = {style.input}
            value={inputValue}
            onChangeText={ (text) => setInpuValue(text)}
            />
            <TouchableOpacity onPress={handleSearch}>
                <Ionicons name="search" size={28} color="#4CBE6C"/>
            </TouchableOpacity>

        </View>

        <FlatList
        data={foods}
        keyExtractor= { (item) => String(item.id)}
        renderItem={ ({ item }) => <FoodList data={item}/> }
        showsVerticalScrollIndicator={false}
        />
                

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    },
    title:{
        fontSize: 26,
        fontWeight: "bold",
        color: "#0e0e0e"
    },
    form:{
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ECECEC',
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input:{
        width: '90%',
        maxWidth: '90%',
        height: 54
    }
})