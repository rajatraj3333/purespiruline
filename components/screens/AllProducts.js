
import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, View, Text, ScrollView,Dimensions,Image ,Button} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import axios from 'axios'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {userContext} from '../../logincontext';

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
export default function AllProducts({heights,navigation}) {

  const users=useContext(userContext);


console.log(users.users)

// console.log(DataArray);
// DataArray.forEach((ele,index)=>{
//   console.log(`id=${index}${ele.name}`)
// })

 
// console.log(`height from console ${height}`)

const [items, setItems] = React.useState([
    { name: 'Phyco 10 Gel',  url:require('../../assets/images/productimage/p11.png'),pirce:'47',rating:'4.2' },
    { name: 'Omega 3 Marine',  url:require('../../assets/images/productimage/p8.png'),pirce:'59',rating:'4.5'},
    { name: 'Spirulina Gel',   url:require('../../assets/images/productimage/p13.png'),pirce:'44',rating:'4.8'},
    { name: 'Essen,ciel  Breath',   url:require('../../assets/images/productimage/p4.png'),pirce:'39',rating:'4.4'},
    { name: 'Curcumin Gel',  url:require('../../assets/images/productimage/p14.png'),pirce:'38',rating:'4.1' },
 
    { name: 'Essen,ciel Provence',  url:require('../../assets/images/productimage/p6.png'),pirce:'47' ,rating:'4'},
    { name: 'Phyco 10 Gel',  url:require('../../assets/images/productimage/p11.png'),pirce:'47',rating:'4.2' },
    { name: 'Omega 3 Marine',  url:require('../../assets/images/productimage/p8.png'),pirce:'59',rating:'4.5'},
    { name: 'Spirulina Gel',   url:require('../../assets/images/productimage/p13.png'),pirce:'44',rating:'4.8'},
    { name: 'Essen,ciel  Breath',   url:require('../../assets/images/productimage/p4.png'),pirce:'39',rating:'4.4'},
    { name: 'Curcumin Gel',  url:require('../../assets/images/productimage/p14.png'),pirce:'38',rating:'4.1' },

    { name: 'Essen,ciel Provence',  url:require('../../assets/images/productimage/p6.png'),pirce:'47' ,rating:'4'},

    
     

   ]);



   const [products,Setproducts]=useState([])


const [isloading,SetisLoading]=useState(true)
 


   useEffect(()=>{
    GetProductsFromApi()
 
    setTimeout(()=>{
      SetisLoading(false)
    },2000)

      },[])
       

function GetProductsFromApi(){

axios.get('https://purespiruline.com/wp-json/wc/v3/products/?per_page=99&consumer_key=ck_c8cb1b136820183c176844b843873d52be83a018&consumer_secret=cs_5bffc61431c151bb6bae817caaa662944d0fac60')

.then(async function (response){
//console.log("retutn by woocomerce"+response.data.name);
//console.log(response.data) 
Setproducts(response.data);
//console.log(response.data) 
}).catch(function(err){
console.log("error"+err)  
})

}



//console.log(products)

 let DataArray=[]
 
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
  
 
 DataArray.push(prices);
 
 });
 



//
 //DataArray.map((ele)=>{
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

  if(isloading) {

    return(
      <View style={{backgroundColor:'#fff'}}> 

     <View style={{height:height,width:width,justifyContent:'center',alignItems:'center'}}>
         <Image 
        source={require('../../assets/images/Reload-1.3s-31px.gif')}
        style={{resizeMode:'contain',marginTop:"-50%"}}
        />
    
        </View>
        </View>
        )
  }



  else{
  return (
    <>
        <Text>{users.users}</Text>
<Button title='Click' onPress={users.updatedtext('updated')}></Button>

    <View style={{ alignSelf:'center',marginTop:-14}}> 

    <FlatGrid
      itemDimension={110}
      data={DataArray}
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



















// <Image source={item.url} style={{resizeMode:'contain',borderRadius:8, height:itemConatinerImageHeight, marginTop:"0%",width:itemConatinerImageWidth+80,alignSelf:'center',marginRight:15}} />
// {/* < MaterialIcon name='heart-outline'size={25} style={{backgroundColor:'#c4aead',padding:4,marginLeft:wrapperWidth*28/100,position:'absolute',justifyContent:'flex-end',borderRadius:50 }} />
//        fontFamily:"TitilliumWeb-Regular"

//        */}
       
       

//        <Text style={{alignSelf:'center'}} numberOfLines={1}>{item.name}</Text>
       
//        <View style={{flexDirection:'row'}}> 
//        <Text style={{color:'green',marginLeft:"10%",marginBottom:20}}>{item.pirce}</Text>
       
//        <Text style={{color:'red',marginLeft:"25%"}}>-10%</Text>
//        </View>
