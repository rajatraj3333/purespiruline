// import { View, Text,StyleSheet,Dimensions ,FlatList} from 'react-native'
// import React,{useState} from 'react'


// let  width = Dimensions.get('screen').width;
// let height = Dimensions.get('screen').height;
// const wrapperHeight = height*95/100;
// let productsdetails;
// let tottalproductheight;
// let categoryHeight;
// {height>850?tottalproductheight=height*40/100:tottalproductheight=height*60/100}

// {height>850?productsdetails=tottalproductheight*20/100:productsdetails=tottalproductheight*30/100}

// const wrapperwidth= width*85/100;
// {height>850? categoryHeight = wrapperHeight*25/100: categoryHeight = wrapperHeight*32/100}

// const HomeProducts = () => {

    
//   const [title,Settitle] =useState([
//     {
//     id:1,
//     name:"'Omega3'"
//     },
//     {
//     id:2,
//     name:"Pyco Gel"
//     },
//     {
//     id:3,
//     name:"Pain Patch"
//     },
//     {
//     id:4,
//     name:"Energy Drinks"
//     }
    
//       ]);
//     console.log(title)
    
//     const Products =({text})=>{
//         return(
//         <View style={styles.totalproducts}>
        
        
//         <View style={styles.productdetails}>
//         <Text>{text}</Text>
//         </View>
        
//         </View>
//         )
//         }

//   return (
 
// <FlatList style={{margin:5}}
//   data={title}
//   numColumns={2}
//   keyExtractor={(title, index) => title.id }
//   renderItem={(title) => <Products text={title.name}/> }
// />

//   )
// }

// const styles = StyleSheet.create({

//     totalproducts:{
//       height:"20%",
//         backgroundColor:'#fff',
//         borderRadius:8,
//         width:wrapperwidth,
//         marginTop:wrapperHeight*2/100
//       },
//       productdetails:{
      
//         borderWidth:1.8,
//       borderColor:'#c9c0bb',
//       height:productsdetails,
//       width:wrapperwidth*36.5/100,
//       margin:wrapperwidth*5/100
//       }

// })
// export default HomeProducts


import React from 'react';
import { StyleSheet, View, Text, ScrollView,Dimensions,Image ,Button} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons'
//import AppLoading from 'expo-app-loading';
//import { useFonts } from 'expo-font';

let  width = Dimensions.get('screen').width;
let height = Dimensions.get('screen').height;
let wrapperWidth= width*85/100
let itemConatinerImageWidth;
let itemConatinerImageHeight;
let itemContainerHeight;
let itemConatinerWidth ;


{height>1050?itemContainerHeight=height*10/100:itemContainerHeight=height*20/100}

{width>450?itemConatinerWidth=width*15/100:itemConatinerWidth=width*33/100}
{height>1050?itemConatinerImageHeight=itemContainerHeight*65/100:itemConatinerImageHeight=itemContainerHeight*78/100}

{width>450?itemConatinerImageWidth=itemConatinerWidth*60/100:itemConatinerImageWidth=itemConatinerWidth*90/100}
console.log(itemConatinerImageHeight)
console.log(`itemheight`,itemContainerHeight)
export default function HomeProducts({heights}) {
console.log(`height from console ${height}`)
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE',  url:require('../../assets/images/productimage/p11.png'),pirce:'$80' },
    { name: 'EMERALD',  url:require('../../assets/images/productimage/p8.png'),pirce:'$80'},
    { name: 'PETER RIVER',   url:require('../../assets/images/productimage/p13.png'),pirce:'$80'},
    { name: 'AMETHYST',   url:require('../../assets/images/productimage/p4.png'),pirce:'$80'},
    { name: 'WET ASPHALT',  url:require('../../assets/images/productimage/p14.png'),pirce:'$80' },

    { name: 'EMERALD',  url:require('../../assets/images/productimage/p6.png'),pirce:'$80' },

    
    

  ]);

  // let [fontsLoaded] = useFonts({
  //   'RobotoCondensed-Regular': require('../../assets/fonts/RobotoCondensed-Regular.ttf'),
  //   'Dosis-Light':require('../../assets/fonts/Dosis-Light.ttf'),
  //   'TitilliumWeb-Light':require('../../assets/fonts/TitilliumWeb-Light.ttf'),
  //   'TitilliumWeb-Regular':require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
  //   ,fontFamily:"TitilliumWeb-Regular"
  
  // });
  
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }
  


  return (
    <>
  
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
   
        <View style={[styles.itemContainer]}>
          {/* s */}
          {/* <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
         itemConatinerImageWidth
itemConatinerImageHeight
         */}
        <View style={styles.contentContainer}>
  <Image source={item.url} style={{resizeMode:'contain',borderRadius:8, height:itemConatinerImageHeight, marginTop:"3.5%",width:itemConatinerImageWidth,alignSelf:'center',marginRight:15}} />
  {/* < MaterialIcon name='heart-outline'size={25} style={{backgroundColor:'#c4aead',padding:4,marginLeft:wrapperWidth*28/100,position:'absolute',justifyContent:'flex-end',borderRadius:50 }} />
         */}
         

         <Text style={{alignSelf:'center',marginTop:-10}}>{item.name}</Text>
         
         <View style={{flexDirection:'row'}}> 
         <Text style={{color:'green',marginLeft:"10%",marginBottom:20}}>{item.pirce}</Text>
         
         <Text style={{color:'red',marginLeft:"25%"}}>-10%</Text>
         </View>
 
        </View>
    
        </View>
      

      )
    }
    />
    
  </>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginBottom:0,
    flex: 1,
  margin:10
  ,marginTop:"8%",
  marginLeft:"20%",
  backgroundColor:'#ffff', 
  width:wrapperWidth
  },
  itemContainer: {
   justifyContent: 'flex-end',
    borderRadius: 5,
    padding:5,
    alignSelf:'center',
  //  margin:wrapperWidth*2.2/100,
    // height: height*22/100,
    height:itemContainerHeight,
    borderWidth:3,
width:itemConatinerWidth,
    borderColor:'#c9c0bb', 
    borderRadius:8,
    marginLeft:25
}
  ,
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  contentContainer:{
  
 height:itemContainerHeight,
 width:itemConatinerWidth,
 //marginBottom:"28.5%",
    borderRadius:8   ,
   //  borderWidth:1.8,
   //  borderColor:'#c9c0bb',
   }
});