import { View, Text ,Dimensions,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import Webview from 'react-native-webview'
const {width,height} = Dimensions.get('screen');

const Trackmyorder = () => {
    const [isloading,Setisloading]=useState(true)


    useEffect(()=>{},[

        setTimeout(()=>{
  Setisloading(false)
        },2000)

    ])


if(isloading) {
    
        return(
            <View style={{backgroundColor:'#fff'}}> 
           <View style={{height:height,width:width,justifyContent:'center',alignItems:'center'}}>
               <Image 
              source={require('../../../../assets/images/Ellipsis-2.1s-58px.gif')}
              style={{resizeMode:'contain',marginTop:"-50%"}}
              />
          
              </View>
              </View>
              )
        
  
}

else{
  return (



 <Webview  source={{uri:'https://purespiruline.com/tracking-order/'}}/>
  )
}
}

export default Trackmyorder