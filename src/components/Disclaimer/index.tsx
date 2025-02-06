import React from 'react'
import { StyleSheet, Text } from 'react-native'

export function Disclaimer({ children }: { children: React.ReactNode }) {
  return (
    <Text style={styles.disclaimer}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    disclaimer: {
        fontSize: 20,
        fontWeight: 'regular',
        color: '#FFFFFF',
        width: '100%',
        textAlign: 'center'
    }
})