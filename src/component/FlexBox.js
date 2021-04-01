import React,{useEffect, useState} from 'react'
import { View,Text, Image } from 'react-native'

const FlexBox=()=>{
    const[subscribe,setSubscribe]=useState(200);
    useEffect(()=>{
        console.log('did mount');
        
        setTimeout(()=>{
            setSubscribe(400);
        },5000)
        return ()=>{
            console.log('did update');
        }
            
        
    },[subscribe])

    // bisa di sederhanakan juag

    // useEffect(()=>{
    //     console.log('did update');
    //     setTimeout(()=>{
    //         setSubscribe(400);
    //         console.log('berhasil melakukan update');

    //     },500)
    // },[subscribe])


    return (
        <View>
        <View style={{
            flexDirection:'row',
            backgroundColor:'#f2b5b5',
            alignItems:'center',
            justifyContent:'space-between' 
            
            }}>

        <View style={{backgroundColor:'red', width:50,height:50}}/>
        <View  style={{backgroundColor:'yellow', width:50,height:50}}/>
        <View  style={{backgroundColor:'green', width:50,height:50}}/>
        <View  style={{backgroundColor:'blue', width:50,height:50}}/>
        </View>
        <View 
        style={{
            marginTop:20,
            flexDirection:'row',
            justifyContent:'space-around'



        }}>
            <Text>HOME</Text>
            <Text>VIDEOS</Text>
            <Text>PLAYLIST</Text>
            <Text>COMUNITY</Text>
            <Text>ABOUT</Text>
         
        

        </View>
        <View style={{
                flexDirection:'row',
                marginTop:20
                
            }}>
            <Image
            
            source={{uri:'http://placeimg.com/100/100/tech'}}
            style={{width:100,height:100,borderRadius:50}}
            
            
            />
            <View style={{
                
                flexDirection:'column',
                marginLeft:20,
                justifyContent:'center'
                
                
                }}>
              
              <Text

              style={{
                  fontSize:20,
                  fontWeight:'bold'
              }}
              
              >Channel Youtube Abdul</Text>
              <Text>{subscribe} rb subscribe</Text>

            </View>

            </View>


        </View>
    )
}
export default FlexBox;