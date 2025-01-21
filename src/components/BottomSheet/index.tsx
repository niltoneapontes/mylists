import { View, Text, TextInput, TouchableOpacity, ViewProps } from 'react-native'
import React from 'react'
import { Button } from '../Button'
import { styles } from './styles'

export default function BottomSheet({ children }: ViewProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.closeButton}>x</Text>
        <Text style={styles.title}>Nova lista</Text>
        <TextInput style={styles.input} placeholder='Insira o título da lista' placeholderTextColor={'#878787'}></TextInput>
        <Button onPress={() => {}}>{children}</Button>
    </View>
  )
}