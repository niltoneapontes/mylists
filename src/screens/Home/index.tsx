import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Title } from '../../components/Title'
import { Item } from '../../components/Item'
import { FloatingButton } from '../../components/FloatingButton'
import BottomSheet from '../../components/BottomSheet'

export function Home() {
  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: '#212029' }}>
        <View style={{ flex: 1, width: '100%', padding: 16, paddingTop: 100, backgroundColor: '#212029' }}>
            <Title>Minhas listas</Title>
            <Item>Lista de compras</Item>
            <FloatingButton 
                onPress={() => {}}
                label='+'
            />
        </View>
        <BottomSheet
            buttonText='Adicionar'
            title='Nova lista'
            inputPlaceholder='Insira o título da lista'
        />
    </View>
  )
}
