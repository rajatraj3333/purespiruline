import { View, Text,SafeAreaView,Dimensions ,Image, Alert} from 'react-native'
import React,{useState,useEffect} from 'react'
import ImageShows from './ImageShows'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import Authcontext from '../Auth/Authcontext';
const {width,height} =Dimensions.get('window')
const ProductsPage = ({navigation,route}) => {


const [tokens,Settokens]=useState(null)
   const {reterivetoken} = React.useContext(Authcontext)


 



 useEffect(()=>{
  getdetails()

 },[])
// setTimeout(async()=>{


//   Settokens(await reterivetoken())

// },1000)

// },[])


const getdetails=async()=>{

   Settokens(await  AsyncStorage.getItem('token'))

 }

 //console.log(tokens)

const test=  route.params.item



console.log("PP"+tokens)

const initialcartState= {


  id:null,
  productname:null,
  productprice:null,
  productquantity:null


}



const cartReducer =(prevState,action)=>{


  switch(action.type){


    case 'ADD' :
    return {
      ...prevState,
      productid:action.id,
      productname:action.productname,
      productprice:action.productprice,
      productquantity:action.productquantity

    };





  }




}



const ObjeCreator=(cartdata)=>{

return  new Object(cartdata)

}

const ADDCART=async(id,productname,productprice,description)=>{



let productquantity=1
const data ={id:id,productname:productname,productprice:productprice,productquantity:productquantity,description:description}
//console.log(data)

try {

 


   value = JSON.parse(await AsyncStorage.getItem("cart"))

  if(value===null) {

    cartdata =[data]

    await AsyncStorage.setItem('cart',JSON.stringify(cartdata))
     Alert.alert('Product Added')
  }



  else{
 const sval =  value.filter(ele=>ele.id!=id)

 const newvalue  =  value.filter(ele=>ele.id===id)

 if(newvalue.length===0){

 let newarr = [...sval,data]

   await AsyncStorage.setItem('cart',JSON.stringify(newarr))
   Alert.alert('Product Added')
 }

 else{
  let inc 
newvalue.map((ele)=>inc=ele.productquantity+1)
console.log(inc);


const newData =  {id:id,productname:productname,productprice:productprice,productquantity:inc,description:description}
//console.log(newData)
let arr
if(sval.length===0) { arr=[newData]
 

 await AsyncStorage.setItem("cart",JSON.stringify(arr))
 Alert.alert('Product Added')
}

else{
 arr=[...sval,newData]
  await AsyncStorage.setItem("cart",JSON.stringify(arr))
  Alert.alert('Product Added')
}


 }
}



}


catch (error) {
  
}

    
}


const DECERASE=async(id)=>{

const value = JSON.parse(await AsyncStorage.getItem('cart'))
let decarray 
const val =value.filter((ele)=>ele.id===id)
let newdata
let decquant
let check =false
 val.map((ele)=>decquant=ele.productquantity>0?ele.productquantity-1:check=true)
//console.log("quant"+decquant)
val.forEach((ele)=>{
 

 newdata= {id:ele.id,productname:ele.productname,productprice:ele.productprice,productquantity:decquant,description:ele.description}

 //console.log("proqu"+ele.productquantity+1)
})
if(check) {

const delval= value.filter((ele)=>ele.id!=id)

  decarray=[...delval] 
  await AsyncStorage.setItem('cart',JSON.stringify(decarray))



  // decarray=[...oldvalue] 
  // await AsyncStorage.setItem('cart',JSON.stringify(decarray))


}  

else{
const oldvalue =value.filter(ele=>ele.id!=id)

 decarray = [...oldvalue,newdata]

//console.log(decarray)
 await AsyncStorage.setItem('cart',JSON.stringify(decarray))
}
}

const DELETE=async(id)=>{

  const value = JSON.parse(await AsyncStorage.getItem('cart'))

  const res=value.filter((ele)=>ele.id!=id)

let afterremovearray = [...res]

await AsyncStorage.setItem('cart',JSON.stringify(afterremovearray))


}

const CLEAR=async()=>{


 await AsyncStorage.removeItem('cart')
 console.log('DATA REMOVED...')
}

const GETDATA=async()=>{
  const res= JSON.parse(await AsyncStorage.getItem('cart'))
  console.log(res)
}

//console.log(test);
    let [fontsLoaded] = useFonts({
     
        'PTSerif-Regular':require('../../assets/fonts/PTSerif-Regular.ttf'),
        'Quicksand-Regular':require('../../assets/fonts/Quicksand-Regular.ttf'),
        'RobotoCondensed-Regular':require('../../assets/fonts/RobotoCondensed-Regular.ttf'),
        'RobotoCondensed-Bold':require('../../assets/fonts/RobotoCondensed-Bold.ttf'),
        'TitilliumWeb-Regular':require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
        'NunitoSans-Bold':require('../../assets/fonts/NunitoSans-Bold.ttf')
    
      
      });
      
      if (!fontsLoaded) {
        return <AppLoading />;
      }



  return (  
    <> 



      <ScrollView style={{backgroundColor:"#fefefa"}}>
          
    <ImageShows dotssize={'round'} imgs={test.filterimage}/>
<View style={{marginTop:"8%"}}>
 
    <View style={{flexDirection:'row'}}><Text style={{fontSize:18,fontFamily:"PTSerif-Regular",color:'#696969',marginLeft:"5%"}}>{test.filtercategory}</Text></View>

    <View style={{flexDirection:'row'}}><Text style={{fontSize:24,fontFamily:"RobotoCondensed-Bold",color:'#080808',marginLeft:"8%",marginTop:"2%"}}>{test.name}</Text></View>


<View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
<Text style={{backgroundColor:'#fb607f',color:'#ffff',fontSize:19,padding:3,marginLeft:"5%",marginTop:"3%",fontFamily:"RobotoCondensed-Bold",borderRadius:5}}>Save 20%</Text>
<Text style={{marginTop:"3%",marginRight:"3%"}}><FontAwesome name='star' size={20} color='#daa520'/>4.3<Text style={{fontSize:16,color:'#989898',marginTop:"8%",fontFamily:"RobotoCondensed-Bold"}}>(342 Reviews)</Text></Text>

</View>
<Text  style={{marginTop:"3%",marginLeft:"5%",fontSize:22,fontFamily:"TitilliumWeb-Regular"}}>Description</Text>
<View>
 <Text style={{marginLeft:"5%",color:"#353839",fontFamily:"TitilliumWeb-Regular",fontWeight:"600",fontWeight:"600",fontSize:15}} numberOfLines={4}>{`${test.description}`}</Text>
 
 <Text style={{fontSize:20,marginLeft:"5%",fontFamily:'NunitoSans-Bold'}} onPress={()=>navigation.navigate('ProductsDescription',{desc:{'desc':test.rawDescription,'brand':test.brand,'model':test.name}})}>Read More</Text>
</View>
<View style={{flexDirection:'row'}}><Text style={{flexDirection:'row',fontSize:16,color:"#100c08",marginLeft:"5%",marginTop:"4%"}}>Tags</Text></View>
<View style={{flexDirection:'row' ,marginTop:"1%"}}><Text style={{fontSize:14,fontFamily:"PTSerif-Regular",color:'#696969',marginLeft:"5%"}}>{test.filtertags}</Text></View>
  

</View> 





 </ScrollView>
    
<View style={{backgroundColor:'#ffff',flexDirection:'row',width:"100%",height:height*0.08,alignSelf:'center',justifyContent:'space-around'}}>

<Text style={{fontFamily:'RobotoCondensed-Bold', color:'black',fontSize:24,marginTop:"2.5%"}}>€{test.price}</Text>

<Text style={{backgroundColor:'#080808',height:height*0.05,marginTop:"2.5%",textAlignVertical:'center',color:'#fff',paddingLeft:6,paddingRight:6,borderRadius:5,fontFamily:"NunitoSans-Bold",fontWeight:"600"}} onPress={()=>ADDCART(test.id,test.name,test.price,test.description)}>Add to Cart</Text>
<Text style={{backgroundColor:'#daa520',height:height*0.05,marginTop:"2.5%",textAlignVertical:'center',color:'#fff',paddingLeft:6,paddingRight:6,borderRadius:5,fontFamily:"NunitoSans-Bold",fontWeight:"600"}} onPress={()=>
 tokens!=null?navigation.navigate('Payment',{item:test}):navigation.navigate('Login')}>Buy Now</Text>


</View>



    </>

  )
} 



export default ProductsPage