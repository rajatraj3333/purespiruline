import { View, Text ,StyleSheet, Dimensions,Image,BVLinerGradient} from 'react-native'
import React,{useState,useEffect, useContext} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import { useFonts } from '@expo-google-fonts/inter'
import AsyncStorage from '@react-native-async-storage/async-storage'
import testcheck from '../Auth/Async/Gettoken'
import Authcontext from './Authcontext'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const {width,height}=Dimensions.get('window')
const Profile =  () => {



  const route = useRoute()


const username = route.params.username
const email = route.params.email


  const {reterivetoken}= React.useContext(AuthContext)
  let token = reterivetoken()
  

  const {Signout} = React.useContext(Authcontext)



// console.log("profiles"+token)
   const navigation =useNavigation()
 

  const  signout=async()=>{
    await  AsyncStorage.setItem('token','null')
    await  AsyncStorage.setItem('user_name','null')
    await  AsyncStorage.setItem('user_email','null')
  
    Signout()
    navigation.navigate('Homescreen')
  }



 
let [fontsLoaded] = useFonts({
     
  'PTSerif-Regular':require('../../assets/fonts/PTSerif-Regular.ttf'),
  'Quicksand-Regular':require('../../assets/fonts/Quicksand-Regular.ttf'),
  'RobotoCondensed-Regular':require('../../assets/fonts/RobotoCondensed-Regular.ttf'),
  'RobotoCondensed-Bold':require('../../assets/fonts/RobotoCondensed-Bold.ttf'),
  'TitilliumWeb-Regular':require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
  'NunitoSans-Bold':require('../../assets/fonts/NunitoSans-Bold.ttf')


});

if (!fontsLoaded) {
  return <AppLoading />;
}

  return (
    <>
    <View style={styles.root}>

    
    <View style={styles.circle}>

    <View style={styles.circle2}>
 <Image style={styles.img} source={require('../../assets/images/icons/pexels-pixabay-415829.jpg')}/>
      </View>
    

    </View>

    <View style={{alignSelf:'center'}}>
      <Text style={{marginTop:"2%",fontSize:30,fontFamily:'NunitoSans-Bold',alignSelf:'center'}}>Admin</Text>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <Text style={{alignSelf:'flex-start',width:5,height:5,borderRadius:50,borderWidth:1,borderColor:'darkgreen',backgroundColor:'darkgreen',marginTop:20}}></Text><Text style={{marginTop:12,fontSize:12,marginLeft:15,fontFamily:'NunitoSans-Bold'}}>Active Status</Text>
    
    </View>
      
    </View>
    <View>
   
    </View>
   
    <LinearGradient 
        // Button Linear Gradient
        colors={['#ffff','#c0c0c0','#c0c0c0']}
        style={styles.info}>
     <View style={{flexDirection:'row',marginTop:"5%",marginLeft:'7.5%'}}>
  <MaterialCommunityIcons name='shopping' size={20} color='#a9a9a9'style={{alignSelf:'center'}}/>
    
      <Text style={{fontSize:19.5 ,color:'#100c08',padding:10,fontFamily:'NunitoSans-Bold',marginLeft:"6.5%"}} onPress={()=>navigation.navigate('Billing',{username,email})}>Your Order</Text>
    
      <Text style={{alignSelf:'center',fontSize:20,color:'#696969',marginLeft:"48%"}}>></Text>
      <Text></Text>
      </View>      
        

      <View style={{flexDirection:'row',marginTop:"5%",justifyContent:'space-around',marginLeft:'4%'}}>
  <Ionicons name='location-sharp' size={20} color='#a9a9a9'style={{alignSelf:'center'}}/>
    
      <Text style={{fontSize:19.5 ,color:'#100c08',fontFamily:'NunitoSans-Bold',padding:10}}>Address</Text>
      <Text style={{alignSelf:'center',fontSize:20,color:'#696969',marginLeft:"45%"}}>></Text>
      </View>      
 
      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:"5%",marginLeft:'4%'}}>
  <MaterialIcons name='receipt-long' size={20} color='#696969'style={{alignSelf:'center'}}/>
    
      <Text style={{fontSize:19.5 ,color:'#100c08',padding:10,fontFamily:'NunitoSans-Bold'}} onPress={()=>navigation.navigate('Billing',{username,email})}>Billing</Text>
    
      <Text style={{alignSelf:'center',fontSize:20,color:'#696969',marginLeft:"49%"}}>></Text>
      </View>      
      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:"5%",marginLeft:'5%'}}>
  <MaterialCommunityIcons name='logout' size={20} color='#696969'style={{alignSelf:'center'}}/>
    
      <Text style={{fontSize:19.5 ,color:'#100c08',padding:10,fontFamily:'NunitoSans-Bold',marginRight:"3%"}} onPress={()=>signout()}>Logout</Text>
    
      <Text style={{alignSelf:'center',fontSize:20,color:'#696969',marginLeft:"45%"}}>></Text>
      </View>      
     


      </LinearGradient>




      </View>
    
    </>
 )
}




const styles= StyleSheet.create({
  
  root:{

    backgroundColor:'#fff',
height:height
  },

circle:{
  alignSelf:'center',
    marginTop:"4%",
    width: 200,
    height: 200,
    borderRadius:98,
    borderBottomWidth:0.2,
flexDirection:'row',
borderTopWidth:0.2,
    borderWidth:1.2,
    borderColor:'#bbb4e7',
    justifyContent:'center'
},

  circle2:{

    alignSelf:'center',
   // marginTop:"20%",
    width: 150,
    height: 150,
    borderRadius:85,
flexDirection:'row',
    borderWidth:1.5,

    borderColor:'#aba1e5',
    justifyContent:'center'
  //  backgroundColor:'red'
  },
  img:{
    width: 130,
 
alignSelf:'center',
//alignItems:'center',
 // justifyContent:'center',
    height: 125, 
    borderRadius:85,

  
  },
  info:{
    width:width,
    height:height,
   // backgroundColor:'#d3d3d3',
    marginTop:'2.5%'
  }
})
export default Profile