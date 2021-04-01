import React, { Component, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Counter =()=>{
    const [tambah,setTambah]=useState(0);
   return (
     <View>
    <Text style={styles.wrrapp}>{tambah}</Text>
    <Button  title="Tambah"  onPress={()=>{
        setTambah(tambah+1);
    }}/>
    </View>
    )
    
}
class CounterClass extends Component {
    state={
        number:0
    }
    render(){
        return (
            <View>
          <Text style={styles.wrrapp}>{this.state.number}</Text>
          <Button  title="Tambah" onPress={()=>{
            //   alert('Hellow ini classComponent');
            this.setState({number:this.state.number + 1});
          }}/>
            </View>
        )
    }
}
const StateDinamis = () => {
  
    return (
        <View>
            <Text style={styles.wrrapp}>Belajar Component State Dinamis</Text>
            <Counter />
            <Counter />
            <Counter />
            <CounterClass />
        </View>
    )
}

export default StateDinamis

const styles = StyleSheet.create({
    wrrapp:{
        textAlign:'center'
    }
})
