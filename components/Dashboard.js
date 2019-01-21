
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image,TouchableOpacity, View,TextInput,ImageBackground,Dimensions} from 'react-native';
import Home from './components/Home';
import ResultEntry from './components/ResultEntry';
import FHRResults from  './components/FHRResults';
import SenateResult from './components/Senate';
import Presidency from './components/Presidency';
import GeneralStats from './components/GeneralStats';
import GuberResults from './components/GuberResults';
import Icon from 'react-native-vector-icons/Ionicons';

import bgImage from './assets/images/background.jpg';

import iconP from './assets/images/presidency.jpg';
import iconS from './assets/images/senate.png';
import iconF from './assets/images/fhr.jpg';
import iconG from './assets/images/governor.png';
import {Navigation} from 'react-native-navigation';
import iconSt from './assets/images/statsicon.png';
import iconV from './assets/images/uploadresulticon.jpg';
import {createStackNavigator, StackNavigator} from 'react-navigation';

import bgLogo from './assets/images/logo.png';


const {width:WIDTH}=Dimensions.get('window');
Navigation.registerComponent('Presidency',()=>Presidency);


Navigation.events().registerAppLaunchedListener(()=>{
  Navigation.setRoot({
    root:{
      stack:{
        id:'AppStack',
        children:[
          {
            component:{
                name:'Presidency'
            }
          }
        ]
      }
    }
  })
});


export default class DashBoard extends Component {
    
    
    constructor(props){
        super(props);
    
        this.gotoScreen =  this.gotoScreen.bind(this);
      }


  gotoScreen(screenName){
    Navigation.push(this.props.componentId,{component:{name:screenName}} );
    alert(screenName);
  }
  //goo
  
  render() {
    return  ( 
    <View style={homeStyles.container}>
      <View style={homeStyles.top}>
      <Image source={ bgLogo   } style={ homeStyles.headerimage }/>
        
      </View>

      <View style={ homeStyles.layer1 } >
          <View style={ homeStyles.layerItem } > 
          <TouchableOpacity
            style={ homeStyles.layerItemIcon }
            onPress={()=>this.gotoScreen('UploadResult ')}>
          <Image source={ iconV   } style={ homeStyles.layerItemIcon } />
          </TouchableOpacity>
            <Text style={ homeStyles.layerItemInner } onPress={ ()=> this.gotoScreen('UploadResult 1')}>Upload Result</Text>
          </View>

          <View style={ homeStyles.layerItem }>
          <TouchableOpacity
            style={ homeStyles.layerItemIcon }
            onPress={()=>this.gotoScreen('Presidency')}>
          <Image source={ iconP  } style={ homeStyles.layerItemIcon }/>
          </TouchableOpacity>
          
            <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoScreen('Presidency')} >View Presidential</Text>
          </View>

          <View style={ homeStyles.layerItem } onPress={()=>this.gotoScreen('Senate')}>
          <TouchableOpacity
            style={ homeStyles.layerItemIcon }
            onPress={()=>this.gotoScreen('Senate 2')}>
          <Image source={ iconS } style={ homeStyles.layerItemIcon }/>
          </TouchableOpacity>
          
            <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoScreen('Senate')}>View Senate Result</Text>
          </View>
        </View>
      
      <View style={ homeStyles.layer2 }>

          <View style={ homeStyles.layerItem }>
          <TouchableOpacity
            style={ homeStyles.layerItemIcon }
            onPress={()=>this.gotoScreen('UploadResult 2')}>
          <Image source={ iconF   } style={ homeStyles.layerItemIcon }/>
          </TouchableOpacity>
              
                <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoScreen('FederalHoust')}>View Federal House Results</Text>
              </View>

              <View style={ homeStyles.layerItem }>
              <TouchableOpacity
            style={ homeStyles.layerItemIcon }
            onPress={()=>this.gotoScreen('Guber')}>
          <Image source={ iconG   } style={ homeStyles.layerItemIcon }/>
          </TouchableOpacity>

                <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoScreen('Gubernat')}>View Gub. Results</Text>
              </View>

              <View style={ homeStyles.layerItem }>
          <TouchableOpacity
            style={ homeStyles.layerItemIcon }
            onPress={()=>this.gotoScreen('Guber')}>
             <Image source={ iconSt   } style={ homeStyles.layerItemIcon }/>
          </TouchableOpacity>
              
                <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoScreen('ViewStats')}> View Stats</Text>
              </View>
          </View>


      
    </View>)
  ;
  }
}
//export default App;
const homeStyles=StyleSheet.create(
  {
    container:{
      flex:1

    },
    top:{
      height:'40%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#98d2c1'
     
    },
    headerimage:{
      width:140,
      height:140,
      borderRadius:50,
      borderWidth:4,
      borderColor:'#fff'

    },
    layer1 :{
      height:'30%',
      flexDirection:'row',
      flexWrap:'wrap',
      
      padding:5,
      backgroundColor:"green"
    },
    layer2 :{
      height:'30%',
      flexDirection:'row',
      flexWrap:'wrap',
      padding:5,
      backgroundColor:"green"
    },
    

    layerItem:{
      backgroundColor:"orange",
      width :'33%',
      alignItems:'center',
      justifyContent:'center',
      padding:5
    },
    layerItemInner:{
      
      height:'20%',
      fontSize: 13,
      fontWeight: 'bold'
     
    },
    layerItemIcon:{
      flex:1,
      width:'100%',
      height:'50%',
      padding:5,
      borderRadius:10,
      borderWidth:4,
      borderColor:'#fff'
    }
    
  }
);

//const NavigationApp = createStackNavigator({});



//*/


