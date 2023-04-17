import {View, Text, StyleSheet } from 'react-native'

export function Favorites(){
    return(
        <View style = {style.container}>
            <Text>Página de Favoritos</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: 'green'
    }
})