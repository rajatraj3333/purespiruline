import { View, Text,Button,Image,StyleSheet ,Dimensions,SafeAreaView} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Payment = ({navigation}) => {

const route = useRoute()


const test=  route.params.item

const {name,price,description,filterimage} =route.params.item
const img =filterimage[0]

console.log(img)
  return (
    <> 
     <SafeAreaView>

<View style={styles.wrapper}>
 
  <Image style={styles.image} source={{uri:img}}/>
 
 <View style={styles.rightcontainer}>
 <Text  style={{fontFamily:"TitilliumWeb-Regular",fontWeight:"bold",fontSize:20 }}numberOfLines={Dimensions.get('screen').height>850?5:2}>{name}</Text>
 <Text style={{marginLeft:"0%",color:"#353839",fontFamily:"TitilliumWeb-Regular",fontWeight:"600",fontWeight:"600",fontSize:15}} numberOfLines={1}>{`${description}`}</Text>
 
<Text style={styles.price}>{` €${price}`}</Text> 

 </View>
</View>

</SafeAreaView>
  
    <Button title='Paynow' onPress={()=>navigation.navigate('Payments',{name,price,item:route.params.item})}/>
    <View style={{marginTop:100,alignSelf:'center'}}>
<Text style={{fontSize:25,fontWeight:"bold"}}>PayPal email Id test1234p@gmail.com</Text>
<Text style={{fontSize:25,fontWeight:"bold"}}>Password:123456789</Text>
</View>   
    </>
    
  )
}


const styles = StyleSheet.create({


  wrapper:{
    marginTop:"15%",
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

export default Payment