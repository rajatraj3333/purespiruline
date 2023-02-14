import React, { useEffect,useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Success() {

  const route = useRoute();
  const [value,Setvalue]= useState('')
const navigation= useNavigation()
console.log(route.params.item)

console.log(route.params.add)
const {id,filterimage,name,price}=route.params.item
const getdetails=async()=>{
  Setvalue(JSON.parse(await AsyncStorage.getItem('address')))
}


//console.log(route.params.item)
 if(route.params.payId&&route.params.token&&route.params.payerId) {
   console.log('data to be stored')
  const data = {

    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: true,
    billing: {
      first_name: value.username,
      last_name: value.username,
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: value.country,
      email: value.email,
      phone: "(555) 555-5555"
    },
    shipping: {
      first_name: "John",
      last_name: "Doe",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US"
    },
 
    line_items: [
      {
    
        name:String(name),
        price:String(price),
        product_id:id,
        quantity:1,
        total:String(price)
      }
   
    ],
    // shipping_lines: [
    //   {
    //     method_id: "flat_rate",
    //     method_title: "Flat Rate",
    //     total: "10.00"
    //   },
    //   {
       
    //   }
    // ]
  };









useEffect(()=>{

  axios.post('https://purespiruline.com/wp-json/wc/v3/orders/?/&consumer_key=ck_c8cb1b136820183c176844b843873d52be83a018&consumer_secret=cs_5bffc61431c151bb6bae817caaa662944d0fac60',data)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  });
  getdetails()
  setTimeout(()=>{
    navigation.navigate('Ordersucess')
  },2000)
},[])
  

//console.log(value)


 }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontWeight:'bold',fontSize:20,color:'darkgreen'}}>Payment Successfull</Text>
      <Text style={{marginTop: 10,fontWeight:"bold"}}> PaymentId - {route.params.payId}</Text>
      <Text style={{marginTop: 10,}}> token - {route.params.token}</Text>
      <Text style={{marginTop: 10,}}> payerId - {route.params.payerId}</Text>
     </View>
  );
}