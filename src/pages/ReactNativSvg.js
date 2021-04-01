import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyAppIlustration from '../assets/images/undraw_Subscriber_re_om92.svg'
// import { SvgUri } from 'react-native-svg';

const ReactNativSvg = () => {
    return (
        <View style={styles.titleText}>
            <Text>Materi menggunakan File SVG pada React Native</Text>
            <MyAppIlustration  
             width={255}
             height={125}

            />
            {/* <SvgUri 
            width="100%"
            height="100%"
            uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
            /> */}
        </View>
    )
}

export default ReactNativSvg

const styles = StyleSheet.create({
    titleText:{
       textAlign:'center',
       padding:20,
       marginBottom:20
    }
})
