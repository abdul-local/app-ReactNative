import React from 'react'
import {Image} from 'react-native'
// buat component function image
const Photo=()=>{
    return (
      <Image source={{uri:'http://placeimg.com/100/100/tech'}}
  
      style={{width:100,height:100, borderRadius:50}}
  
      
      />
    )
  }
  
  export default Photo;