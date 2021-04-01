import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'

const Story=(props)=>{
    return (
            <View 
            style={{alignItems:'center', marginRight:10}}
                 
            >
            <Image 
            source={{uri:props.img}}
            style={{ width:50, height:50, borderRadius:25}}
            />
            <Text style={{maxWidth:50, textAlign:'center'}}>{props.title}</Text>
            </View>
    )
}
const PropsDinamis = () => {
    return (
        <View>
            
            <Text style={styles.title}>Materi Props Componen pada React Native</Text>
            <ScrollView horizontal>
            <View style={styles.direction}>
            <Story 
            img={'http://placeimg.com/100/100/tech'}
            title='chanel abdul'/>
            <Story 
            img={'http://placeimg.com/100/100/animals'}
            title='chanel yadi'/>
            <Story 
            img={'http://placeimg.com/100/100/animals/grayscale'}
            title='chanel amenk'/>
            <Story 
            img={'http://placeimg.com/100/100/animals/sepia'}
            title='chanel amran'/>
            <Story 
            img={'http://placeimg.com/100/100/animals/grayscale'}
            title='chanel yanis'/>
             <Story 
            img={'http://placeimg.com/100/100/animals/grayscale'}
            title='chanel Anwar'/>
             <Story 
            img={'http://placeimg.com/100/100/animals/grayscale'}
            title='chanel yanis'/>
             <Story 
            img={'http://placeimg.com/100/100/animals/grayscale'}
            title='chanel marwi'/>
             <Story 
            img={'http://placeimg.com/100/100/animals/grayscale'}
            title='chanel nunsa'/>
             <Story 
            img={'http://placeimg.com/100/100/animals/grayscale'}
            title='chanel Amran'/>
             <Story 
            img={'http://placeimg.com/100/100/animals/grayscale'}
            title='chanel Anwar'/>
              <Story 
            img={'http://placeimg.com/100/100/animals/grayscale'}
            title='chanel Asu'/>
              <Story 
            img={'http://placeimg.com/100/100/animals/grayscale'}
            title='chanel Ajim'/>
            </View>
            </ScrollView>
           
            
        </View>
    )
}
const styles=StyleSheet.create({
    title:{
        marginBottom:20,
        textAlign:'center'
    },
    direction:{
       flexDirection:'row'
    }
    
})

export default PropsDinamis
