import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const Item=(props)=>{
    return (
        <View style={styles.baris} >
         <TouchableOpacity onPress={props.click}>
         <Image 
            source={{uri:`https://i.pravatar.cc/${props.size}`}}
            style={{width:100,height:100, borderRadius:100/2}}
            />

         </TouchableOpacity>
        
            <View style={styles.kolom}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Name :{props.name}</Text>
            <Text>Email :{props.email}</Text>
            <Text>Bidang: {props.bidang}</Text>
            <Text>Qty: {props.size}</Text>
            </View>
            <View >
                <TouchableOpacity onPress={props.onDelete}>
                <Text style={{color:'red', fontSize:20, flex:1, fontWeight:'bold'}}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const index = () => {
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[bidang,setBidang]=useState("");
    const[size,setSize]=useState("");
    const [users,setUser]=useState([]);
    const [button,setButton]=useState("Simpan");
    const [seletUser,seletStateUser]=useState({});
    useEffect(()=>{
        getdata();
     },[]);
    


const submit =()=>{     

        const data={
             name,
             email,
             bidang,
             size
         }
       console.log(data);

       if(button ==="Simpan"){
        Axios.post('http://10.0.2.2:3004/users',data)
        .then(result=>{
            console.log('result',result);
            setName("");
            setEmail("");
            setBidang("");
            setSize("")
         
        }).catch(err=>{
            console.log(err);
        })
       }else{
           Axios.put(`http://10.0.2.2:3004/users/${seletUser.id}`,data)
           .then(res=>{
               console.log('res',res);
               setName("");
            setEmail("");
            setBidang("");
            setSize("")
            setButton("Simpan")

           });
       }

     

     

}
const getdata=()=>{
    Axios.get('http://10.0.2.2:3004/users')
    .then(res=>{
        console.log(' get data: ',res);
        setUser(res.data);
    })
    .catch(err=>{
        console.log(err);
    })
}
const selecData=(item)=>{
    console.log(item)
    seletStateUser(item)
    setName(item.name)
    setEmail(item.email)
    setBidang(item.bidang)
    setSize(item.size)
    setButton("Update");


}
const deleteData=(item)=>{
    console.log(item);

    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`)
    .then(()=>{
        console.log('Berhasil Delete data');
    }).catch(err=>{
        console.log(err);
    })
}



    return (
        <View style={{margin:10}}>
           
            <Text style={styles.wrap}>Materi Local Api</Text>
            <ScrollView >
            <TextInput style={styles.input}placeholder="inputkan name" value={name} onChangeText={(value)=> setName(value)} />
            <TextInput style={styles.input}placeholder="inputkan email" value={email} onChangeText={(value)=> setEmail(value)} />
            <TextInput style={styles.input}placeholder="inputkan bidang" value={bidang} onChangeText={(value)=> setBidang(value)}/>
            <TextInput style={styles.input}placeholder="inputkan size" value={size} onChangeText={(value)=> setSize(value)}/>
              <Button title={button} onPress={submit} />
          
       
            <View  style={{height:2, backgroundColor:'black', marginTop:10, marginBottom:10}}/>
            
           {
               users.map((item,index)=>{
                   return(
                   <Item 
                   key={index}
                    name={item.name}
                    email={item.email}
                    bidang={item.bidang}
                    size={item.size}
                    click={()=>{
                        selecData(item);
                    }}
                    onDelete={()=>{
                       Alert.alert('Peringatan','Apa anda yakin menghapus data ini?',[
                           {text:'Tidak',onPress:()=>console.log('upps! tidak jadi delete data')},
                           {text:'Ya',onPress:()=>{
                               deleteData(item);
                           }}
                       ])
                    }}
                   />
                   )
               })
           }
            
            </ScrollView>
      
          
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    wrap:{
        padding:10
    },
    input:{
        borderWidth:2,
        borderRadius:10,
        padding:10,
        marginBottom:10

    },
    baris:{
      flexDirection:'row',
      marginBottom:20,
      justifyContent:'space-around'
    },
    kolom:{
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:10
        
    }
})
