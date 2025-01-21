import { View, Text } from 'react-native'
import React from 'react'
import { Title } from '../../components/Title'
import { Item } from '../../components/Item'
import { FloatingButton } from '../../components/FloatingButton'
import BottomSheet from '../../components/BottomSheet'

export function List() {
  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: '#212029' }}>
        <View style={{ flex: 1, width: '100%', padding: 16, paddingTop: 100, backgroundColor: '#212029' }}>
            <Title>Lista de Compras</Title>
            <Item>Batata</Item>
            <FloatingButton>+</FloatingButton>
        </View>
        <BottomSheet>Adicionar</BottomSheet>
    </View>
  )
}