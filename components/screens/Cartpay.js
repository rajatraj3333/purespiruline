import { View, Text } from 'react-native'
import React, { useEffect,useState,useContext } from 'react'
import { CartContext } from '../../context/Cart';

import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Cartpay = () => {

    useEffect(()=>{
        getdata()

    },[])

const [Cart,SetCart]=useState('')
    const route = useRoute()
    route.params.total
    const getdata=async()=>{
        const data= JSON.parse(await AsyncStorage.getItem('cart'))
         SetCart(data)
    }

    console.log(Cart)
    




//     const [DATA,SETDATA]=useState()
 
//     const {getdata} = useContext(CartContext)   


//     // useEffect(()=>{

//     // })

    
    
//     getdata().then((ele)=>SETDATA(ele))
  

// console.log(DATA)

  return (
    <View>
      <Text>{ route.params.total}</Text>
    </View>
  )
}

export default Cartpay