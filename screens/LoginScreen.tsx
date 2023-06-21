import { View, Text, Image , StyleSheet, ImageBackground, Dimensions, Button, TouchableOpacity} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/core'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../shared/globalStyles'
import TextInputLeftIcon from '../shared/TextInputLeftIcon'

const {height}=Dimensions.get('window')

const LoginScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown:false
      })
    
    }, [])

  return (
    <SafeAreaView style={styles.view}>
      <View>
        <ImageBackground
            source={require("../images/login.jpg")}
            style={styles.image}
            resizeMode='contain'
        />

        <View style={styles.loginView}>
            <Text style={globalStyles.boldLabel}>Login here</Text>
            <TextInputLeftIcon 
                name='email' 
                placeholder='Your email'/>
            <View style={styles.password}>
                <TextInputLeftIcon 
                    name='lock-closed-outline'
                    placeholder='Your password'
                    autoCorrect={false}
                    secureTextEntry
                    />
                <TouchableOpacity style={styles.forgot}>
                    <Text style={{             
                        fontWeight:'bold',
                        color:'#1198f7'
                    }}>forgot?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{
                padding:10,
                backgroundColor:'#1198f7',
                marginTop:10,
                alignItems:'center',
                borderRadius:10
            }}>
                <Text style={{
                    color:'white', 
                    fontSize:16
                    }}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={{
        marginTop:7,
        alignItems:'center'
      }}>
        <Text style={[
            globalStyles.boldLabel,
            {
                fontSize:20,
                color:'#6d6d6e',
            },
        ]}>Or</Text>
      </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#fff'
    },
    image:{
        height:height/2.5,
        marginTop:30
    },
    loginView:{
        paddingVertical:10,
        paddingHorizontal:35
    },
    password:{
        position:'relative'
    },
    forgot:{
        position:'absolute',
        right:0,
        bottom:8,
    }
})

export default LoginScreen