import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState } from 'react'

export default function CounterScreen() {
    const [count, setCount] = useState(0);
  return (
    <View>
        <Button title="Increase" onPress={()=>{
            setCount(count+1)
        }} />
        <Button title="Decrease" onPress={()=>{
            setCount(count-1)
        }} />
        <Text>Current Count: {count} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})