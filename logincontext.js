import React from "react";
//const [users,Setuser]=React.useState('this message generated from context');

const userContext= React.createContext(null);
let users ='thisiscontext '


const updatedtext=(text)=>{
    users=text
}

export  {userContext,users,updatedtext};