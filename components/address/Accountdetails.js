import { View, Text ,TextInput,StyleSheet, Dimensions ,Pressable,TouchableOpacity} from 'react-native'
import React from 'react'
//import { color } from 'react-native-reanimated'
import { FontAwesome } from '@expo/vector-icons'
const {width,height}=Dimensions.get('window')
const Accountdetails = () => {
let activecolor
  return (

  <> 
 
  <View  style={{margin:15,width:width*95/100,alignSelf:'center',borderWidth:0.2,elevation:5,borderColor:'#dcdcdc',backgroundColor:'#fff',height:height*80/100,borderRadius:8,justifyContent:'space-evenly'}}>
    <Text style={{alignSelf:'center',fontSize:21}}>Account Details</Text>
<View style={{flexDirection:'row'}}>
<TextInput style={[styles.inputfield,{marginTop:25,justifyContent:'space-between',marginLeft:"5%"}]} placeholder='  First Name'   selectionColor={'green'} underlineColor={'green'} />
 
</View>
<View style={{flexDirection:'row'}}>
<TextInput style={[styles.inputfield,{justifyContent:'space-between',marginLeft:"5%"}]} placeholder='  Last Name'   selectionColor={'green'} underlineColor={'green'} />
  
</View>
    
    
      <TextInput style={styles.inputfield} placeholder='  Display Name'/>
      <TextInput style={styles.inputfield} placeholder='  Email address'/>
     <TouchableOpacity>
     <Text style={{padding:10,color:'#fff',fontSize:18,backgroundColor:'#0E4A86',marginTop:28,borderRadius:5,textAlign:'center',width:width*20/100,alignSelf:'center'}}>Submit</Text>
 
     </TouchableOpacity>
      
    </View>

  
  </>
  
  )
}
//position: 'absolute',zIndex:-1

const styles = StyleSheet.create({
    inputfield:{
       // backgroundColor:'#f8f8ff',
       marginTop:5, 
       borderRadius:6,
           padding:8,
         
          // backgroundColor:'#fffafa',
          // elevation:22,
         //  marginTop:15,
           width:width*85/100,
           alignSelf:'center',
           borderBottomWidth:1,
           borderBottomColor:'#c0c0c0',
      // borderBottomColor:!activecolor==='undefined'?activecolor:'#c0c0c0'
  //  borderBottomColor:'#0E4A86'
    }
    
})
export default Accountdetails