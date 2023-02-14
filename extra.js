{height>950?<View style={{flexDirection:'row',backgroundColor:'cyan',height:height*2/100}}></View>:<View style={{flexDirection:'row',backgroundColor:'cyan',height:height*3/100}}></View>}
 
   
{height<750?<View style={{flexDirection:'row',backgroundColor:'yellow',height:height*4/100}}></View>:<View style={{flexDirection:'row',backgroundColor:'yellow',height:height*3/100}}></View>}
<View style={{flexDirection:'row'}}> 


<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} > 
{width>600?<View style={{borderWidth:1,width:width*33.33/100,height:height*14/100,marginTop:height*2/100,borderRadius:5}}></View>
:<View style={{borderWidth:1,width:width*60/100,height:height*14/100,marginTop:height*2/100,borderRadius:5}}></View>
}

{width>600?<View style={{borderWidth:1,width:width*33.33/100,height:height*14/100,marginTop:height*2/100,borderRadius:5}}></View>
:<View style={{borderWidth:1,width:width*60/100,height:height*14/100,marginTop:height*2/100,marginLeft:width*2/100,borderRadius:5}}></View>
}


{width>600?<View style={{borderWidth:1,width:width*33.33/100,height:height*14/100,marginTop:height*2/100,borderRadius:5}}></View>
:<View style={{borderWidth:1,width:width*60/100,height:height*14/100,marginTop:height*2/100,marginLeft:width*2/100,borderRadius:5}}></View>
}


{width>600?<View style={{borderWidth:1,width:width*33.33/100,height:height*14/100,marginTop:height*2/100,borderRadius:5}}></View>
:<View style={{borderWidth:1,width:width*60/100,height:height*14/100,marginTop:height*2/100,marginLeft:width*2/100,borderRadius:5}}></View>
}
</ScrollView>
{/* 
<View style={{borderWidth:1,width:width*40/100,height:height*14/100,marginTop:height*2/100}}>
  
</View> */}

</View>
</View>