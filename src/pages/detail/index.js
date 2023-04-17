import { useLayoutEffect } from 'react'
import {View, Text, StyleSheet, Pressable } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import { Entypo } from '@expo/vector-icons'

export function Detail(){
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
       
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => (console.log('TESTANDO'))}>
                    <Entypo
                        name='heart'
                        size={28}
                        color='#FF4141'
                    />
                </Pressable>
            )
        })

    }, [navigation, route.params?.data])

    return(
        <View style = {style.container}>
            <Text>Página Detalhes da receita</Text>
            <Text>{route.params?.data.name}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: 'blue'
    }
})