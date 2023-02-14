import React, { Component,useEffect,useState,useContext } from 'react';
import { View,Text,Image ,FlatList,Dimensions,Button,TouchableOpacity,SafeAreaView,StyleSheet,Pressable} from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';
const ItemContainerHeight = Dimensions.get('screen').height;
const ItemContainerWidth = Dimensions.get('screen').width;
import { CartContext } from '../../context/Cart';
import CartDetails from './CartDetails';
import AllCart from './AllCart';
import { CartProvider } from '../../context/Cart';
import Cartpay from './Cartpay';







const DecreaseQuant=(quantity)=>{

  quantity.push(quantity+1);

}
   

// const Item = ({ title,url ,price,stockdetails,Quantity,SetQuantity,quantity}) => (

//   <>
//   <SafeAreaView>

// <View style={styles.wrapper}>
//   <Image style={styles.image} source={url}/>
//  <View style={styles.rightcontainer}>
//  <Text  style={{fontFamily:"TitilliumWeb-Regular",fontWeight:"400",fontSize:15.8 }}numberOfLines={Dimensions.get('screen').height>850?5:2}>{title}</Text>

// <Text style={styles.price}>{` €${price}`}</Text>
// <View style={{flexDirection:'row',marginLeft:5}}>
// <Pressable onPress={()=>{}}><SimpleLineIcons name='minus'  size={18} style={{marginTop:8,color:'red',marginLeft:5}}/></Pressable>
// <Text style={{fontSize:18,marginTop:"1.5%",marginLeft:5,fontFamily:"TitilliumWeb-Regular"}}>{quantity}</Text>

// <Pressable onPress={()=>  quantity.push(quantity+1)}><SimpleLineIcons name='plus' size={18} style={{marginTop:8,color:'green',marginLeft:5}}/>
// </Pressable>
// <TouchableOpacity>
// <Text style={{alignSelf:'center',marginLeft:"35%",padding:8,borderWidth:1,borderColor:'darkred',borderRadius:4,color:'darkred',marginTop:"-2.5%"}}>Delete</Text>
// </TouchableOpacity>


// </View>

 
//  </View>
// </View>
// </SafeAreaView>
// </>

//   );
  

const  Cart=({navigation})=> {









//DATA.forEach((ele)=>console.log(ele.productprice))

 // console.log(DATA)


//Calculatetotalprice()





  // const DECERASE=async(id)=>{

  //   const value = JSON.parse(await AsyncStorage.getItem('cart'))
  //   let decarray 
  //   const val =value.filter((ele)=>ele.id===id)
  //   let newdata
  //   let decquant
  //   let check =false
  //    val.map((ele)=>decquant=ele.productquantity>0?ele.productquantity-1:check=true)
  //   //console.log("quant"+decquant)
  //   val.forEach((ele)=>{
     
     
  //    newdata= {id:ele.id,productname:ele.productname,productprice:ele.productprice,productquantity:decquant,description:ele.description}
    
  //    //console.log("proqu"+ele.productquantity+1)
  //   })
  //   if(check) {
    
  //   const delval= value.filter((ele)=>ele.id!=id)
    
  //     decarray=[...delval] 
  //     await AsyncStorage.setItem('cart',JSON.stringify(decarray))
    
    
  //   SETDATA(decarray)
  //     // decarray=[...oldvalue] 
  //     // await AsyncStorage.setItem('cart',JSON.stringify(decarray))
     
  //     navigation.navigate('Cart')
  //   }  
     
  //   else{
  //   const oldvalue =value.filter(ele=>ele.id!=id)
    
  //    decarray = [...oldvalue,newdata]
    
  //   //console.log(decarray)
  //    await AsyncStorage.setItem('cart',JSON.stringify(decarray))
  //    SETDATA(decarray)
  //    navigation.navigate('Cart')
  //   }
  //   }
    


  //   const INCREASE=async(id)=>{

    
  //     }
      



  
  // const [Quantity,SetQuantity] =useState(1)

  let [fontsLoaded] = useFonts({
    'RobotoCondensed-Regular': require('../../assets/fonts/RobotoCondensed-Regular.ttf'),
    'Dosis-Light':require('../../assets/fonts/Dosis-Light.ttf'),
    'TitilliumWeb-Light':require('../../assets/fonts/TitilliumWeb-Light.ttf'),
    'TitilliumWeb-Regular':require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
    'Quicksand-Regular':require('../../assets/fonts/Quicksand-Regular.ttf'),
    'NunitoSans-Bold':require('../../assets/fonts/NunitoSans-Bold.ttf')
    

  });
       
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // const renderItem = ({ item }) => (

  //   <Item title={item.title} url={item.url}  price={item.price} stockdetails={item.stockdetails} Quantity={Quantity} SetQuantity={SetQuantity} quantity={item.quantity} />
  // );


    return (
      <>
<CartProvider>
<CartDetails/>
<AllCart/>

</CartProvider>



</>

    );
  
}








export default Cart













// const ButtonText = styled.Text`
// flex-direction:row;

// fontSize:26;
// background-Color:palevioletred;
// padding:8px;
// borderRadius:6px;
// alignSelf:flex-start;
// margin-right:6%;
// color:white;

// margin-right:10%;
// `;

// const DescTitle= styled.Text`
// flex-direction:row;
// font-size:16px;
// font-family:Quicksand-Regular
// width:50%;



// `;






















// <View style={{ marginTop: 50,flexDirection:'row' ,flexWrap:'nowrap'}}>
 
// <Image  source={url} style={{height:120,width:140,resizeMode:"contain"}}/>

// <DescTitle>{title}</DescTitle>

// <ButtonText>Delete</ButtonText>  
// <SimpleLineIcons name='minus' size={21} style={{color:'red',padding:5,marginLeft:'25%'}}/>

// </View>

{/* <SimpleLineIcons name='minus' size={21} style={{color:'red',padding:5}}/><Text style={{color:'red',fontSize:26,marginLeft:80,marginTop:60}}>1</Text><Ionicons name='add-circle-outline'size={26} style={{marginLeft:280,color:'green',marginTop:50}}/> <View style={{borderWidth:1.2,borderRadius:5,borderColor:'indianred',backgroundColor:'white',marginLeft:25}}><Text style={{fontSize:21,marginTop:25}}>Delete</Text></View> 
*/}
