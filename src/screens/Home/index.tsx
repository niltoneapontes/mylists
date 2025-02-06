import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { Title } from '../../components/Title'
import { Item } from '../../components/Item'
import { FloatingButton } from '../../components/FloatingButton'
import BottomSheet from '../../components/BottomSheet'
import FeatherIcons from '@expo/vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Disclaimer } from '../../components/Disclaimer'

export interface ListProps {
    title: string,
    items: ItemProps[]
}

export interface ItemProps {
    text: string
    checked: boolean
}

export function Home() {
  const [showBottomSheet, setShowBottomSheet] = useState(false)
  const navigation = useNavigation<any>()

  const [lists, setLists] = useState<ListProps[]>([])

  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: '#212029' }}>
        <View style={{ flex: 1, width: '100%', padding: 16, paddingTop: 40, backgroundColor: '#212029' }}>
            <View style={{ marginBottom: 24 }}>
                <Title>Minhas listas</Title>
            </View>
            <FlatList
                data={lists}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <Item
                        text={item.title}
                        type='list'
                        onPress={() => {
                            navigation.navigate("List", {
                                list: item,
                                setLists: setLists // não vai funcionar porque não é serializável, e agora? 
                            })
                        }}
                        trailingIcon='edit-2'
                        trailingIconAction={() => {}}
                        secondTrailingIcon='trash-2'
                        secondTrailingIconAction={() => {}}
                    />
                )}
                ItemSeparatorComponent={() => <View style={{ width: '100%', height:8 }}></View>}
                ListEmptyComponent={<Disclaimer>Ops... Você não criou listas ainda :(</Disclaimer>}
            ></FlatList>
            <FloatingButton 
                onPress={() => setShowBottomSheet(true)}
                icon={<FeatherIcons name='plus' size={32}/>}
            />
        </View>
        {showBottomSheet && <BottomSheet
            buttonText='Adicionar'
            title='Nova lista'
            inputPlaceholder='Insira o título da lista'
            setLists={setLists}
            closeAction={() => setShowBottomSheet(false)}
        />}
    </View>
  )
}
