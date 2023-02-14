import { View, Text,Image, Dimensions,TextInput,StyleSheet, ScrollView ,Pressable,Button,FlatList,ScrollViewComponent,TouchableOpacity} from 'react-native'
import React,{useContext, useEffect, useState} from 'react'
import MaterialIcon from '@expo/vector-icons/MaterialIcons'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import HomeProducts from './HomeProducts'
import AllProducts from './AllProducts'
import AppLoading from 'expo-app-loading'; 
import axios from 'axios'
import {DrawerActions, useNavigation, useRoute } from '@react-navigation/native'
 
import { useFonts } from 'expo-font';
import ProductsShowCase from './ProductsShowCase'
import ImageShows from './ImageShows'
import LandingImage from './LandingImage'
import testcheck from '../Auth/Async/Gettoken'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthContext from '../Auth/Authcontext'
import {consumerKey,consumerSecret} from "@env"

console.log(consumerKey,consumerSecret);
let  width = Dimensions.get('screen').width;
let height = Dimensions.get('screen').height;
let increase;
let increaseappHeight ;

 


 height>1250? height=height*70/100:height=height;

// switch(height){
//   case height>1200:
//     increase=height*70/100
//    break;
//   }

  console.log(`height---${height}`);

let categoryHeight;
let categoriesHeight;
let showcaseheight;
let tottalproductheight ;
let productsdetails;
const wrapperwidth= width*85/100;
const wrapperHeight = height*95/100;

const headerRightMargin = wrapperwidth*0.2/100;
const serachInputwidth= wrapperwidth;

let showcaseimgwidth;
let showcaseimgheight;

// {height>850?showcaseimgheight=wrapperwidth*18/100:showcaseimgheight=wrapperwidth*20/100}

{height>850?showcaseheight=height*25/100:showcaseheight=height*25/100}
{width>450?showcaseimgwidth=wrapperwidth*30/100:showcaseimgwidth=wrapperwidth*66/100}
{height>850?tottalproductheight=height*30/100:tottalproductheight=height*60/100}

{height>850?productsdetails=tottalproductheight*15/100:productsdetails=tottalproductheight*30/100}

{height>850? categoryHeight = height*23/100: categoryHeight = height*32/100}

 //categoryHeight = wrapperHeight*25/100
console.log(height)
console.log(categoryHeight)
 {height>850?categoriesHeight = categoryHeight*35/100: categoriesHeight = categoryHeight*38/100 }

 console.log(categoriesHeight)
 const categoriestitleMargin = categoriesHeight*5/100

let categoriesWidth ; 

{width>450?categoriesWidth=wrapperwidth*16/100:categoriesWidth=wrapperwidth*25/100}

//console.warn(`Width${width}--Height${height}`)
  
