import { View, Text,Image ,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = (props) => {

const [tokens,Settokens]=useState('')

useEffect(()=>{

getdetails()

},[])

console.log("tok"+tokens)

const getdetails=async()=>{
   Settokens(await AsyncStorage.getItem('token'))
}



const navigation = useNavigation()
    let [fontsLoaded] = useFonts({
     
     
        'RobotoCondensed-Bold':require('../assets/fonts/RobotoCondensed-Bold.ttf'),
        'NunitoSans-Bold':require('../assets/fonts/NunitoSans-Bold.ttf'),
   
      
      });
      
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    

  return (
<> 
{/* 
     <Text style={{marginTop:"10%",alignSelf:'center',fontSize:32,fontFamily:"RobotoCondensed-Bold"}}>Pure Spiruline</Text>
     */}
      <Image source={require('../assets/images/128.png')} style={{height:100,width:120,alignSelf:'center',justifyContent:'center',marginTop:"10%",resizeMode:'contain'}}/>
  

  
    <DrawerContentScrollView {...props}
    contentContainerStyle={{backgroundColor:"#fff",color:'#fff'}}
    >
  <DrawerItemList {...props}
 
  />

    </DrawerContentScrollView>


{tokens==='null'?
    <Pressable onPress={()=>navigation.navigate('Login')}>
<Text style={{fontSize:20,fontWeight:"600",alignSelf:'center',marginBottom:20}}>Login</Text>

</Pressable>
:<Text></Text>
}
<View style={{flexDirection:'row',justifyContent:'center'}}>



<Text style={styles.texttitle} onPress={()=>navigation.navigate('ReturnExchange')}>Return&Exchange</Text>
<Text style={[styles.texttitle,{marginLeft:"2%"}]} onPress={()=>navigation.navigate('Trackmyorder')}>|Track My Order</Text>




</View>

<View style={{flexDirection:'row',marginTop:"5%",justifyContent:'center',marginLeft:"0%"}}>


<Text style={styles.texttitle} onPress={()=>navigation.navigate('ShippingDelivery')}>Shipping&delivery</Text>


<Text style={[styles.texttitle,{marginLeft:"2%"}]}  onPress={()=>navigation.navigate('Termandcondition')}>|Terms&condition</Text>


</View>

    <View>
<Text style={{color:'darkgreen',fontFamily:"NunitoSans-Bold",fontSize:16,marginTop:"3%",marginBottom:"4%"}}>{`      contact@purespiruline.com`}</Text>



    </View>
{/* <View style={{flexDirection:'row',marginTop:"6%",marginBottom:10,marginLeft:"9%"}}>
  

    <Text style={{fontFamily:"NunitoSans-Bold"}}>{`PURE SPIRULINA KC Organics International Limited 3rd Floor 207  Regent Street London
Great London UK W1B 3HH`}</Text>
</View> */}
    </>

  )

}


const styles = StyleSheet.create({
  texttitle:{
    fontSize:15.5,
    fontWeight:'bold',
    color:'#d3d3d3',
    textDecorationLine:'underline'
  }
})
export default CustomDrawer