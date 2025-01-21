import { Text, TextProps, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

interface FloatingButtonProps extends TextProps {
    onPress: () => void;
    icon: React.JSX.Element;
}

export function FloatingButton({ onPress, icon }: FloatingButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        {icon}
    </TouchableOpacity>
  )
}