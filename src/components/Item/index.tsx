import { Text, TextProps, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import FeatherIcons from '@expo/vector-icons/Feather'
import Checkbox from 'expo-checkbox';

interface ItemProps extends TextProps {
  type: 'list' | 'list-item';
  text: string;
  onPress?: () => void;
  trailingIcon?: keyof typeof FeatherIcons.glyphMap;
  trailingIconAction?: () => void;
  secondTrailingIcon?: keyof typeof FeatherIcons.glyphMap;
  secondTrailingIconAction?: () => void;
}

export function Item({ type, text, onPress, trailingIcon, secondTrailingIcon, trailingIconAction, secondTrailingIconAction }: ItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={type === 'list-item'}>
        <View style={styles.textContainer}>
          {type === 'list-item' && <Checkbox style={styles.checkbox} value={false} onValueChange={() => {}} />}
          <Text style={styles.content}>{text}</Text>
        </View>
        <View style={styles.iconsContainer}>
          {trailingIcon && 
          <TouchableOpacity onPress={trailingIconAction} style={styles.icon}>
            <FeatherIcons name={trailingIcon} size={24} color={'#FFFFFF'} />
          </TouchableOpacity>}
          {secondTrailingIcon && <TouchableOpacity onPress={secondTrailingIconAction}>
            <FeatherIcons name={secondTrailingIcon} size={24} color={'#FFFFFF'} />
            </TouchableOpacity>}
        </View>
    </TouchableOpacity>
  )
}