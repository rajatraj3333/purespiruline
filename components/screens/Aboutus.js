import { View, Text,Image,Dimensions,ScrollView } from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { WebView } from 'react-native-webview';

const Aboutus = () => {


    
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'RobotoCondensed-Regular': require('../../assets/fonts/RobotoCondensed-Regular.ttf'),
    'Dosis-Light':require('../../assets/fonts/Dosis-Light.ttf'),
    'TitilliumWeb-Light':require('../../assets/fonts/TitilliumWeb-Light.ttf'),
    'TitilliumWeb-Regular':require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
   
    'NunitoSans-SemiBold':require('../../assets/fonts/NunitoSans-SemiBold.ttf'),
    'NunitoSans-Bold':require('../../assets/fonts/NunitoSans-Bold.ttf'),
   
  
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
   <> 
   <ScrollView>





 <View style={{marginTop:20,position:'relative',flexDirection:'row'}}>
    <Image source={require('../../assets/images/3.png')}  style={{width:Dimensions.get('screen').width,justifyContent:'center',height:180}}/> 
  


<Text style={{position:'absolute',alignSelf:'center',marginTop:"0%",fontSize:26.5,marginLeft:220,color:'darkgreen',fontFamily:"NunitoSans-Bold",fontWeight:"400"}}>Pure Spiruline</Text>
   
<Text style={{position:'absolute',alignSelf:'center',marginTop:"110%",fontSize:26.5,marginLeft:200,color:'#080808',fontFamily:"NunitoSans-Bold",fontWeight:"400"}}>Welcom to</Text>
   
    </View>

    
<View style={{flex:2,marginTop:"4%",flexDirection:'row',margin:"2%"}}>
<Text style={{width:Dimensions.get('window').width*50/100,lineHeight:18,fontFamily:'TitilliumWeb-Regular',fontWeight:"600"}}>
Pure Spiruline is an e-commerce site that will be capable of providing every kind of goods and products from every sector to every consumer all over the world. The world’s marketplace will be only finger-tips away for any customer in possession 
</Text>
<Image source={require('../../assets/images/bg-video-about.jpg')}style={{flex:1,marginTop:"-0%",height:150}}/>

</View>

<View style={{flexDirection:'row',flex:1,margin:"2%",fontFamily:'TitilliumWeb-Regular',fontWeight:"600"}}>

  <Text>
  of a smartphone/computer and an internet connection.We hire no outsourcing outlets and that ensures the security of all our users. There is absolutely no chance of any information being leaked thanks to our dedicated team who are working all the time to ensure that our website is the most secure e-commerce platform. What separates us from other platforms of such sorts is the diversity of our product range and the security that we provide to our users. It is absolutely cutting-edge and state-of-the-art and we can guarantee that no other platform has this much diversity in its product range. 


  </Text>
</View>


<View style={{flexDirection:'row'}}>
<Image source={require('../../assets/images/WEBPHOTO-Bio_5_retouched.jpg')} style={{flex:1,height:130,margin:"1%",borderRadius:12,resizeMode:'contain'}}/>

<Image source={require('../../assets/images/WEBPHOTO-Spirulina_11_retouched.jpg')} style={{flex:1,height:130,margin:"1%",borderRadius:12,resizeMode:'contain'}}/>



</View> 

<View style={{flexDirection:'row'}}>

<Image source={require('../../assets/images/WEBPHOTO-Cosmectics_1_retouched.jpg')} style={{flex:1,height:130,margin:"1%",borderRadius:12,resizeMode:'contain'}}/>
<Image source={require('../../assets/images/WEBPHOTO-Curcumin_4_retouched.jpg')} style={{flex:1,height:130,margin:"1%",borderRadius:12,resizeMode:'contain'}}/>


</View> 
<View style={{flexDirection:'row'}}>
<Image source={require('../../assets/images/WEBPHOTO-Sante_4_retouched.jpg')} style={{flex:1,height:130,margin:"1%",borderRadius:12,resizeMode:'contain'}}/>

<Image source={require('../../assets/images/WEBPHOTO-Phyco_6_retouched.jpg')} style={{flex:1,height:130,margin:"1%",borderRadius:12,resizeMode:'contain'}}/>


</View>  



</ScrollView>
</>
  )
}

export default Aboutus