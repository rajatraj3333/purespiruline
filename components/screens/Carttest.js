import { View, Text,Button } from 'react-native'
import React, { createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Carts from './Carts'

 const CartContext = createContext()


 const Carttest = () => {



//console.log(cartState.productprice)
  return (
    <CartContext.Provider value={cartContext}>
<Carts/>
    </CartContext.Provider>
   

  )
}

export default Carttest