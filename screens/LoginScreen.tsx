import { View, Text, Image , StyleSheet, ImageBackground, Dimensions, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../shared/globalStyles'
import TextInputLeftIcon from '../shared/TextInputLeftIcon'
import ImageButton from '../shared/ImageButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from '../RootParamList'

const {height}=Dimensions.get('window')

const LoginScreen = (props:NativeStackScreenProps<RootParamList, 'login'>) => {

    const navigation = props.navigation

    const navigateToForgot=()=>{
        navigation.navigate('forgotPassword', {username:'rindra'})
    }

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
                <TouchableOpacity style={styles.forgot} onPress={navigateToForgot}>
                    <Text style={styles.blueBold}>forgot?</Text>
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
        marginTop:0,
        alignItems:'center',
        flex:1,
      }}>
        <Text style={[
            globalStyles.boldLabel,
            {
                fontSize:18,
                color:'#6d6d6e',
            },
        ]}>Or</Text>
        <View style={{
            flexDirection:'row',
        }}>
            <ImageButton source={require("../images/google.png")} style={{marginRight:15}}/>
            <ImageButton source={require("../images/facebook.png")}/>
        </View>
        <View style={{
            marginTop:10,
            flexDirection:'row',
        }}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity style={{marginLeft:5}} onPress={()=>navigation.navigate('register')}>
                <Text style={styles.blueBold}>Sign up</Text>
            </TouchableOpacity>
        </View>
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
    },
    blueBold:{             
        fontWeight:'bold',
        color:'#1198f7'
    }
})

export default LoginScreen