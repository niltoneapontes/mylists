import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Home() {
  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: '#212029' }}>
        <View style={{ flex: 1, width: '100%', padding: 16, paddingTop: 100, backgroundColor: '#212029' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 32, color: '#FFFFFF', marginBottom: 24 }}>Minhas listas</Text>
            <View style={{ width: '100%', height: 52, backgroundColor: '#2B2A33', justifyContent: 'center', padding: 16, borderRadius: 8 }}>
                <Text style={{ fontWeight: 'regular', fontSize: 20, lineHeight: 20, color: '#FFFFFF' }}>Lista de compras</Text>
            </View>
        </View>
        <View style={{ width: '100%', minHeight: 300, padding: 16, backgroundColor: '#343342', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
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
