import React from 'react'
import {View,Text,TextInput} from 'react-native'
import Tampilan from '../component/Tampilan'
import Photo from '../component/Photo'
import Profile from '../component/Profile'
import Abdul from '../component/Abdul'


const SampleComponent=()=>{
    return (
      <View >
      <View style={{height:100,width:100, backgroundColor:'red'}}/>
      <Text>Hello word</Text>
     <Text>Muhammad abdulloh hamzan</Text>
     <Tampilan />
     <Photo />
     <TextInput 
     style={{borderWidth:1, margin:6}}
     />
     <Abdul />
  
     <Profile />
    </View>
    )
  }
  
  export default SampleComponent;