import { View, Text ,StyleSheet,Dimensions,ScrollView,Image} from 'react-native'
import React from 'react'
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

const headerRightMargin = wrapperwidth*5/100;
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

console.warn(`Width${width}--Height${height}`)

const ProductsShowCase = () => {
  return (


<View style={styles.showcase}>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 

{/* <View style={[styles.showcaseImg,{  marginLeft:wrapperwidth*5/100}]}> */}

{/* style={{resizeMode:'contain',height:showcaseheight,width:wrapperwidth*75/100}} */}

<Image source={require('../../assets/images/carsoul/ap1.png')}  style={[styles.showcaseImg,{  marginLeft:wrapperwidth*5/100}]} />

<Image source={require('../../assets/images/carsoul/ap2.png')}  style={[styles.showcaseImg,{  marginLeft:wrapperwidth*5/100}]} />

<Image source={require('../../assets/images/carsoul/ap3.png')}  style={[styles.showcaseImg,{  marginLeft:wrapperwidth*5/100}]} />

<Image source={require('../../assets/images/carsoul/ap4.png')}  style={[styles.showcaseImg,{  marginLeft:wrapperwidth*5/100}]} />

{/* </View> */}

</ScrollView>

</View>

  )
}


const styles = StyleSheet.create({

    showcase:{
        flexDirection:'row',
        height:showcaseheight,
        width:wrapperwidth,
        borderRadius:8,
        
        backgroundColor:'#fff',
        marginTop:wrapperHeight*2/100
        },
        showcaseImg:{
        marginLeft:wrapperwidth*0/100,
        marginRight:wrapperHeight*2/100,
        marginTop:showcaseheight*15/100,
        borderWidth:1.8,
        borderColor:'#c9c0bb',
        height:showcaseheight*70/100,
        width:showcaseimgwidth,
        borderRadius:8
        },

})

export default ProductsShowCase