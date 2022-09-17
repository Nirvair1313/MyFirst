import { View, Text,FlatList } from 'react-native'
import React from 'react'
import HeaderTab from './HeaderTab'
import Te from './Te'
import Fs from './Fs'

export default function DB() {
  return (
    <View>
    
      <HeaderTab />
      <Te/>
          <Fs/>
    </View>
  )
}