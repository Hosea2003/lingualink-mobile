import { View, Text, TextInput , StyleSheet, TextInputProps} from 'react-native'
import React from 'react'
import {Ionicons, Entypo, MaterialIcons} from '@expo/vector-icons'

type TextInputLeftIconProps={
    name:keyof typeof Ionicons["glyphMap"] | keyof typeof Entypo["glyphMap"] | keyof typeof MaterialIcons["glyphMap"]
}&TextInputProps

const TextInputLeftIcon = (props:TextInputLeftIconProps) => {

  const isIonicon=props.name in Ionicons.glyphMap
  const name =props.name

  return (
    <View style={styles.container}>
        {isIonicon ? (
          <Ionicons name={name as keyof typeof Ionicons.glyphMap} size={25} color={"#cfdce8"}/>
        ): (
          <Entypo name={name as keyof typeof Entypo.glyphMap} size={25} color={"#cfdce8"}/>
        )}
        <TextInput 
          style={styles.input}
          {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'baseline',
    borderBottomWidth:1,
    borderBottomColor:'#cfdce8',
    paddingBottom:5
  },
  input:{
    flex:1,
    marginLeft:5,
    height:40,
    fontSize:16,
    textAlignVertical:'bottom'
  }
})

export default TextInputLeftIcon