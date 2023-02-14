import { View, Text ,Image} from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
const Loading = () => {
    const navigation= useNavigation()
    useEffect(()=>{

        setTimeout(() => {
            navigation.navigate('Homescreen')
        },2000);
      

    },[])

  return (
    <View>
     <Image source={require('../../assets/images/Ellipsis-2.1s-58px.gif')}/>
    </View>
  )
}

export default Loading