const Homescreen = () => {




  const [DATA,SETDATA]=useState()
  const [tokens,Settokens]=useState()

  const [username,Setusername]=useState()
  
  const [email,Setemail]=useState()
   
const [search1,Setsearch1]=useState()
const [fetchdata,Setfetchdata]=useState([])

 const navigation = useNavigation()

 const [boxshown,Setboxshown]= useState(false)
 const [Filter,SetFilter]=useState(null)


 const {reterivetoken}= useContext(AuthContext)
  const [searchindex,Setsearchindex]=useState()
 const [changed,SetChanged]=useState(0)
  let  searcharray =[]


 useEffect(()=>{
let flag  = true
  getdetails()
  getdata()
  fetchgetdata()
  Setsearch1(setinitialdata())
  statechanged()


  return ()=>{
flag=false
  }
 },[])

console.log(changed)


const statechanged=()=>{
  SetChanged(changed+1)
}




 let DataArray=[]
 
 fetchdata.map(element => {
   let prices = new Object();
 
 
 //  console.log(element.name)
 
 const {id,name,price,slug,permalink,status,description,regular_price,sale_price,total_sales,tax_status,tax_class,stock_quantity,
   shipping_required,shipping_taxable,average_rating,
   rating_count,categories,tags,model,
   images,brands}= element
 prices.id=id
   prices.name=name
 prices.price=price
 prices.slug=slug
 prices.permalink=permalink
 prices.status=status
 prices.description=description.replace(/<\/?[^>]+(>|$)/g,"").replace(/(\r\n|\n|\r)/gm, "");
 prices.rawDescription=description
 prices.regular_price=regular_price
 prices.sale_price=sale_price
 prices.total_sales=total_sales
 prices.tax_status=tax_status
 prices.tax_class=tax_class
 prices.stock_quantity=stock_quantity  
 prices.shipping_required=shipping_required
 prices.shipping_taxable=shipping_taxable
 prices.average_rating=average_rating 
 prices.rating_count=rating_count
 prices.categories=categories.map((ele)=>ele)
 prices.filtercategory= prices.categories.map((ele)=>ele.name)
 prices.images=images.map((ele)=>ele)
 prices.filterimage=prices.images.map((ele)=>ele.src)
 prices.tags=tags.map((ele)=>ele)
 prices.filtertags=prices.tags.map((ele)=>String(ele.name))
 prices.brands=brands.map((ele)=>ele)
 prices.brand= prices.brands.map((ele)=>ele.name)
 prices.model=model
  
 
 DataArray.push(prices);
 
 });
 

console.log('hello...........')





 const getdetails=async()=>{
  Settokens(await AsyncStorage.getItem('token'))
  Setusername(await AsyncStorage.getItem('user_name'))
  Setemail(await AsyncStorage.getItem('user_email'))
   
  console.log("tokens"+tokens)
  console.log("username"+username)
  console.log("email"+email)
   

}



const getdata =async()=>{

  try {
   let data1
   data1=JSON.parse(await AsyncStorage.getItem('cart')) 
  SETDATA(data1)
  // console.log(data1)
   if(data1===null) SETDATA('')
  } catch (error) {
    

  }

}

const fetchgetdata=()=>{
  axios.get(`https://purespiruline.com/wp-json/wc/v3/products/?per_page=100&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`)
  .then(async function (response){
  
 let res =  response.data.map((elef)=>elef)

Setfetchdata(res)
  //console.log(response.data) 
  }).catch(function(err){
  console.log("error"+err)  
  })
  
}


const setinitialdata = ()=>{
  const data= DataArray.map((ele)=>ele.name)
     
  return data
 
 }




 const Searchitem=(term)=>
 {
 
 
   setTimeout(()=>{
     statechanged()
   },2000)
 
 //term.preventdefault()
 
 if(term!==undefined) {
   if(term.length>2) Setboxshown(true)
 if(term.length<3) Setboxshown(false)
 }
 const d=search1.map((ele)=>(
  ele.indexOf(term)!=-1
 
 ))
 
let dt =d.findIndex((ele)=>ele===true)
 // console.log("findinde"+d.findIndex((ele)=>ele===true))
 console.log(dt)
  SetFilter(DataArray[dt])
 console.log(Filter)
 }











 let [fontsLoaded] = useFonts({
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
switch(height){


  case height>1050:
  increaseappHeight=height-200;
break;
case height<1050:
  increaseappHeight=height+200
break;

}


  return(
  
//tokens==='null'?Settokens(null):''

<>


<ScrollView style={{backgroundColor:'#f3f5f7',marginTop:"4%"}}> 
<View style={[styles.wrapper,{ height:increaseappHeight}]} >  


{/* start */}
  <View style={{justifyContent:'space-between',flexDirection:'row'}}>
      {/* <MaterialIcon name='menu-open' size={32}  style={{justifyContent:'flex-start',marginTop:"2.5%"}}  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
       */}

       <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{marginLeft:"-10%",marginTop:"1%"}}> 
       <Image source={require('../../assets/images/icons/menu-bar.png')} style={{justifyContent:'flex-start',marginTop:"8%",resizeMode:'contain',width:100,height:30}}  />
       </Pressable>
 <View style={{flexDirection:'row',marginRight:headerRightMargin}} >

<View>
<Feather name='shopping-cart' size={25} style={{marginRight:headerRightMargin,marginTop:"7.5%",backgroundColor:'#ffff',borderRadius:50,padding:10}}  onPress={()=>{navigation.navigate('Cart')}} />

  </View>       
  
{tokens===null?<Text></Text>:
<MaterialCommunityIcons name='account' size={30}  style={{marginRight:headerRightMargin,marginTop:"3.1%",backgroundColor:'#ffff',borderRadius:50,padding:7,alignSelf:'center'}} 
 onPress={()=>
navigation.navigate('Profile',{username,email})}/>
}
</View>
   
 
  </View>

  <View style={{flexDirection:'row',marginTop:wrapperHeight*2.4/100,justifyContent:'space-evenly'}}>


  <TextInput style={[styles.searchInput,{position:'static',marginLeft:"7%"}]}  placeholder="      Search Medicine..."  onChangeText={e=>Searchitem(e)} /> 





  <MaterialIcon name='search' size={25} style={{alignSelf:'center',position:'relative',marginRight:"13%"}}/>

</View> 

</View>
<View>

</View>

<View>
<LandingImage/>  
</View>

<View>
<AllProducts  navigation={navigation} />
</View>

{/* <View style={{marginTop:25}}>
<ScrollView>

<AllProducts/>

</ScrollView>
</View> */}

</ScrollView> 
 


{/* 




{boxshown?
 <View style={{width:width*86/100,backgroundColor:'#fff',zIndex:1,position:'absolute',marginTop:"34%",height:height*20/100,borderWidth:0.8,borderColor:'#d4d4d4',borderRadius:5,marginLeft:"-2%"}}>


<ScrollView> 



{Filter===null||Filter===undefined?<TouchableOpacity>

<Text style={{marginTop:"5%",fontSize:16.5,fontFamily:'NunitoSans-Bold'}}>No Item Found</Text>

</TouchableOpacity>:

<TouchableOpacity  onPress={()=>navigation.navigate('ProductsPage',{item:Filter}) }  >

<Text style={{marginTop:"5%",fontSize:16.5,fontFamily:'NunitoSans-Bold'}}>{Filter.name}</Text>

</TouchableOpacity>


}
</ScrollView>
</View>




:<Text></Text>
} */}


{/* 
<ScrollView> 




<FlatList data={DataArray} 

renderItem={({item})=>(
<> 

 
{item.name.toLowerCase().indexOf(searchs.toLowerCase())!=-1?
 
 <>

 <TouchableOpacity onPress={()=>navigation.navigate('ProductsPage',{item:item}) } >

<Text style={{marginTop:"5%",fontSize:16.5,fontFamily:'NunitoSans-Bold'}}>{item.name}</Text></TouchableOpacity></>:<Text></Text>}



</>
 )}/>
     </ScrollView> */}

</>

)


}

const styles = StyleSheet.create({

  wrapper:{
    
    borderWidth:0,
    width:width*85/100,
    marginTop:width*5/100,
    alignSelf:'center',
    position:'relative'
    // marginLeft:width*7.5/100,
  //  marginRight:width*7.5/100
  },


  productswrapper:{
    
    borderWidth:0,
    width:width*85/100,
    marginTop:width*2/100,
    marginLeft:width*7.5/100,
    marginRight:width*7.5/100
  }
,

searchInput:{
width:serachInputwidth,
height:wrapperHeight*7/100,
backgroundColor:'#ffff',
borderTopLeftRadius:10,
borderRadius:5,
marginLeft:wrapperwidth*0/100,
fontSize:18,
fontWeight:'bold',

},
category:{
  marginTop:wrapperHeight*3/100,
  width:wrapperwidth,
  height:categoryHeight,
  backgroundColor:'#fff',
  borderRadius:8,
 
},
categories:{
  height:categoriesHeight,
width:categoriesWidth,
//backgroundColor:'#faf0e6',
// backgroundColor:'#fff',
borderWidth:1.8,
borderColor:'#fff',
marginLeft:wrapperwidth*3/100,
marginTop:wrapperHeight*3/100,
borderRadius:10,

elevation:1.5



},
categorytitle:{ 
  alignSelf:'center',
  fontSize:11, 
  fontWeight:'bold',
  marginTop:categoriestitleMargin,
  //fontFamily:"Dosis-Light"
},
categoryimg:{
height:categoriesHeight*65/100,

width: Dimensions.get('screen').width>450?Dimensions.get('screen').width*16/100:Dimensions.get('screen').width*20.8/100, 
resizeMode:'contain',
borderWidth:0.5,
borderRadius:6,
//borderBottomColor:'grey',
justifyContent:'center',
alignSelf:'center',

//marginTop:categoriesHeight*20/100
//margin:categoriesHeight*12/100,
//zIndex:3

},

categorybtnview:{

  flexDirection:'row',
  width:wrapperwidth*90/100,
  marginLeft:wrapperwidth*5/100,

marginBottom:categoriesHeight*5/100,

  borderRadius:5,
fontFamily:"",
  padding:10,
  backgroundColor:'#61CE70',
  marginTop:"3%",

marginBottom:categoryHeight*5/100
},
categorybtnview2:{

  flexDirection:'row',
  width:wrapperwidth*90/100,
  marginLeft:width*10/100,

marginBottom:categoriesHeight*5/100,

  borderRadius:5,

  padding:10,
  backgroundColor:"#61CE70",
  marginTop:"1%",

marginBottom:categoryHeight*5/100
},
categorybtn:{

marginLeft:wrapperwidth*27/100,
color:'#ffff',
fontSize:16,
fontWeight:"bold",
fontFamily:'RobotoCondensed-Regular'
},

totalproducts:{
  height:"100%",
  backgroundColor:'#fff',
  borderRadius:8,
  width:wrapperwidth,
  marginTop:wrapperHeight*2/100
},
productdetails:{

  borderWidth:1.8,
borderColor:'#c9c0bb',
height:productsdetails,
width:wrapperwidth*36.5/100,
margin:wrapperwidth*5/100
}

})

export default Homescreen






