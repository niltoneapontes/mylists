import { View, Text, TextInput, TouchableOpacity, ViewProps } from 'react-native'
import React from 'react'
import { Button } from '../Button'
import { styles } from './styles'
import FeatherIcons from '@expo/vector-icons/Feather'

interface BottomSheetProps extends ViewProps {
    title: string,
    buttonText: string,
    inputPlaceholder: string,
    closeAction: () => void
}

export default function BottomSheet({ title, buttonText, inputPlaceholder, closeAction }: BottomSheetProps) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={closeAction}><FeatherIcons name='x' size={24} color='#FFFFFF'/></TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TextInput style={styles.input} placeholder={inputPlaceholder} placeholderTextColor={'#878787'}></TextInput>
        <Button onPress={() => {}}>{buttonText}</Button>
    </View>
  )
}