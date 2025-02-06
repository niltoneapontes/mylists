import { FlatList, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Title } from '../../components/Title'
import { Item } from '../../components/Item'
import { FloatingButton } from '../../components/FloatingButton'
import BottomSheet from '../../components/BottomSheet'
import FeatherIcons from '@expo/vector-icons/Feather'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ItemProps, ListProps } from '../Home'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Disclaimer } from '../../components/Disclaimer'

export function List() {
    const [showBottomSheet, setShowBottomSheet] = useState(false)
    const navigation = useNavigation()
    const params = useRoute().params as {
        list: ListProps,
    }

    const [list, setList] = useState<ListProps>({
        title: params.list.title,
        items: params.list.items,
    })

    async function getLists (): Promise<ListProps[]> {
        try {
            const value = await AsyncStorage.getItem('@mylists/lists')
            if (value) {
                console.log(JSON.parse(value))
                return JSON.parse(value)
            } else {
                return []
            }
        } catch (e) {
            console.error(e)
            return []
        }
      }

    async function saveItemIntoList (text: string) {
        try {

            const currentLists = await getLists()
            const newList = {...list, items: [...list.items, {
                text,
                checked: false, 
             }]}

            const updatedLists = currentLists.map(currentList => {
                if (currentList.title === params.list.title) {
                    return newList
                } else {
                    return currentList
                }
            })

            setList(newList);

            await AsyncStorage.setItem('@mylists/lists', JSON.stringify(updatedLists))
        } catch (e) {
            console.error(e)
        }
    }

    async function markAsChecked (item: ItemProps) {
        try {

            const currentLists = await getLists()

            const currentList = currentLists.find(l => l.title === params.list.title)

            if(currentList) {
                const updatedLists = currentLists.map(currentList => {
                    if (currentList.title === params.list.title) {
                        return {
                            ...currentList,
                            items: currentList?.items.map(currentItem => {
                                if (currentItem.text === item.text) {
                                    return {...currentItem, checked:!currentItem.checked}
                                } else {
                                    return currentItem
                                }
                            })
                        }
                    } else {
                        return currentList
                    }
                })
    
                const toggledList = {
                    title: currentList.title,
                    items: currentList?.items.map(currentItem => {
                        if (currentItem.text === item.text) {
                            return {...currentItem, checked:!currentItem.checked}
                        } else {
                            return currentItem
                        }
                    })
                }
                if(toggledList) {
                    setList(toggledList);
                }
    
                await AsyncStorage.setItem('@mylists/lists', JSON.stringify(updatedLists))
            } else {
                throw Error('A lista não existe')
            }
        } catch (e) {
            console.error(e)
        }
    }

    async function deleteItemFromList (item: ItemProps) {
        try {

            const currentLists = await getLists()

            const currentList = currentLists.find(l => l.title === params.list.title)

            if(currentList) {
                const updatedLists = currentLists.map(currentList => {
                    if (currentList.title === params.list.title) {
                        return {
                            ...currentList,
                            items: currentList?.items.filter(currentItem => currentItem.text !== item.text)
                        }
                    } else {
                        return currentList
                    }
                })
    
                const filteredList = {
                    title: currentList.title,
                    items: currentList?.items.filter(currentItem => currentItem.text !== item.text)
                }
                if(filteredList) {
                    setList(filteredList);
                }
    
                await AsyncStorage.setItem('@mylists/lists', JSON.stringify(updatedLists))
            } else {
                throw Error('A lista não existe')
            }
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        async function get() {
            const result = await getLists()
            if(params.list.title) {
                const foundList = result.find((list) => list.title === params.list.title)
                if (foundList) {
                    setList(foundList);
                }
            }
        }
        get();
    }, [params?.list])

  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: '#212029' }}>

        <View style={{ flex: 1, width: '100%', padding: 16, paddingTop: 40, backgroundColor: '#212029' }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginBottom: 24}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <FeatherIcons name="chevron-left" size={32} color="#FFFFFF" style={{marginRight: 12}}></FeatherIcons>
            </TouchableOpacity>
            <Title>{list && list.title}</Title>
        </View>
            <FlatList
                data={list.items}
                keyExtractor={(item) => item.text}
                renderItem={({ item }) => (
                    <Item
                        text={item.text}
                        type='list-item'
                        checked={item.checked}
                        onPress={() => {
                            markAsChecked(item)
                        }}
                        trailingIcon='edit-2'
                        trailingIconAction={() => {}}
                        secondTrailingIcon='trash-2'
                        secondTrailingIconAction={() => {
                            deleteItemFromList(item)
                        }}
                    />
                )}
                ItemSeparatorComponent={() => <View style={{ width: '100%', height:8 }}></View>}
                ListEmptyComponent={<Disclaimer>Ops... Essa lista ainda não tem itens :(</Disclaimer>}
            ></FlatList>
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
            saveItem={saveItemIntoList}
            inputPlaceholder='Insira seu texto aqui...'
            closeAction={() => {
                setShowBottomSheet(false)
            }}
        />}
    </View>
  )
}