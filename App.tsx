import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { List } from './src/screens/List';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';

export default function App() {
  return (

      <SafeAreaView 
        style={{
          flex: 1,
          backgroundColor: '#212029',
        }}
      >
        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
          >
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
            <StatusBar style="light" backgroundColor='transparent' translucent />
        </KeyboardAvoidingView>
      </SafeAreaView>

  );
}