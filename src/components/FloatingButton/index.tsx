import { Text, TextProps, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface FloatingButtonProps extends TextProps {
    onPress: () => void;
    label: string;
}

export function FloatingButton({ onPress, label }: FloatingButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.content}>{label}</Text>
    </TouchableOpacity>
  )
}