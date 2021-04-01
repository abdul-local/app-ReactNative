import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const CallApiAxios = () => {
    const [user,SetUser]=useState({
        avatar:'',
        email:'',
        first_name:'',
        last_name:''

    })
    const [datajob,setDatajob]=useState({
        name:'',
        job:''
    })
    const getData=()=>{
        Axios.get('https://reqres.in/api/users/2')
        .then(result=>{
            console.log(result.data)
            SetUser(result.data.data)
        }
            )
        .catch(error=>{
            console.log(error);
        })
        // fetch('https://reqres.in/api/users/2')
        // .then(response=>response.json())
        // .then(json=>{
        //     console.log('get data',json);
        //     SetUser(json.data);

        // })
    }
    const dataAPI={
            name:'abdul',
            job:'mentor BWA'
        };
    const postData=()=>{
        const url='https://reqres.in/api/users';
            
        Axios.post(url,dataAPI)
        .then(result=>{
            console.log(result.data);
            setDatajob(result.data);
        }).catch(err=>{
            console.log(err);
        })

    //     fetch('https://reqres.in/api/users',{
    //      method:'POST',
    //      headers:{
    //             'Content-Type':'application/json'
    //       },
    //         body:JSON.stringify(dataAPI)
    //     }).
    //     then(response=>response.json())
    //     .then(json=>{

    //         console.log(json);
    //         setDatajob(json)
            
    // })
}
    return (
        <View>
            <Text style={styles.titleText}>Materi Memanggil Api dengan library Axios</Text>
            <Button  title="GET" onPress={getData} />
            <Text style={{
                marginTop:20,
                textAlign:'center',

            }}>Response get data</Text>
            <View style={{marginTop:10 ,alignItems:'center'}}>
                {user.avatar.length >0 && (
                <Image 
                source={{uri:user.avatar}}
                style={{height:100, width:100, borderRadius:50}}
                />
                )}
           
            <Text>{`${user.first_name} ${user.last_name}`}</Text>
            <Text>{user.email}</Text>
            </View>
          
            <View style={{marginTop:10}}>
                <Button title="POST" onPress={postData}/>
                <View style={{alignItems:'center'}}>

                <Text style={{marginBottom:10}}>Response data Post</Text>
                <Text>{datajob.name}</Text>
                <Text>{datajob.job}</Text>
                </View>
             
            </View>
           
       
        </View>
    )
}

export default CallApiAxios;

const styles = StyleSheet.create({
    titleText:{
        margin:20,
        textAlign:'center'
    }
})
