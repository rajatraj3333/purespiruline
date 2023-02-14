
import 'react-native-gesture-handler';
import * as React from 'react';
import { Dimensions,useWindowDimensions , StyleSheet, Text, View,ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Billing from './components/address/Billing';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { DrawerActions,NavigationContainer, useNavigation } from '@react-navigation/native';
import Homescreen from './components/screens/Homescreen'
import axios from 'axios';
import HomeProducts from './components/screens/HomeProducts';
import AllProducts from './components/screens/AllProducts'
import Cart from './components/screens/Cart'
import SwiperScreen from './components/screens/SwiperScreen'
import ImageShows from './components/screens/ImageShows';
import ProductsPage from './components/screens/ProductsPage';
import Accountdetails from './components/address/Accountdetails';
import Address from './components/address/Address'
import CountryList from './components/address/CountryList'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Founndation from '@expo/vector-icons/Foundation'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ProductsDescription from './components/screens/ProductsDescription'
import Login from './components/Auth/Login';
import Authcontext from './components/Auth/Authcontext';
import Carts from './components/screens/Carts';
import Ionicons from '@expo/vector-icons/Ionicons'
import Aboutus from './components/screens/Aboutus';
import Payment from './components/payment/screen/Payment'
import Payments from './components/payment/pay/Payments'
import Pay from './components/payment/pay/'
import Loading from './components/screens/Loading';
import Addressdet from './components/address/Addressdet';
import Categoryproducts from './components/screens/Categoryproducts';
import Cartpay from './components/screens/Cartpay';
import ShippingDelivery from './components/screens/Extra/Screen/ShippingDelivery';
import Trackmyorder from './components/screens/Extra/Screen/Trackmyorder';
import Termandcondition from './components/screens/Extra/Screen/Termandcondition';
import Ordersucess from './components/payment/pay/Ordersucess';

//import Cartcontext from './components/Auth/Cartcontext';
const Drawer = createDrawerNavigator();

import {userContext,users,updatedtext} from './logincontext';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';


 const Stack = createNativeStackNavigator();

const Appwidth = Dimensions.get('screen').width;
const Appheight = Dimensions.get('screen').height;

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  color,
} from 'react-native-reanimated';
import Tests from './components/screens/SwiperScreen';
import CustomDrawer from './components/CustomDrawer';
import Brands from './components/screens/Brands';
import OrderNow from './components/OrderNow';
import Profile from './components/Auth/Profile';
import { useReducer } from 'react';
import Carttest from './components/screens/Carttest';
import HomeStack from './stackscreen/HomeStack';
import Success from './components/payment/pay/Success';
import ReturnExchange from './components/screens/Extra/Screen/ReturnExchange'
//const Stack = createNativeStackNavigator(); 

productsHeight= Appheight*25/100


