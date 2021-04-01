import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BesicJavascript() {
    // Tipe data
    
    // Primitive tipe data

    const name ='Muhammad Abdulloh Hamzan'; // String
    let age=21; // Number
    const apakahlaki= true; // Boolean

    // Complex
    const mhs={
        name:'abdul',
        age:29,
        jurusan:'elektro',
        hewannama:{
            kucing:'meong',
            anjing:'gogok'

        },
        apakahsiswa:true,
        konsenterasi:['listrik','informatika','telkom','elka']

    };

    // function 
    const SapaOrang=(name1,age1)=>{
        return (
            console.log(`Hellow ${name1}, saya Berumur ${age1}`)
        )
    }

    // buat sebuah object dari function
    // jika nama hewan sama dengan kucung maka cetak hello in kucing
    const SapaHewan=(mhs)=>{
        // cara biasa
    //     let sapa='';
    //     if (mhs.hewannama.kucing==='meong'){
    //         sapa='hellow ini kucing';

    //     }else{
    //         sapa='hellow ini bukan kucing';
    //     }
    //     return sapa;
    // }

     // menggunakan ternari operator
     return mhs.hewannama.kucing ==='meong' ?
     'Hellow ini namanya Kucing':
     'Ini kucing siapa ya ?';
    }

    return (
        <View>
            <Text style={styles.textTitle}>Belajar Besic Javascript di React Native</Text>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{mhs.name}</Text>
            <Text>{mhs.jurusan}</Text>
            <Text>Pilihan Konsentrasi Kuliah</Text>
            <Text>{mhs.konsenterasi.map(item=>item)}</Text>
            <Text>
                {
                    mhs.apakahsiswa ?SapaOrang('abdul',21):'tidak ada data'
                }
            </Text>
            <Text>
                {
                SapaHewan(mhs)
                }
            </Text>
      
            
        </View>
    )
}

const styles = StyleSheet.create({

    textTitle:{
        textAlign:'center',
        padding:20
    }
})
