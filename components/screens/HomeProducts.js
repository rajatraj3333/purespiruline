

import React from 'react';
import { StyleSheet, View, Text, ScrollView,Dimensions,Image ,Button} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons'

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




  return (
    <>
  
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
    
      spacing={10}
      renderItem={({ item }) => (
   
        <View style={[styles.itemContainer]}>
        
        <View style={styles.contentContainer}>
  <Image source={item.url} style={{resizeMode:'contain',borderRadius:8, height:itemConatinerImageHeight, marginTop:"3.5%",width:itemConatinerImageWidth,alignSelf:'center',marginRight:15}} />

         

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

    borderRadius:8   ,
 
   }
});