import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import TextInputLeftIcon from './TextInputLeftIcon'
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker'

type DatePickerInputProps={
    placeholder?:string
    minDate?:Date
}

const DatePickerInput = ({placeholder, ...props}:DatePickerInputProps) => {

  const todayYear = new Date()

  const [date, setDate]=useState(props.minDate ? props.minDate:new Date())
  const [show, setShow]=useState(false)

  const togglePicker=()=>{
    setShow(!show)
  }

  const onChange=(event:DateTimePickerEvent, selectedDate?:Date)=>{
    const type = event.type
    if(type=="set"){
      selectedDate && setDate(selectedDate)
      togglePicker()
    }
  }

  return (
    <View>
      <Pressable onPress={()=>togglePicker()}>
        <TextInputLeftIcon name='date-range' placeholder={placeholder} editable={false}
          value={date.toDateString()}/>
      </Pressable>
      {show && <DateTimePicker 
          mode='date' 
          minimumDate={date} 
          value={date}
          onChange={(event, selectedDate)=>onChange(event, selectedDate)}
          />}
    </View>
  )
}

export default DatePickerInput