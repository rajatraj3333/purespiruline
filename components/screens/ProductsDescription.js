import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';

const ProductsDescription = ({route}) => {
    let brand
    const desc= route.params.desc.desc

    const model = route.params.desc.model
route.params.desc.brand.map((ele)=> brand= ele) 



    const source = {
        html: `${desc}
        <style>
        body {
          background-color: linen;
        }
        
        h2 {
          color: maroon;
           margin-left: 40px;
        }
        </style> 
        
<h2 style="font-size:20;color:maroon;   text-align:center;">Brands</h2>

<table>

  <tr style="  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-size:20;
  ">
    <td>Brands</td>
    <td>${brand}</td>
   
  </tr>
  <tr style="border: 1px solid #dddddd;

  padding: 8px;
  background-color:#dddddd;

  ">
    <td>model</td>
    <td>${model}</td>
    
  </tr>


  
</table>
        
        
        
        
        
        
        
        
        
        
        
        `
      };
          
    const { width } = useWindowDimensions();
 


  //  console.log(desc)
  return (
<ScrollView> 
        <RenderHtml
          contentWidth={width}
          source={source}
          enableExperimentalMarginCollapsing={true}
        />
</ScrollView>
  )
}

export default ProductsDescription











