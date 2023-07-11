import { View, ImageBackground, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ImageButton from '../shared/ImageButton'
import { globalStyles } from '../shared/globalStyles'
import TextInputLeftIcon from '../shared/TextInputLeftIcon'
import RoundedButton from '../shared/RoundedButton'
import DatePickerInput from '../shared/DatePickerInput'

const {height}=Dimensions.get('window')


const RegisterScreen = () => {

    const today=new Date()
    const minBirthday=new Date(today.getFullYear()-12, today.getMonth(), today.getDay())

  return (
    <View style={{
        flex:1,
        backgroundColor:'white'
    }}>
      <ImageBackground source={require('../images/login.jpg')} resizeMode='contain'
        style={{
            height:height/3.5,
        }}/>
        <View style={{paddingVertical:15, alignItems:'center', paddingHorizontal:30, flex:1}}>
            <Text style={[globalStyles.boldLabel, {fontSize:18}]}>Register with</Text>
            <View style={{flexDirection:'row'}}>
                <ImageButton source={require("../images/google.png")} style={{marginRight:15}}/>
                <ImageButton source={require("../images/facebook.png")}/>
            </View>
            <Text style={[
                globalStyles.boldLabel,
                {
                    fontSize:18,
                    color:'#6d6d6e',
                    marginTop:5
                },
            ]}>Or</Text>
            {/* register */}
            <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
                <TextInputLeftIcon name='email' placeholder='Your email'/>
                <TextInputLeftIcon name='user' placeholder='Username'/>
                <TextInputLeftIcon name='lock-closed-outline' placeholder='Password' secureTextEntry/>
                <TextInputLeftIcon name='lock-closed-outline' placeholder='Confirm' secureTextEntry/>
                <TextInputLeftIcon name='user' placeholder='First name'/>
                <TextInputLeftIcon name='user' placeholder='Last name'/>
                <DatePickerInput placeholder='Birthdate'
                    minDate={minBirthday}/>
                <RoundedButton text='Register' style={{marginTop:10}}/>    
            </ScrollView>
        </View>
    </View>
  )
}

export default RegisterScreen