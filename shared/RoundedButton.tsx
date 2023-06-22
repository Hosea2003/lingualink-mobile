import { View, Text, TouchableOpacityProps, TouchableOpacity } from 'react-native'
import React from 'react'

type RoundedButtonProps={
    text:string
}&TouchableOpacityProps

const RoundedButton = ({text, style, ...props}:RoundedButtonProps) => {
  return (
    <TouchableOpacity style={[{
        backgroundColor:'#1198f7',
        padding:10,
        alignItems:'center',
        borderRadius:10
    }, style]} {...props}>
      <Text style={{fontSize:16, fontWeight:'bold', color:'white'}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default RoundedButton