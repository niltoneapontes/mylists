import { View, Text, TextInput, TouchableOpacity, ViewProps } from 'react-native'
import React from 'react'
import { Button } from '../Button'
import { styles } from './styles'
import FeatherIcons from '@expo/vector-icons/Feather'
import { ListProps } from '../../screens/Home'

interface BottomSheetProps extends ViewProps {
    title: string,
    buttonText: string,
    setLists: React.Dispatch<React.SetStateAction<ListProps[]>>,
    inputPlaceholder: string,
    closeAction: () => void
}

export default function BottomSheet({ title, buttonText, setLists, inputPlaceholder, closeAction }: BottomSheetProps) {
  const [inputText, setInputText] = React.useState('')

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={closeAction}><FeatherIcons name='x' size={24} color='#FFFFFF'/></TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TextInput style={styles.input} placeholder={inputPlaceholder} placeholderTextColor={'#878787'}
        onChangeText={(text) => setInputText(text)}></TextInput>
        <Button onPress={() => {
          setLists((prevState) => [...prevState, {
            title: inputText,
            items: []
          }])
          closeAction()
        }}>{buttonText}</Button>
    </View>
  )
}