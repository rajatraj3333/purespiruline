import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
export default function Pay() {
  


  const route = useRoute()


  const name =route.params.name
  const price = route.params.regular_price

console.log(name)

console.log(price)

  const [amt, setamt] = React.useState("")
  const [itemname, setitemname] = React.useState("")
  
 
  

  const pay = () => {
    if(amt != ""){
      navigation.navigate('Payments',{'amt':price,'itemname':name});
    }
  }

  return (
    <View style={styles.container}>
          <Image 
          source={require('./paypal.png')}
          style={styles.img}
          />
         <Text style={styles.title}>Paypal Intregation</Text>
       
       <View style={{flexDirection:'row'}}>
         <Text style={{fontSize:20}}>Product Name:</Text>
         <Text style={{fontSize:20,marginLeft:25}}>{name}</Text>
     
       </View>
       <View style={{flexDirection:'row'}}>
         <Text style={{fontSize:20}}>Price</Text>
         <Text style={{fontSize:20,marginLeft:35,fontWeight:"bold",marginBottom:35}}>{price}</Text>
     
       </View>
          
          
         <Button 
         title="Pay Now"
         onPress={pay}
         />

    </View>
  );
}


const styles = StyleSheet.create({
  textinput : {
    borderWidth:1,
    width:'100%',
    borderColor:'#ccc',
    borderRadius:5,
    paddingLeft:15,
    marginBottom:25
  },
  container : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin: 15,
    backgroundColor:'#fff'
  },
  img : {
    width:250,
    height:100,
    resizeMode:'contain',
    marginBottom:30
  },
  title : {
    fontWeight:'bold',
    fontSize:25,
    marginBottom:50
  }
});