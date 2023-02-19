import { View, Text ,StyleSheet,Dimensions} from 'react-native'
import React, { useContext } from 'react'
const ItemContainerHeight = Dimensions.get('screen').height;
const ItemContainerWidth = Dimensions.get('screen').width;


import { CartContext } from '../../context/Cart';
import { useState } from 'react';
import { useEffect } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';

const CartDetails = () => {

const navigation = useNavigation()

useEffect(()=>{
    fet()

})

 const {totalcal,inc} = useContext(CartContext)   
 //console.log(inc())
const [total,Settotal]=useState('')
 
 const fet=async()=>{
     let totalprice
    totalprice=await totalcal()
    Settotal(totalprice)

}
let fi =total*5/100
let fi2 =total-fi

  return (
<View style={styles.priceandDiscount}>

<View style={styles.amount}>
<Text style={{fontSize:20.5,fontFamily:"TitilliumWeb-Regular",color:'#333',paddingLeft:10}}>Amount-</Text>
<Text style={{fontSize:18.5,fontFamily:"TitilliumWeb-Regular",color:'darkseagreen',paddingRight:10}}>{`€${total}`}</Text>


</View>


<View style={styles.amount}>
<Text style={{fontSize:20.5,fontFamily:"TitilliumWeb-Regular",color:'#333',paddingLeft:10}}>Discount-</Text>
<Text style={{fontSize:18.5,fontWeight:"600",fontFamily:"TitilliumWeb-Regular",color:'darkred',paddingRight:10}}>{`€${total*5/100}`}</Text>

</View>

<View style={styles.amount}>
<Text style={{fontSize:20.5,marginTop:11,fontWeight:"bold",fontFamily:"TitilliumWeb-Regular",paddingLeft:10}}>Total-</Text>
<Text style={{fontSize:20,fontWeight:"bold",marginTop:11,fontFamily:"TitilliumWeb-Regular",color:'#333',paddingRight:10}}>{`€${fi2}`}</Text>


</View>
<Pressable onPress={()=>navigation.navigate('Cartpay',{total:total})}>
<View style={styles.cartbtn} >
<Text style={styles.cartbtnText} >Place Your Order</Text>
</View>
</Pressable>

{/* 
<Text style={{fontSize:24,fontFamily:"TitilliumWeb-Regular",color:'#333',fontFamily:'bold'}}>$121</Text> */}

    </View>  
  )
}

const styles= StyleSheet.create({



    priceandDiscount:{

        justifyContent:'space-evenly',
        padding:12,
        paddingBottom:19,
        backgroundColor:'#ffff',
      height:ItemContainerHeight*0.175,
        margin:8,
        borderRadius:3
      },
      amount:{
        flexDirection:'row',
        justifyContent:'space-between'
      },
      cartbtn:{
      flexDirection:'row',
      padding:4,
      marginTop:20,
      paddingLeft:10,
      paddingRight:10,
      //width:ItemContainerWidth*0.3,
      borderRadius:5,
      alignSelf:'center',
      backgroundColor:'#61CE70',
      marginTop:3,
      
      },
      cartbtnText:{
        color:'white',
      alignSelf:'center',
       
      //marginLeft:ItemContainerWidth*0.055,
        padding:2,
        fontSize:17.5,
        fontFamily:"RobotoCondensed-Regular",
        justifyContent:'center',
        fontWeight:'bold'
      }
      





})

export default CartDetails