import { TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Title } from '../../components/Title'
import { Item } from '../../components/Item'
import { FloatingButton } from '../../components/FloatingButton'
import BottomSheet from '../../components/BottomSheet'
import FeatherIcons from '@expo/vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ListProps } from '../Home'

export function List() {
    const [showBottomSheet, setShowBottomSheet] = useState(false)
    const navigation = useNavigation()
    const params = useRoute().params as {
        list: ListProps,
        setLists: React.Dispatch<React.SetStateAction<ListProps[]>>
    }

  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: '#212029' }}>

        <View style={{ flex: 1, width: '100%', padding: 16, paddingTop: 40, backgroundColor: '#212029' }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginBottom: 24}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <FeatherIcons name="chevron-left" size={32} color="#FFFFFF" style={{marginRight: 12}}></FeatherIcons>
            </TouchableOpacity>
            <Title>{params?.list.title}</Title>
        </View>
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
            setLists={params.setLists}
            inputPlaceholder='Insira seu texto aqui...'
            closeAction={() => {
                setShowBottomSheet(false)
            }}
        />}
    </View>
  )
}