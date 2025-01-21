import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Title } from '../../components/Title'
import { Item } from '../../components/Item'

export default function Home() {
  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: '#212029' }}>
        <View style={{ flex: 1, width: '100%', padding: 16, paddingTop: 100, backgroundColor: '#212029' }}>
            <Title>Minhas listas</Title>
            <Item>Lista de compras</Item>
            <TouchableOpacity style={{ width: 72, height: 72, borderRadius: 36, backgroundColor: '#FFF59D', position: 'absolute', bottom: 36, right: 36, alignItems: "center", justifyContent: "center"}}>
                <Text style={{ fontWeight: 'bold', fontSize: 48, color: '#212029', textAlign: 'center', lineHeight: 48 }}>+</Text>
            </TouchableOpacity>
        </View>
        <View style={{ width: '100%', minHeight: 300, padding: 16, backgroundColor: '#343342', borderTopLeftRadius: 12, borderTopRightRadius: 12, position: 'absolute', bottom: 0, left: 0 }}>
            <Text style={{ position:'absolute', top: 16, right: 16, color: '#FFFFFF', fontSize: 24 }}>x</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#FFFFFF', marginVertical: 24 }}>Nova lista</Text>
            <TextInput style={{ width: '100%', height: 56, borderColor: '#FFFFFF', borderWidth: 1, borderRadius: 8, paddingLeft: 16}} placeholder='Insira o título da lista' placeholderTextColor={'#878787'}></TextInput>
            <TouchableOpacity style={{ width: '100%', height: 56, backgroundColor: '#FBC02D', borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginTop: 16}}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#212029' }}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
