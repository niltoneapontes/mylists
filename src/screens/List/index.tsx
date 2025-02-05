import { View } from 'react-native'
import React, { useState } from 'react'
import { Title } from '../../components/Title'
import { Item } from '../../components/Item'
import { FloatingButton } from '../../components/FloatingButton'
import BottomSheet from '../../components/BottomSheet'
import FeatherIcons from '@expo/vector-icons/Feather'

export function List() {
    const [showBottomSheet, setShowBottomSheet] = useState(false)

  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: '#212029' }}>
        <View style={{ flex: 1, width: '100%', padding: 16, paddingTop: 40, backgroundColor: '#212029' }}>
            <Title>Lista de Compras</Title>
            <Item
                text='Batata'
                type='list-item'
                onPress={() => {}}
                trailingIcon='edit-2'
                trailingIconAction={() => {}}
                secondTrailingIcon='trash-2'
                secondTrailingIconAction={() => {}}
            />
            <FloatingButton 
                onPress={() => {
                    setShowBottomSheet(true)
                }}
                icon={<FeatherIcons name='plus' size={32}/>}
            />
        </View>
        {showBottomSheet && <BottomSheet
            buttonText='Adicionar'
            title='Novo item'
            inputPlaceholder='Insira seu texto aqui...'
            closeAction={() => {
                setShowBottomSheet(false)
            }}
        />}
    </View>
  )
}