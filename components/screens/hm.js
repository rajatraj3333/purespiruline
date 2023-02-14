
const route = useRoute()


const [tokens,Settokens]=useState()

  const [username,Setusername]=useState()
  
  const [email,Setemail]=useState()
   
const [search1,Setsearch1]=useState()


 const navigation = useNavigation()

 const {reterivetoken}= useContext(AuthContext)
  const [searchindex,Setsearchindex]=useState()
 let  searcharray =[]


  useEffect(()=>{
 
//  setTimeout(()=>{
  getdetails()
  
//  },100)
   
   // console.log("homekey"+reterivetoken()) 
 
  getdata()
  Setsearch('')
  fetchgetdata() 


  Setsearch1(setinitialdata())


  },[]) 

 

// useEffect(()=>{
//   Setsearch1(setinitialdata())

// })


const setinitialdata = ()=>{
 const data= DataArray.map((ele)=>ele.name)
    
 return data

}


//console.log(search1)



const getdetails=async()=>{
  Settokens(await AsyncStorage.getItem('token'))
  Setusername(await AsyncStorage.getItem('user_name'))
  Setemail(await AsyncStorage.getItem('user_email'))
   
  console.log("tokens"+tokens)
  console.log("username"+username)
  console.log("email"+email)
   

}






const [searchs,Setsearch]=useState('')


  const [boxshown,Setboxshown]= useState(false)

const [DATA,SETDATA]=useState()

let token 

const [changed,Setchanged]=useState(0)






const [results,Setresults]=useState('')

const [fetchdata,Setfetchdata]=useState([])
 const [details,Setdetails]= useState([])

const [searchitem,Setsearchitem] =useState()


const [Filter,SetFilter]=useState(null)



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
  axios.get('https://purespiruline.com/wp-json/wc/v3/products/?per_page=100&consumer_key=ck_c8cb1b136820183c176844b843873d52be83a018&consumer_secret=cs_5bffc61431c151bb6bae817caaa662944d0fac60')
  .then(async function (response){
  
 let res =  response.data.map((elef)=>elef)

Setfetchdata(res)
  //console.log(response.data) 
  }).catch(function(err){
  console.log("error"+err)  
  })
  
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

//Settitle(test);
 
switch(height){


  case height>1050:
  increaseappHeight=height-200;
break;
case height<1050:
  increaseappHeight=height+200
break;

}
//  console.log("tokenshome"+token)
 //console.log("usernamehome"+username)
 //console.log("usernamehome"+email)
const search=(e)=>{
Setsearch(e)

if(e.length>2) Setboxshown(true)
if(e.length<3) Setboxshown(false)



}



const statechanged =()=>{
  Setchanged(changed+1)
}
console.log(changed)
 
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

Setsearchindex(d.findIndex((ele)=>ele===true))
 console.log("findinde"+d.findIndex((ele)=>ele===true))

 SetFilter(DataArray[searchindex])

}

console.log(searchindex)
// let testitem =[]


// testitem.push(DataArray[searchindex])
console.log("Filter"+Filter)

// console.log(testitem)

