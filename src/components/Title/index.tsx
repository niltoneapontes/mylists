import { Text, TextProps } from 'react-native'
import React from 'react'
import { styles } from './styles'

export function Title({ children }: TextProps) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}