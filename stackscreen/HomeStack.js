import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from  '@react-navigation/stack'

import Billing from '../components/address/Billing'
import Accountdetails from '../components/address/Accountdetails'
const HomeStack = () => {

const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
    <Stack.Screen name='Billing' component={Billing}/>
    <Stack.Screen name='Accountdetails' component={Accountdetails}/>
    </Stack.Navigator>
  )
}

export default HomeStack