import { View, Text, TextProps } from 'react-native'
import React from 'react'
import { styles } from './styles'

export function Item({ children }: TextProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.content}>{children}</Text>
    </View>
  )
}