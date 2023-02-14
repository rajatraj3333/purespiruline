import axios from 'axios';
import { View, Text,StyleSheet,Dimensions ,TextInput, Alert} from 'react-native'
import React,{useState} from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Authcontext from './Authcontext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';



const {width,height} =Dimensions.get('window');
const Login = ({navigation}) => {





 const {Signin,Signout} =React.useContext(Authcontext)




  const [userName,Setusername]= useState('')
const [userPassword,SetuserPassword]= useState('')
const [token,Settoken] =useState(null)

const [usernameAsyn,SetusernameAsyn]= useState(null)
const [useremailAsyn,SetuseremailAsyn]= useState(null)
const [flag,Setflag]= useState(null)

  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  
  
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //console.log(String(userName))
 // console.log(JSON.stringify(userPassword))
//console.log(token)
 const  userhandler=(val)=>{
 val.length>=0?Setusername(val):''
 }
 const  userhandlepassword=(val)=>{
  val.length>=0?SetuserPassword(val):''
  }


  const handleSubmit=()=>{

console.log("loginlength"+userName.length)
    if(userName.length>0&&userPassword.length>0){
    axios.post('https://purespiruline.com/wp-json/jwt-auth/v1/token',{

      username:String(userName),
    
    password:String(userPassword)
    
     }).then(async (response) =>{
    

 
const  token =response.data.token

const user_name = response.data.user_display_name

const user_email = response.data.user_email

Signin(token,user_name,user_email)

      })
      
      .catch(function (error) {


        Alert.alert('Invalid Credential')

     
    });
    
    
    
  }  
  else{
  
Alert.alert('Enter Email and Password')
  }
}


function HandleSignin (username,userpassword) {

  if(username.length>0&&userpassword.length>0)Signin(username,userpassword)

else{

  Alert.alert('Enter Username ,password')
}
}





  return (
    <> 
    
    
    <View style={styles.wrapper}>
      <Pressable onPress={()=>navigation.navigate('Homescreen')}>
     <View style={styles.icon}>
    
{/* */}


 <FontAwesome name='chevron-left' size={20}  style={{marginTop:width*0.03}} color={'#ffff'}/> 

      
    
     </View>
     </Pressable>

<View>
{/* <Text style={{fontSize:24}}>{token!=null?<Text>{token}</Text>:''}</Text> */}
<View style={styles.title}>
  <Text  style={styles.texttitle}>{token!=null?<Text>{usernameAsyn}</Text>:''}Welcome</Text>
  <Text style={styles.texttitle} >Back</Text>
  </View>
</View>

<View style={{marginTop:14}}> 

<TextInput placeholder='   Email' style={styles.forms} value={userName}  onChangeText={(val)=>userhandler(val)}/>


<TextInput placeholder='   Password'  value={userPassword} style={styles.forms} onChangeText={(val)=>userhandlepassword(val)}/>

</View>

<Text style={styles.signupbtn} onPress={()=>handleSubmit()}>Login</Text>

<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,color:'#0D0D0D',width:width*85/100,alignSelf:'center'}}>
 
  <Text style={{color:'#0D0D0D',fontSize:18}}>Forget Your Password? </Text>
  <Text style={{textDecorationLine:'underline',color:'#0D0D0D' ,fontWeight:"400",fontSize:18}} onPress={()=>Signout()}  >Register here</Text>
 
 {/* onPress={()=>navigation.navigate('Signup')} */} 

</View>

    </View>
    </>
    
  )

}

// #F5F9FF chevron-thin-left
const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#f5fffa',
        width:width,
        height:height,
        
    },
    icon:{
      backgroundColor:'#61CE70',
width:width*0.15,
height:width*0.11,
alignItems:'center',

    //  padding:14,
     //paddingRight:35,
      borderRadius:6.5,
   //   paddingBottom:38,
      borderBottomLeftRadius:0,
      borderTopLeftRadius:0,
      marginTop:height*0.08,
     // paddingHorizontal:35
      //marginLeft:50
    },

    title:{
    
marginLeft:width*0.06,
fontWeight:'700',
color:'#080808',
marginTop:"10%"

},

texttitle:{fontFamily:'Poppins-Regular',
fontSize:24,
fontWeight:"bold"
}
,
forms:{
  width:width*85/100,
  padding:13,
  backgroundColor:'#ffff',
  marginTop:14,
  alignSelf:'center',
  borderRadius:6.5,
  shadowColor:'#000',
shadowOffset:{width:0,height:1},
shadowOpacity:0.8,
shadowRadius:1,
color:'#333',
fontSize:18,
fontFamily:"Poppins-Regular"

},
signupbtn:{
  width:width*85/100,
  padding:15,
  fontSize:19,
  fontWeight:"700",
  backgroundColor:'#61CE70',
  fontFamily:'Poppins-Regular',
  alignSelf:'center',
color:'#fff',
borderRadius:9,
// borderBottomLeftRadius:9,
// borderBottomRightRadius:9,
// borderTopLeftRadius:9,
// borderTopRightRadius:9,
marginTop:width*0.05,
textAlign:'center',
shadowColor:'#000',
shadowOffset:{width:0,height:1.8},
shadowOpacity:0.8,
shadowRadius:1,

}
})


export default Login




// axios.post('https://purespiruline.com/wp-json/jwt-auth/v1/token',{

//   "username":"Admin",
    
//   "password":"Admin@2022"

// }).then(function (response) {
//      console.log(JSON.stringify(response.data))})
//    .catch(function (error) {
//      console.log(error);
//  });

   //  const logindetails = new Object();
 
  //  const {user_email,user_display_name,token}=   response.data

  //  logindetails.user_email=user_email
  //  logindetails.user_display_name=user_display_name

  //  logindetails.token=token

  //  const {user_email,user_display_name,token}=   response.data