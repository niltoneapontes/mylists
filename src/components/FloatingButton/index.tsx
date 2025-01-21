import { Text, TextProps, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

export function FloatingButton({ children }: TextProps) {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.content}>{children}</Text>
    </TouchableOpacity>
  )
}