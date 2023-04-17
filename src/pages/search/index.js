import {View, Text, StyleSheet } from 'react-native'

export function Search(){
    return(
        <View style = {style.container}>
            <Text>Página Buscar</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: 'yellow'
    }
})