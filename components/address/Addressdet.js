import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect,useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useNavigation } from '@react-navigation/native'

const Addressdet = ({route}) => {

    let username = route.params.username
    let email= route.params.email
  
const navigation = useNavigation()

    const [value,Setvalue]= useState('')

    useEffect(()=>{
fetchdet()
    })

const fetchdet=async()=>{

    Setvalue(JSON.parse(await AsyncStorage.getItem('address')))
}


  return (
    <View style={styles.conatiner}>
        <View style={{alignSelf:'center'}}> 
        <Pressable onPress={()=>navigation.navigate('Address',{username,email})}>
    <Text  style={{textDecorationLine:"underline"}}>Edit</Text>
    </Pressable> 
      <Text style={{fontSize:24}}>{username}</Text>
      <Text style={{fontSize:20}}>{email}</Text>
      <Text style={{fontSize:20}}>{value.country}</Text>
      
      </View>
    </View>
  )
}


const styles= StyleSheet.create({


    conatiner:{
       padding:28,
        width:"85%",
        margin:5,
        backgroundColor:'#ffff',
        borderRadius:10,
        alignSelf:'center',
marginRight:"-2%",
marginTop:"18%"
    }

})
export default Addressdet