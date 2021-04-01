
import React,{Component} from 'react'
import {View,Image,Text} from 'react-native'
class Profile extends Component {
    render(){
      return (
        <View>
        <Image 
  
        source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png'}}
        style={{width:100,height:100}} 
        />
  
        <Text style={{color:'blue'}}>Ini Boneka Cantik </Text>
  
        </View>
      )
    }
  }

  export default Profile;
  