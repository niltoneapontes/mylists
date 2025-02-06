import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Title } from '../../components/Title'
import { Item } from '../../components/Item'
import { FloatingButton } from '../../components/FloatingButton'
import BottomSheet from '../../components/BottomSheet'
import FeatherIcons from '@expo/vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Disclaimer } from '../../components/Disclaimer'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

  async function getLists (): Promise<ListProps[]> {
    try {
        const value = await AsyncStorage.getItem('@mylists/lists')
        if (value) {
            return JSON.parse(value)
        } else {
            return []
        }
    } catch (e) {
        console.error(e)
        return []
    }
  }

  async function saveList (list: ListProps) {
    try {
        const currentLists = await getLists()
        const existingList = currentLists.find(l => l.title === list.title)
        if (!existingList) {
            await AsyncStorage.setItem('@mylists/lists', JSON.stringify([...currentLists, list]))
            setLists([...currentLists, list])
        }
        else {
            throw Error('Lista já existente')
        }
    } catch (e) {
        console.error(e)
    }
  }

  async function deleteList (listTitle: string) {
    try {
        const currentLists = await getLists()
        const updatedLists = currentLists.filter((list) => list.title!== listTitle)

        setLists(updatedLists)

        await AsyncStorage.setItem('@mylists/lists', JSON.stringify(updatedLists))
    } catch (e) {
        console.error(e)
    }
  }

  useEffect(() => {
    async function get() {
        const result = await getLists()
        setLists(result)
    }

    get()
  }, [])

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
                            })
                        }}
                        trailingIcon='edit-2'
                        trailingIconAction={() => {}}
                        secondTrailingIcon='trash-2'
                        secondTrailingIconAction={() => {
                            deleteList(item.title)
                        }}
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
            saveList={saveList}
            closeAction={() => setShowBottomSheet(false)}
        />}
    </View>
  )
}
