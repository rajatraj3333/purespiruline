import { View, Text,FlatList,SafeAreaView,StyleSheet,Dimensions,TouchableOpacity,Image} from 'react-native'
import React,{useState,useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartContext } from '../../context/Cart';
import {SimpleLineIcons} from '@expo/vector-icons'
import {MaterialIcons} from '@expo/vector-icons'
import { useEffect } from 'react';
const AllCart = () => {



    const [DATA,SETDATA]=useState()
 
    const {inc,getdata,dec,DELETE} = useContext(CartContext)   

useEffect(()=>{
 

},[]) 
 
getdata().then((ele)=>SETDATA(ele))
  


// const CLEAR=async()=>{


//     await AsyncStorage.removeItem('cart')
//     console.log('DATA REMOVED...')
//    }

//    CLEAR()

//console.log(DATA)



  return (
      DATA===null?<Text>Cart Empty</Text>:
<FlatList
data={DATA}


renderItem={({item})=>(
   
 
  <>
  <SafeAreaView>

<View style={styles.wrapper}>
 
  <Image style={styles.image} source={require('../../assets/images/icons/new-products.png')}/>
 
 <View style={styles.rightcontainer}>
 <Text  style={{fontFamily:"TitilliumWeb-Regular",fontWeight:"bold",fontSize:20 }}numberOfLines={Dimensions.get('screen').height>850?5:2}>{item.productname}</Text>
 <Text style={{marginLeft:"0%",color:"#353839",fontFamily:"TitilliumWeb-Regular",fontWeight:"600",fontWeight:"600",fontSize:15}} numberOfLines={1}>{`${item.description}`}</Text>
 
<Text style={styles.price}>{` €${item.productprice}`}</Text> 



<View style={{flexDirection:'row',marginLeft:85,marginTop:25}}>
<SimpleLineIcons name='minus' onPress={()=>dec(item.id)}  size={18} style={{color:'red',marginRight:8,marginTop:"-18%"}}/>
<Text style={{fontSize:22,marginTop:"-3%",fontWeight:'bold',marginLeft:5,fontFamily:"TitilliumWeb-Regular",marginTop:"-22%"}}>{item.productquantity}</Text>

<SimpleLineIcons name='plus'  onPress={()=>inc(item.id)}   size={18} style={{color:'green',marginLeft:12,marginTop:"-18%"}}/>



<MaterialIcons name='delete' onPress={()=>DELETE(item.id)} size={25} style={{marginTop:"-20.5%",marginLeft:"15%"}}/>
<TouchableOpacity>
{/* <Text style={{alignSelf:'center',marginLeft:"35%",padding:8,borderWidth:1,borderColor:'darkred',borderRadius:4,color:'darkred',marginTop:"-2.5%"}}>Delete</Text> */}


</TouchableOpacity> 


</View>


 </View>
</View>
</SafeAreaView>
</>
)
}
/>

  )
}




const styles = StyleSheet.create({


    wrapper:{
  margin:5,
  height:Dimensions.get('screen').height>850?Dimensions.get('screen').height*14/100:Dimensions.get('screen').height*18/100,
  borderWidth:1,
  borderColor:'#3333',
  backgroundColor:'#fff',
  flexDirection:'row',
  borderRadius:15,
  elevation:4.5
    },
  
  image:{
  width:150,
  height:Dimensions.get('screen').height>850?130:100,
  resizeMode:'contain',
  marginTop:10,
  borderRadius:10
  },
  rightcontainer:{
    marginTop:10,flex:1,
    marginLeft:Dimensions.get('screen').height>850?13:0,
    fontFamily:"Quicksand-Regular"
  },
  price:{
  
  
    color:'#989898',
    marginTop:6,
    fontSize:18.5,
  
    fontWeight:'800',
    fontFamily:"NunitoSans-Bold",
    color:'#dc143c'
  
  },
  
  })





export default AllCart