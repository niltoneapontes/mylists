import { View, Text, TextInput, TouchableOpacity, ViewProps } from 'react-native'
import React from 'react'
import { Button } from '../Button'
import { styles } from './styles'

interface BottomSheetProps extends ViewProps {
    title: string,
    buttonText: string,
    inputPlaceholder: string,
}

export default function BottomSheet({ title, buttonText, inputPlaceholder }: BottomSheetProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.closeButton}>x</Text>
        <Text style={styles.title}>{title}</Text>
        <TextInput style={styles.input} placeholder={inputPlaceholder} placeholderTextColor={'#878787'}></TextInput>
        <Button onPress={() => {}}>{buttonText}</Button>
    </View>
  )
}