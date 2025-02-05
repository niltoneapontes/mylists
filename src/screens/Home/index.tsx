import React, { useState } from 'react'
import { View } from 'react-native'
import { Title } from '../../components/Title'
import { Item } from '../../components/Item'
import { FloatingButton } from '../../components/FloatingButton'
import BottomSheet from '../../components/BottomSheet'
import FeatherIcons from '@expo/vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const [showBottomSheet, setShowBottomSheet] = useState(false)
  const navigation = useNavigation<any>()

  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: '#212029' }}>
        <View style={{ flex: 1, width: '100%', padding: 16, paddingTop: 40, backgroundColor: '#212029' }}>
            <View style={{ marginBottom: 24 }}>
                <Title>Minhas listas</Title>
            </View>
            <Item
                text='Lista de compras'
                type='list'
                onPress={() => {
                    navigation.navigate("List")
                }}
                trailingIcon='edit-2'
                trailingIconAction={() => {}}
                secondTrailingIcon='trash-2'
                secondTrailingIconAction={() => {}}
            />
            <FloatingButton 
                onPress={() => setShowBottomSheet(true)}
                icon={<FeatherIcons name='plus' size={32}/>}
            />
        </View>
        {showBottomSheet && <BottomSheet
            buttonText='Adicionar'
            title='Nova lista'
            inputPlaceholder='Insira o título da lista'
            closeAction={() => setShowBottomSheet(false)}
        />}
    </View>
  )
}
