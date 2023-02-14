import { View, Text, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import testcheck from './Auth/Async/Gettoken'
const OrderNow = ({navigation,route,test,data}) => {

  console.log("tokens"+data);

   // const token = route.params.token
//console.log("test"+test)

//console.log(token)   


// const [details,Setdetails]= useState([])
// const [token,Settoken]=useState(null)
// const [username,Setusername]=useState(null)
// const [useremail,Setuseremail]=useState(null)
// useEffect(async()=>{
//   let result = await testcheck()

//   result.forEach((ele)=>{
//       ele.token!=null?Settoken(ele.token):navigation.navigate('Login')
    
//     })
// },[])


// console.log(token)

// const redirect=()=>{
//     Alert.alert('Login to Place Order ')
//     navigation.navigate('Login')
// } 

return(
<> 
{data!=null?<Text>{data}</Text>:<Text onPress={()=>navigation.navigate('Login')}>Login First</Text>}

</>
)
}

export default OrderNow