export default   function App() {

  const test=132




// const navigation = useNavigation()
   const [token,Settoken]=React.useState()
//const users='thisis context';
 
React.useEffect(()=>{
    getdetails()
   })

   const getdetails=async()=>{
    Settoken(await AsyncStorage.getItem('token'))
  
    console.log("tokens"+token)

  
  }



  
  const InitalState={
    token:null,
    username:null,
    useremail:null
    }











const LoginandLogoutReducer = (prevState,action)=>{

  switch(action.type) {
  
    case 'RETERIVE_TOKEN':
      return{
       ...prevState,
       token:action.token,
       username:action.username,
       useremail:action.useremail
      };  
      case 'LOGIN':
        return{
          ...prevState,
          token:action.token,
          useremail:action.email,
          username:action.username,
          
        };
     
           
        case 'LOGOUT':
          return{
            ...prevState,
               token:action.token,
               username:action.username,
               useremail:action.useremail
          };

          case 'REGISTER':
            return{
                 ...prevState,
                 token:action.token,
                 username:null,
                 useremail:null
            };
  }


}



const [loginstate,dispatch]= React.useReducer(LoginandLogoutReducer,InitalState)
  const authContext = React.useMemo(()=>({

    reterivetoken:()=>{




return loginstate.token
},
    

      Signin:async(token,user_name,user_email)=>{

   


        await  AsyncStorage.setItem('token',token)
        await  AsyncStorage.setItem('user_name',user_name)
        await  AsyncStorage.setItem('user_email',user_email)
        

    dispatch({type:'LOGIN',token:token,username:user_name,useremail:user_email})
dispatch({type:'RETERIVE_TOKEN',token:token,username:user_name,useremail:user_email})
 

 
      }
,

   
  
        
  
    
      Signout:async()=>{

       

        dispatch({type:'LOGIN',token:null,username:null,useremail:null})
        
      }
    
    
    
    
    }),[])



//console.log('loginstates123'+token)
 
//console.log('LOGINTOKENSs'+loginstate.token)
console.log("login"+loginstate.token)
console.log("statecheck"+statecheck)
console.log("tokensscc"+token)
let statecheck 
if(loginstate.token===null&&token!='null') {
  statecheck=false
console.log("1")
}

if(loginstate.token!==null&&token!=='null') {
  statecheck=false
  console.log("2")
}

if(loginstate.token===null&&token==='null') {
  statecheck=true
  console.log("3")
}if(loginstate.token===null&&token===null) {
  statecheck=true
  console.log("4")
}



//console.log("login"+loginstate.token)
console.log("statecheck"+statecheck)
//console.log(token)
//token===undefined?Settoken(null):console.log('token') 
const Root=()=>{ 
  {
     
 // console.log("RootAfter"+token)
      
    return (
      
    statecheck? 


<userContext.Provider value={{users,updatedtext}}>
<Drawer.Navigator drawerContent= {props=><CustomDrawer {...props} />}  screenOptions={{drawerActiveBackgroundColor:"#61ce70",
          
          drawerActiveTintColor:"#fff",
          drawerInactiveTintColor:"#696969",
          drawerStatusBarAnimation:'slide',
          
          drawerLabelStyle:{
            marginLeft:"-10%",
            fontFamily:"NunitoSans-Bold",
            fontSize:16.5,
            fontWeight:"bold"
          
            
            } 
          
            
            
            }} 
            
            
            initialRouteName="Home">
          
          
          <Drawer.Screen name="Homescreen" component={Homescreen}  options={{headerShown:false,
          
          drawerIcon:()=>(
          <AntDesign name='home' size={20} color="#333"/>
          ) 
          }} 

  />
          
          
          <Drawer.Screen name="Shop" component={AllProducts}  options={{ 
           drawerIcon:()=>(
          <MaterialCommunityIcons name='shopping-outline' size={20}/>
          )}} />
          
          {/*      
          
          <Stack.Screen name='ProductsDescription' component={ProductsDescription}/>
          <Stack.Screen name='Carttest' component={Carttest}/>
          <Stack.Screen name='Carts' component={Carts}/>
          */}
          
          <Drawer.Screen name='Brands' component={Brands} options={{headerShown:false,
          
          drawerIcon:()=>(
          <Feather name='folder-minus' size={20}/> 
           )
          }}/>
          
          <Drawer.Screen name='About us' component={Aboutus} options={{headerShown:false,
          
          drawerIcon:()=>(
          <Feather name='folder-minus' size={20}/> 
           )
          }}/>
  
          <Drawer.Screen name='Login' component={Login} options={{headerShown:false,
          
          drawerIcon:()=>(
          <FontAwesome name='language' size={25}/>
           )
          }}/>
    
          
          </Drawer.Navigator>
          </userContext.Provider>
          










:




    <Drawer.Navigator drawerContent= {props=><CustomDrawer {...props} />}  screenOptions={{drawerActiveBackgroundColor:"#61ce70",
          
          drawerActiveTintColor:"#fff",
          drawerInactiveTintColor:"#696969",
         drawerStatusBarAnimation:'slide',
          
          drawerLabelStyle:{
            marginLeft:"-10%",
            fontFamily:"NunitoSans-Bold",
            fontSize:16.5,
            fontWeight:"bold"
          
            
            }
    
            
            
            }} 
            
            
            initialRouteName="Home">
    
    
    <Drawer.Screen name="Homescreen" component={Homescreen}   options={{headerShown:false,
         
         drawerIcon:()=>(
    <AntDesign name='home' size={20} color="#333"/>
         ) 
         }}

         />
    
    
         <Drawer.Screen name="Shop" component={AllProducts}  options={{ 
           drawerIcon:()=>(
    <MaterialCommunityIcons name='shopping-outline' size={20}/>
         )}} />
   
 

{/*      
   
    <Stack.Screen name='ProductsDescription' component={ProductsDescription}/>
    <Stack.Screen name='Carttest' component={Carttest}/>
    <Stack.Screen name='Carts' component={Carts}/>
      */}
    
    <Drawer.Screen name='Brands' component={Brands} options={{headerShown:false,
          
          drawerIcon:()=>(
          <Feather name='folder-minus' size={20}/> 
           )
          }}/>

<Drawer.Screen name='About us' component={Aboutus} options={{headerShown:false,
          
          drawerIcon:()=>(
          <Feather name='folder-minus' size={20}/> 
           )
          }}/>

    {/* <Drawer.Screen name='Login' component={Login} options={{headerShown:true,
    
    drawerIcon:()=>(
    <FontAwesome name='language' size={25}/>
           )
    }}/> */}
    


 

    
    
    
    
    
    
   
 

    
    

  
    
</Drawer.Navigator>


);

}










}













console.log(loginstate.token)




console.log("usernameloginstate.user_name")


 return (
    <>    


<Authcontext.Provider value={authContext}>



     <NavigationContainer>

  {   statecheck? 

     <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        
       <Stack.Screen name='Loading' component={Loading}/>
      
 
         <Stack.Screen name='ProductsPage' component={ProductsPage}/>
         <Stack.Screen name='ProductsDescription' component={ProductsDescription}/>
        
         <Stack.Screen name='Aboutus' component={Aboutus}/>
         <Stack.Screen name='ReturnExchange' component={ReturnExchange}/>
         <Stack.Screen name='ShippingDelivery' component={ShippingDelivery}/>
         <Stack.Screen name='Trackmyorder' component={Trackmyorder}/>
         <Stack.Screen name='Termandcondition' component={Termandcondition}/>
         <Stack.Screen name='Login' component={Login}/>
        
         <Stack.Screen name='Pay' component={Pay}/>
 

            <Stack.Screen name='Cart' component={Cart}/>
 
    
      </Stack.Navigator> 

:
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        /> 
          <Stack.Screen name='Loading' component={Loading}/>
 
         <Stack.Screen name='Profile' component={Profile} />
         <Stack.Screen name='Addressdet' component={Addressdet} />
         <Stack.Screen name='Categoryproducts' component={Categoryproducts} />
         
         <Stack.Screen name='ProductsPage' component={ProductsPage}/>
         <Stack.Screen name='Payment' component={Payment}/>
         <Stack.Screen name='Payments' component={Payments}/>
         <Stack.Screen name='Success' component={Success}/>
         <Stack.Screen name='Pay' component={Pay}/>
         <Stack.Screen name='Ordersucess' component={Ordersucess} options={{headerShown:false}}/>
         <Stack.Screen name='Cartpay' component={Cartpay}/>
         <Stack.Screen name='Aboutus' component={Aboutus}/>
         <Stack.Screen name='ReturnExchange' component={ReturnExchange}/>
         <Stack.Screen name='ShippingDelivery' component={ShippingDelivery}/>
         <Stack.Screen name='Trackmyorder' component={Trackmyorder}/>
         <Stack.Screen name='Termandcondition' component={Termandcondition}/>
      
         <Stack.Screen name='ProductsDescription' component={ProductsDescription}/>
        
         <Stack.Screen name="Address" component={Address}       />
    
    <Stack.Screen name="Billing" component={Billing} />
    <Stack.Screen name="Accountdetails" component={Accountdetails} />

         <Stack.Screen name='OrderNow' component={OrderNow}/>
    
           
            <Stack.Screen name='Cart' component={Cart}/>
 
    
      </Stack.Navigator>



 
}




    </NavigationContainer> 
    </Authcontext.Provider>
  

{/* <View style={[styles.productswrapper,{ height:productsHeight}]} >
</View> 
 <HomeProducts/>  */}


   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  
});
 