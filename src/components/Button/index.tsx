import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { styles } from './styles'

export function Button({ children, onPress }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.content}>{children}</Text>
    </TouchableOpacity>
  )
}