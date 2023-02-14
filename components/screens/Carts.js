import { View, Text } from 'react-native'
import React  from 'react'
import Cartcontext from '../Auth/Cartcontext'
const Carts = () => {

    const {ADD} =React.useContext(Cartcontext)
    ADD()
  return (
    <View>
      <Text>Carts</Text>
    </View>
  )
}

export default Carts