import { View, Text } from 'react-native'
import React,{createContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const CartContext=createContext()

export const CartProvider = ({children}) => {
const totalcal=async()=>{
let price = []
let data1
    data1=JSON.parse(await AsyncStorage.getItem('cart')) 
  
   price= data1.map((ele)=>ele.productprice*ele.productquantity)
   const initialValue = 0;
   const sumWithInitial = price.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

return sumWithInitial
}

const getdata=async()=>{
    const data= JSON.parse(await AsyncStorage.getItem('cart'))
    return data
}



const inc=async(id)=>{
    const value = JSON.parse(await AsyncStorage.getItem('cart'))
  //  console.log(value)
    let decarray 
    const val =value.filter((ele)=>ele.id===id)
    console.log(val)
    let newdata
    let decquant
    let check =false
     val.map((ele)=>decquant=ele.productquantity>0?ele.productquantity+1:check=true)
    //console.log("quant"+decquant)
    val.forEach((ele)=>{
     
     
     newdata= {id:ele.id,productname:ele.productname,productprice:ele.productprice,productquantity:decquant,description:ele.description}
    
     //console.log("proqu"+ele.productquantity+1)
    })
    if(check) {
    

    const delval= value.filter((ele)=>ele.id!=id)
    
      decarray=[...delval] 
      await AsyncStorage.setItem('cart',JSON.stringify(decarray))
    
    


  navigation.navigate('Cart')
    }  
     
    else{
    const oldvalue =value.filter(ele=>ele.id!=id)
    
     decarray = [...oldvalue,newdata,]
    
    //console.log(decarray)
     await AsyncStorage.setItem('cart',JSON.stringify(decarray))
   
 navigation.navigate('Cart')
    }













}

const dec=async(id)=>{

  const value = JSON.parse(await AsyncStorage.getItem('cart'))
  let decarray 
  const val =value.filter((ele)=>ele.id===id)
  let newdata
  let decquant
  let check =false
   val.map((ele)=>decquant=ele.productquantity>0?ele.productquantity-1:check=true)
  //console.log("quant"+decquant)
  val.forEach((ele)=>{
   
  
   newdata= {id:ele.id,productname:ele.productname,productprice:ele.productprice,productquantity:decquant,description:ele.description}
  
   //console.log("proqu"+ele.productquantity+1)
  })
  if(check) {
  
  const delval= value.filter((ele)=>ele.id!=id)
  
    decarray=[...delval] 
    await AsyncStorage.setItem('cart',JSON.stringify(decarray))
  
  
  
    // decarray=[...oldvalue] 
    // await AsyncStorage.setItem('cart',JSON.stringify(decarray))
  
  
  }  
  
  else{
  const oldvalue =value.filter(ele=>ele.id!=id)
  
   decarray = [...oldvalue,newdata]
  
  //console.log(decarray)
   await AsyncStorage.setItem('cart',JSON.stringify(decarray))
  }
  }


  const DELETE=async(id)=>{

    const value = JSON.parse(await AsyncStorage.getItem('cart'))
  
    const res=value.filter((ele)=>ele.id!=id)
  
  let afterremovearray = [...res]
  
  await AsyncStorage.setItem('cart',JSON.stringify(afterremovearray))
  
  
  }
  





  return (
 <CartContext.Provider value={{
    totalcal,
    getdata,
    inc,
    dec,
    DELETE

 }}>{children}</CartContext.Provider>
  )
}

