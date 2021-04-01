import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Position from '../component/Position'
import StylingComponent from '../component/StylingComponent'

const Comunication = () => {
    const [number,setNumber]=useState(0);
    return (
        <View>
            <Text style={styles.wrap}>Materi Comuniaction antar Component</Text>
            <Position 
              number={number}
            
            />
            <StylingComponent
             click={()=>{

                //  alert('hello Abdul');
                setNumber(number+1);

             }}
            />
        </View>
    )
}

export default Comunication

const styles = StyleSheet.create({
    wrap:{
        textAlign:'center',
        padding:10
    }
})
