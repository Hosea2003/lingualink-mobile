import { View, Text, TouchableOpacity, Image, ImageSourcePropType, StyleProp, ViewStyle } from 'react-native'
import React from 'react'

type ImageButtonProps={
    onPress?:()=>void,
    source:ImageSourcePropType,
    style?:StyleProp<ViewStyle>
}

const ImageButton = ({source, ...props}:ImageButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[{
        width:60,
        height:60,
        borderRadius:15,
        elevation:2,
        padding:10,
        shadowColor:'#676869',
        shadowRadius:5,
        shadowOffset:{width:0, height:0},
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }, props.style]}>
        <Image source={source} style={{
            width:'100%',
            height:undefined,
            aspectRatio:1
        }}/>
    </TouchableOpacity>
  )
}

export default ImageButton