import React from 'react'
import {Image, View, Text, StyleSheet } from 'react-native'
import icon_cities from '../assets/icons/icon_cities.png'

const Position = (props) => {
    return (
        <View style={{
            padding:20,
            alignItems:'center'
        }}>
        <View style={{
             borderWidth:2,
             borderColor:'#6b6767', 
               width:90,
              height:90, 
              borderRadius:45,
              flexDirection:'row',
              justifyContent:'center',
              position:'relative',
              top:0,
              right:5
              
              }}>
            {/* <Text>Materi Position pada React Native</Text> */}
            <Image 
            source={icon_cities}
            style={styles.iconCart}
            />
            <View style={{ 
                backgroundColor:'green',
                width:20,
                height:20 , 
                borderRadius:10,
                position:'absolute',
                top:5,
                right:15
                }}>
            <Text
            style={{
              color:'white',

            }}
            
            >{props.number}</Text>
            </View>
            
        </View>
        <Text style={styles.kiri}>place favorite</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    iconCart:{
        marginTop:20,
        width:50,
        height:50
    },
    kiri:{
        marginLeft:5

    }
})

export default Position;
