import { View, Text ,Dimensions,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import Webview from 'react-native-webview'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
const {width,height} = Dimensions.get('screen');

const Ordersucess = () => {
    const [isloading,Setisloading]=useState(true)
const navigation=useNavigation()
useEffect(()=>
{
    setTimeout(()=>{
        Setisloading(false)
    },3000)
},[])

    if(isloading){
        return(
            <View style={{backgroundColor:'#fff'}}> 
           <View style={{height:height,width:width,justifyContent:'center',alignItems:'center'}}>
               <Image 
              source={require('../../../assets/images/Ellipsis-2.1s-58px.gif')}
              style={{resizeMode:'contain',marginTop:"-50%"}}
              />
          
              </View>
              </View>
              )

    }
    else{
return(
    <> 
    <View style={{justifyContent:'center',alignSelf:'center',marginTop:200}}>
           <Text style={{fontSize:25,fontWeight:"bold"}}>Order Succesfully Placed</Text>
      
        </View>

<Pressable onPress={()=>{navigation.navigate('Homescreen')}}>
<Text style={{backgroundColor:'#080808',padding:15,width:"15%",borderRadius:5,color:'#ffff',alignItems:'center',alignSelf:'center',marginTop:100}}>Back</Text>
</Pressable>
</>
)    
}
}

export default Ordersucess