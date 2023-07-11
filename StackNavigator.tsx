import { View, Text } from 'react-native'
import React from 'react'
import  {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen'
import { RootParamList } from './RootParamList'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import { useAuth } from './hooks/useAuth'
const Stack = createNativeStackNavigator<RootParamList>()

const StackNavigator = () => {

  const {token}=useAuth()

  console.log(token)

  return (
    <Stack.Navigator>
      {!token? (
        <>
          <Stack.Screen name='login' component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name='forgotPassword' component={ForgotPasswordScreen} options={{headerShown:false}}/>
          <Stack.Screen name='register' component={RegisterScreen} options={{title:'Register here'}}/>
        </>
      ):(<>
          <Stack.Screen name='home' component={HomeScreen} options={{headerShown:false}}/>
      </>)}
      
    </Stack.Navigator>
  )
}

export default StackNavigator