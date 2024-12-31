import React from 'react'
import {  Text, View } from 'react-native'
import Login from '@/components/login'
import Register from '@/components/register'
import { Button, ButtonText } from '@/components/ui/button'

export default function userprofile() {
  return (
    <View>
        <Text>
        userprofile
        </Text>
        
        <Login/>
        <Register/>
        </View>
  )
}
