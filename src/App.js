import React, { Component } from 'react'
import {View,StyleSheet,ScrollView} from 'react-native'
import CallApi from './pages/CallApi'
import CallApiAxios from './pages/CallApiAxios'
// import BesicJavascript from './pages/BesicJavascript'
import ReactNativSvg from './pages/ReactNativSvg'
import LocalApi from './pages/LocalApi'
// import Comunication from './pages/Comunication'
// import StateDinamis from './pages/StateDinamis'
// import Position from './component/Position'
// import StylingComponent from './component/StylingComponent'
// import SampleComponent from './pages/SampleComponent'
// import FlexBox from './component/FlexBox'
// import PropsDinamis from './pages/PropsDinamis'



class App extends Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     name:'hamzan'
  //   };
  //   console.log('hallo abdul');
  //   setTimeout(()=>{
  //     console.log('menunggu waktu 5 detik')
  //   },5000);
  // }
  // componentDidMount=()=>{
  //   console.log('ini merupakan component didMount');
  //   setTimeout(()=>{
  //     console.log('ini update tunggu 5 detik');
  //   },5000);
  //   this.setState({
  //     name:'abdul'
  //   });
  // }

  render(){
    // console.log('ini merupakan setelah render');
   
    return (
      
      <View>
        <ScrollView>
         {/* < SampleComponent /> */}
         {/* <Comunication /> */}
         {/* <StylingComponent /> */}
         {/* <FlexBox /> */}
         {/* <Position /> */}
         {/* <Text>{this.state.name}</Text> */}
         {/* <PropsDinamis/> */}
         {/* <StateDinamis /> */}
         {/* <BesicJavascript /> */}
         {/* <ReactNativSvg /> */}
         {/* <CallApi /> */}
         {/* <CallApiAxios /> */}
         <LocalApi />
       
        </ScrollView>
      </View>
    
     
    )
  }
}
export default App;