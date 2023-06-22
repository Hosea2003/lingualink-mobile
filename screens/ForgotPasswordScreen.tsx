import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import TextInputLeftIcon from '../shared/TextInputLeftIcon'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../RootParamList'

const {height}=Dimensions.get("window")

const ForgotPasswordScreen = (props:NativeStackScreenProps<RootParamList, 'forgotPassword'>) => {

  const navigation = props.navigation

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../images/login.jpg")} resizeMode='contain' style={{
        height:height/2.5,
        marginTop:30
      }}/>
      <View style={{
        marginTop:10,
        gap:10,
        padding:20
      }}>
        <Text style={{
          fontSize:20,
          fontWeight:'bold',
        }}>Forgot your password</Text>
        <TextInputLeftIcon name='email' placeholder='Your email here'/>
        <TouchableOpacity style={{
          padding:10,
          backgroundColor:'#1198f7',
          borderRadius:7,
          alignItems:'center',
        }}>
          <Text style={{fontSize:15, color:'#fff'}}>Send reset code</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('login')}>
          <Text style={{fontSize:15, color:'#a8a9ab', textAlign:'center'}}>Back to Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize:15, color:'#1198f7', textAlign:'center'}}>I have code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:StatusBar.currentHeight,
    backgroundColor:'#fff'
  }
})

export default ForgotPasswordScreen