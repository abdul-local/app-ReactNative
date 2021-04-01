import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const CallApi = () => {
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
    useEffect(()=>{
        // dengan method GET

        // fetch('https://reqres.in/api/users')
        // .then(response => response.json())
        // .then(json => console.log(json))
        
        // dengan method POST
        // const dataAPI={
        //     name:'abdul',
        //     job:'mentor BWA'
        // };
        // console.log('data stringify',JSON.stringify(dataAPI));
        // console.log('data berbentuk object',dataAPI);
        // fetch('https://reqres.in/api/users',{
        //     method:'POST',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(dataAPI)
        // }).then(response=>response.json()).then(json=>{
        //     console.log('hasil yang sudah di post',json);
        // })
     
    },[])
    const getData=()=>{
        fetch('https://reqres.in/api/users/2')
        .then(response=>response.json())
        .then(json=>{
            console.log('get data',json);
            SetUser(json.data);

        })
    }
    const dataAPI={
            name:'abdul',
            job:'mentor BWA'
        };
    const postData=()=>{

        fetch('https://reqres.in/api/users',{
         method:'POST',
         headers:{
                'Content-Type':'application/json'
          },
            body:JSON.stringify(dataAPI)
        }).
        then(response=>response.json())
        .then(json=>{

            console.log(json);
            setDatajob(json)
            
    })
}
    return (
        <View>
            <Text style={styles.titleText}>Materi Memanggil Api dengan Vanila Javascript</Text>
            <Button  title="GET" onPress={getData} />
            <Text style={{
                marginTop:20,
                textAlign:'center',

            }}>Response get data</Text>
            <View style={{marginTop:10 ,alignItems:'center'}}>
            <Image 
            source={{uri:user.avatar}}
            style={{height:100, width:100, borderRadius:50}}
            />
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

export default CallApi

const styles = StyleSheet.create({
    titleText:{
        margin:20,
        textAlign:'center'
    }
})