tokens==='null'?Settokens(null):''
  return (
  <>     
  {/* #f5f5f5 */} 
  
  <ScrollView style={{backgroundColor:'#f3f5f7',marginTop:"4%"}} > 
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




{boxshown?
 <View style={{width:width*86/100,backgroundColor:'#fff',zIndex:1,position:'absolute',marginTop:"34%",height:height*20/100,borderWidth:0.8,borderColor:'#d4d4d4',borderRadius:5,marginLeft:"-2%"}}>




 <ScrollView> 


 <>
{Filter===null||Filter===undefined?<TouchableOpacity>

<Text style={{marginTop:"5%",fontSize:16.5,fontFamily:'NunitoSans-Bold'}}>No Item Found</Text>

</TouchableOpacity>:

<TouchableOpacity  onPress={()=>navigation.navigate('ProductsPage',{item:Filter}) }  >

<Text style={{marginTop:"5%",fontSize:16.5,fontFamily:'NunitoSans-Bold'}}>{Filter.name}</Text>

</TouchableOpacity>


}


</>

{/* 

 <FlatList data={DataArray[17]} 
 

keyExtractor={(item, index) => 'key'+index}
 renderItem={({item})=>(
 <> 

 



 </>
  )}/> */}
      </ScrollView>

 












































   </View>

  :<Text></Text>}









{/* ,fontFamily:" NunitoSans-SemiBold" */}

<View style={styles.category}>
  <Text style={{fontSize:24,marginLeft:wrapperwidth*2/100,marginTop:wrapperHeight*1/100,fontFamily:"NunitoSans-Bold",fontWeight:'bold'}}>Category</Text>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

<TouchableOpacity onPress={()=>navigation.navigate('Categoryproducts',{title:'Detox'})}>
<View style={styles.categories}> 
<Image  style={styles.categoryimg}source={require('../../assets/images/icons/1.png')}/>
<Text style={styles.categorytitle}>Detox</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>navigation.navigate('Categoryproducts',{title:'Health Prevention'})}>
<View style={styles.categories}>

   <Image  style={styles.categoryimg}source={require('../../assets/images/icons/4.png')}/>
   <Text style={styles.categorytitle}>Omega 3</Text>
   </View>
</TouchableOpacity>

 

<TouchableOpacity onPress={()=>navigation.navigate('Categoryproducts',{title:'Probiotics'})}>

<View style={styles.categories}> 
 
<Image  style={styles.categoryimg}source={require('../../assets/images/icons/3.png')}/>
     <Text style={styles.categorytitle}>Probiotics</Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity onPress={()=>navigation.navigate('Categoryproducts',{title:'Other Products'})}>

<View style={styles.categories}>

   <Image  style={styles.categoryimg}source={require('../../assets/images/icons/5.png')}/>
   <Text style={styles.categorytitle}>Body</Text>
   </View>
   </TouchableOpacity>


   <TouchableOpacity onPress={()=>navigation.navigate('Categoryproducts',{title:'Health Prevention'})}>

   <View style={styles.categories}>

  
<Image  style={styles.categoryimg}source={require('../../assets/images/icons/6.png')}/>
<Text style={styles.categorytitle}>Health and Prevention</Text>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('Categoryproducts',{title:'Fitness and Energy'})}>

   <View style={styles.categories}>

  
<Image  style={styles.categoryimg}source={require('../../assets/images/icons/2.png')}/>
<Text style={styles.categorytitle}>Fitness and Energy</Text>
</View>
</TouchableOpacity>

</ScrollView>



<View style={styles.categorybtnview}>

<Text style={styles.categorybtn}>See All Products</Text>

</View>

</View>


<LandingImage dotssize={'rect'} />
{/* <ProductsShowCase /> */}


{/* Show case end */}



{/* Add Above Not Below  */}
{/* <Text  style={{padding:8,backgroundColor:'cyan',borderRadius:8,alignSelf:'center',marginTop:"3.5%",backgroundColor:'green',color:'#ffff'}}  onPress={()=>{navigation.navigate('AllProducts')}}>See Products</Text> */}

{/* <View style={styles.categorybtnview}>

<Text style={styles.categorybtn}  onPress={()=>{navigation.navigate('AllProducts')}}>See All Products</Text>

</View> */}


</View>

<View style={{width:width*85/100,backgroundColor:'#fff',alignSelf:'center',borderRadius:8,marginTop:"5%"}}>
<Text style={{fontSize:20,marginTop:20,marginLeft:"3%",fontFamily:"NunitoSans-Bold",fontWeight:'bold'}}> Best Health Prevention</Text>

<AllProducts heights={height} navigation={navigation} route={route} />
<View style={styles.categorybtnview2}>

<Text style={styles.categorybtn}  onPress={()=>{navigation.navigate('AllProducts')}}>See All Products</Text>

</View>

</View>



</ScrollView>


{/* <ScrollView>



</ScrollView> */}

</>
  
  )
