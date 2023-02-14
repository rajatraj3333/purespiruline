import React, { useState } from "react";
import { FlatList, View,SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity ,Image, Dimensions} from "react-native";


const IMGDATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53ab28ba",
    title: "First Item",
    img:require('../../assets/images/carsoul/ap1.png')
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91a97f63",
    title: "Second Item",
    img:require('../../assets/images/carsoul/ap2.png')
  },
  {
    id: "58694a0f-3da1-471f-bd96-14571e29d72",
    title: "Third Item",
    img:require('../../assets/images/carsoul/ap3.png')
  
},
{
    id: "58694a0f-3da1-471f-bd96-14571e2972",
    title: "Third Item",
    img:require('../../assets/images/carsoul/ap4.png')
  
},


];

;

const ImageShows = ({dotssize}) => {

    const Changedotspoint=(dotarray)=>{

        // for (let [key, value] of Object.entries(dotarray)) {
        //     console.log(`${key}: ${value}`);
        //   }

dotarray.viewableItems.map((items)=>SetactiveIndex(items.index))

       // undefined console.log(dotarray[0].index);
    
    }

const [activeIndex,SetactiveIndex] =useState(1);
const onViewRef = React.useRef((viewableItems)=> {
    Changedotspoint(viewableItems)
    // Use viewable items in state or as intended
})     
const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  return (
 <>  
 

    <View style={styles.container}>
  
      <FlatList
        data={IMGDATA}
renderItem={({item})=>(
  
<Image source={item.img} style={{height:Dimensions.get('screen').height*25/100,width:Dimensions.get('screen').width,resizeMode:'stretch',marginTop:0}}/>

 
)}
horizontal
onViewableItemsChanged={onViewRef.current}
viewabilityConfig={viewConfigRef.current}
showsHorizontalScrollIndicator={false}
     snapToInterval={Dimensions.get('screen').width-1} 
     snapToAlignment={'center'}
     decelerationRate={'fast'} 
    // viewabilityConfig={{
    //     viewAreaCoveragePercentThreshold:65,
       
    // }}  
       
    // onViewableItemsChanged={({viewableItems})=>{
    // viewableItems.map((item)=>SetactiveIndex(item.index))  
    // }} 



      />  
     
{dotssize==='rect'?

<View style={styles.dot}>

 <View style={styles.dots}>   
 

 {IMGDATA.map((image,index)=>(
   <View style={{
 
    backgroundColor:index===activeIndex?'#080808':'#f8f8ff',
    width:9,
     height:7,
      borderRadius:50,
     borderWidth:0.5,
     margin:5,
     }} 
     />
 ))}
  </View>
 


 </View>

:


<View style={styles.dot}>


<View style={styles.dots}>   
 

{IMGDATA.map((image,index)=>(
  <View style={{

backgroundColor:index===activeIndex?'#080808':'#f8f8ff',

     width:9,
     height:7,
      borderRadius:50,
     borderWidth:0.5,
     margin:5,
     //marginTop:"12%"
    }} 
    />
))}
 </View>



 </View>






}


     
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
marginTop:"5%",
position:'relative'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  dots:{
      flexDirection:'row',
      justifyContent:'center',
      marginBottom:"10%"
  },
  dot:{

//       width:${dotssize==='rect'?35:15},
//       height:dotssize==='rect'?8:12,
       borderRadius:25,
       borderWidth:0.01,
     position:'absolute',
// margin:5
//backgroundColor:'#f8f8ff',
alignSelf:'center',
marginTop:"-4.1%",
height:15,
justifyContent:'flex-start',
//elevation:12,
position:'relative'
  }
});

export default ImageShows;








// const getProducts=()=>{

//   axios.get('https://purespiruline.com/wp-json/wc/v3/products?per_pae=100&consumer_key=ck_c8cb1b136820183c176844b843873d52be83a018&consumer_secret=cs_5bffc61431c151bb6bae817caaa662944d0fac60').then((resp)=>{

//     Setproducts(resp.data)
//     }).catch(err=>console.log(err))
    
// }
