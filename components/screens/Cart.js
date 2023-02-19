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
   

  

const  Cart=({navigation})=> {










  


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




