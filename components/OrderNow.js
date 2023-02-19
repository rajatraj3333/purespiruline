import { View, Text, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import testcheck from './Auth/Async/Gettoken'
const OrderNow = ({navigation,route,test,data}) => {

  console.log("tokens"+data);

 
return(
<> 
{data!=null?<Text>{data}</Text>:<Text onPress={()=>navigation.navigate('Login')}>Login First</Text>}

</>
)
}

export default OrderNow