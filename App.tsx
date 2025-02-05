import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { List } from './src/screens/List';

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
        <View style={styles.container}>
          <List />
          <StatusBar style="light" backgroundColor='transparent' translucent />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
