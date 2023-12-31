import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import AuthProvider from './hooks/useAuth';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </AuthProvider>
  );
}
