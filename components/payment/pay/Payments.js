import React ,{useEffect,useState}from 'react';
import { ActivityIndicator, View, Dimensions, Image,Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

const {width,height} = Dimensions.get('screen');

export default function Payments({navigation}) {
const route = useRoute()

const [value,Setvalue]= useState('')

useEffect(()=>{
   getdetails()
 
  },[])
console.log(route.params.name)
console.log(route.params.price)



const getdetails=async()=>{

   Settokens(JSON.parse(await AsyncStorage.getItem('address')))

 }


const stateChng = (navState) => {
 // console.log(navState);
 const { url, title } = navState ;
 if(title == "PayPal Sucess"){
    console.log("url",url);
    let spliturl = url.split('?');
    // console.log("spliturl",spliturl);
    let splitotherhalf = spliturl[1].split('&');
    console.log("splitotherhalf",splitotherhalf);
    let paymentId = splitotherhalf[0].replace("paymentId=","");
    let token = splitotherhalf[1].replace("token=","");
    let PayerID = splitotherhalf[2].replace("PayerID=","");
    navigation.navigate('Success',{payId:paymentId,token:token,payerId:PayerID,item:route.params.item})
    // console.log("paymentId", paymentId);
    // console.log("token", token);
    // console.log("PayerID", PayerID);
 }
}

return (
   <WebView 
   startInLoadingState={true}
   onNavigationStateChange={stateChng} 
   renderLoading={() => <Loading />}
   source={{ uri: `https://floating-citadel-33371.herokuapp.com/pay/${route.params.price}/item/${route.params.name}`}} />
);
}

const Loading = () => {
return(
   <View style={{height:height,width:width,justifyContent:'center',alignItems:'center'}}>
       <Image 
      source={require('../../../assets/images/Ellipsis-2.1s-58px.gif')}
      style={{resizeMode:'contain',marginTop:"-50%"}}
      />
  
      </View>

      )

}