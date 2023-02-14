     
       import AsyncStorage from "@react-native-async-storage/async-storage";
export default async function getdata(){
    const values =''
    try {
   
let details  = []

  const  tokenfetch = await AsyncStorage.getItem('token');
  
  const  usernamefetch  = await AsyncStorage.getItem('user_name')
  
  
  const useremailfetch = await AsyncStorage.getItem('user_email')
       //  console.log('no token valued')
  

     if(tokenfetch&&usernamefetch&&useremailfetch!='undefined')  details.push({token:tokenfetch},{username:usernamefetch},{useremail:useremailfetch})
else{
    details.push({token:null})
}

return details;
       


      
     } catch(e) { 
       return 'some thing Wrong!'
     }
  
  console.log(values.token)
    } 
