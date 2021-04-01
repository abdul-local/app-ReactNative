import React from 'react'
import {View,Image,Text, TouchableOpacity} from 'react-native';

const StylingComponent=(props)=>{
    return(
      <View style={{
        width:305,
        height:401,
         backgroundColor:'#EFECEC',
         marginLeft:47,
         marginRight:62,
         marginTop:89,
         borderRadius:8
         
         }}>
        <Image 
        source={{uri:'http://placeimg.com/224/131/any'}}
        style={{width:224,height:131, marginTop:34,marginRight:41,marginLeft:40}}
        
        />
        <Text
        style={{
          marginTop:17,marginLeft:40,marginRight:40,
          fontSize:18,
           fontWeight:'bold'
        
        }}
        >Senggigi Vilage</Text>
        <Text
        style={{marginTop:17,marginLeft:40,marginRight:40,
          fontSize:16,
          color:'#CF9705'
        
        
        }}
  
        
        
        >Rp 700.000 / Night</Text>
        <Text
        style={{
          marginTop:17,
          marginLeft:40,
          marginRight:40,
          fontSize:14
  
        }}
        
        >Mataram,Lombok</Text>
        <View style={{marginLeft:40,marginRight:40,marginTop:17, backgroundColor:'#3CE9AB',
      borderRadius:8,marginBottom:72
      
      }}>
        <TouchableOpacity onPress={props.click} >
        <Text style={{
            textAlign:'center',
            marginLeft:40,
            marginRight:40,
            marginTop:8,
            marginBottom:8
  
          }}>Beli</Text>

        </TouchableOpacity>

          


        </View>
  
    
  
  
        {/* <Text style={style.text}>ini tulisan saja broo</Text>
        <View 
        style={{
          width:100
          ,height:100, 
          backgroundColor:'#3ce0da',
          borderWidth:2,
          borderColor:'#cecece',
          marginTop:20,
          marginLeft:20
          
  
          
          }} /> */}
      </View>
    )
  }
  
  export default StylingComponent;