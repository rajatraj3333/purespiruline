import React,{useState,useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView,Dimensions,Image ,Button,TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import axios from 'axios'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import {consumerKey,consumerSecret} from '@env'

let  width = Dimensions.get('screen').width;
let height = Dimensions.get('screen').height;
let wrapperWidth= width*85/100
let itemConatinerImageWidth;
let categoryHeight;
let itemConatinerImageHeight;
let itemContainerHeight;
let itemConatinerWidth ;
let categoriesHeight;

{height>850? categoryHeight = height*23/100: categoryHeight = height*32/100}
{height>850?categoriesHeight = categoryHeight*35/100: categoriesHeight = categoryHeight*38/100 }
 
{height>1050?itemContainerHeight=height*10/100:itemContainerHeight=height*20/100}

{width>450?itemConatinerWidth=width*15/100:itemConatinerWidth=width*33/100}
{height>1050?itemConatinerImageHeight=itemContainerHeight*65/100:itemConatinerImageHeight=itemContainerHeight*78/100}

{width>450?itemConatinerImageWidth=itemConatinerWidth*60/100:itemConatinerImageWidth=itemConatinerWidth*90/100}
console.log(itemConatinerImageHeight)
console.log(`itemheight`,itemContainerHeight)
import { useNavigation, useRoute } from '@react-navigation/native'

const Categoryproducts = () => {
  const route = useRoute()

const navigation =useNavigation()
    const [products,Setproducts]=useState([])

   const [procat,Setprocat]=useState([])
 

    useEffect(()=>{
     GetProductsFromApi()

    
   
  

       },[])
  
 
 function GetProductsFromApi(){
 
 axios.get(`https://purespiruline.com/wp-json/wc/v3/products/?per_page=100&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`)
 .then(async function (response){
 //console.log("retutn by woocomerce"+response.data.name);
 //console.log(response.data) 
 Setproducts(response.data);
 //console.log(response.data)  
 }).catch(function(err){
 console.log("error"+err)  
 })
 
 }
 
 
 
 
 
  let DataArray2=[]
  
  products.map(element => {
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
   
  
  DataArray2.push(prices);
  
  });

  let testarray =[]
  DataArray2.map((ele)=>
  
   ele.filtercategory.filter((elef)=>{
    if(elef===route.params.title) testarray.push(ele)

   }
  ))

 




 
//   DataArray.forEach(ele=>{
//   ele.categories.filter(ele=>ele.name==='Detox')
 
// })







//console.log(res)
//  DataArray.forEach((ele)=>{
//  const res= ele.find(elef=>elef.name==='Anti Pain Balm')

//  console.log(res)
// }) 

 // DataArray.map((ele)=>{
 // console.log(ele.brand)
 //  // ele.categories.forEach((elem)=>console.log(elem))
 // })
  
 //  DataArray.map((ele,index)=>{
 //   let inc = ele.images.length-1
   
   
 
 // ele.images.forEach((ele)=>console.log(ele.src))
      
 //   })
   
  
 
 
 
 
 
 
 
   let [fontsLoaded] = useFonts({
     'RobotoCondensed-Regular': require('../../assets/fonts/RobotoCondensed-Regular.ttf'),
     'Dosis-Light':require('../../assets/fonts/Dosis-Light.ttf'),
     'TitilliumWeb-Light':require('../../assets/fonts/TitilliumWeb-Light.ttf'),
     'TitilliumWeb-Regular':require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
     'NunitoSans-Bold':require('../../assets/fonts/NunitoSans-Bold.ttf'),
    
   
   });
   
   if (!fontsLoaded) {
     return <AppLoading />;
   }
 
   return (
     <>
     <View style={{ alignSelf:'center',marginTop:-14}}> 
     
     <FlatGrid
       itemDimension={110}
       data={testarray}
       style={styles.gridView}
       // staticDimension={300}
       // fixed  
       spacing={10}
       renderItem={({ item }) => (
           <ScrollView>
             <TouchableOpacity onPress={()=>navigation.navigate('ProductsPage',{item:item})}>
         <View style={[styles.itemContainer]}>
 <View> 
 <Image source={{uri:item.filterimage[0 ]}} style={{    height:itemContainerHeight-45,
     width:width/2.94,resizeMode:'contain', margin:7,    borderRadius: 5}}/>
 
 <Text style={{color:'#100c08',marginLeft:"5%",marginTop:"-2%",fontFamily:"NunitoSans-Bold",fontSize:15.5}}>{item.name}</Text>    
 
 
 
 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:"7%"}}> 
 {/* <View style={{backgroundColor:'#61CE70',width:"20%",height:25,marginLeft:"5%",borderRadius:5,marginBottom:0,marginTop:"-4%"}}>
    <Text style={{marginTop:"-2%",alignSelf:'center',fontWeight:'600',color:'white',fontSize:17,fontFamily:"TitilliumWeb-Regular",}} >{item.rating}</Text>     
 </View> */}
 <View style={{marginRight:"18%"}}>      
    <Text style={{alignSelf:'center',fontSize:16.5,color:'#dc143c',marginLeft:"10%",fontWeight:'600',fontFamily:"NunitoSans-Bold",marginTop:"-11%"}}>{"€"+item.price}</Text>
    </View>
 
    {/* ,color:'#080808' */}
   
 
 </View>
 </View>
    
    {/* <View style={{flexDirection:'row',alignSelf:'center'}}><Text style={{fontSize:11,fontFamily:"RobotoCondensed-Regular"}}>Health and Prevention</Text></View>
     */}
         </View>
         </TouchableOpacity>
         </ScrollView>
       )
     }
     />
 
 </View>
   </>
   );

 

 

 
}


const styles = StyleSheet.create({
    gridView: {
      marginBottom:0,
      flex: 1,
    margin:0,
    marginTop:"8%",
    marginLeft:"1%",
    backgroundColor:'#ffff', 
    width:width*85/100,
    
    },
    itemContainer: {
  
      borderRadius: 5,
      padding:0,
    alignSelf:'center',
      height:itemContainerHeight*1.25,
      width:width/2.66,
  borderWidth:1.2,
     // borderColor:'#dcdcdc',
      backgroundColor:'#fff',
  elevation:4,
      margin:0,
  borderColor:"#f8f8ff",
    //  borderColor:'#353839', 
      borderRadius:11,
  
  }
  
  
   
    
  
  });
  


export default Categoryproducts