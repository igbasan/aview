/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image,TouchableOpacity, View,
  TextInput,ImageBackground,Dimensions,Picker,ScrollView } from 'react-native';

  
import Icon from 'react-native-vector-icons/Ionicons';

import bgImage from './assets/images/background.jpg';

import iconP from './assets/images/presidency.jpg';
import iconS from './assets/images/senate.png';
import iconF from './assets/images/fhr.jpg';
import iconG from './assets/images/governor.png';
import {Navigation} from 'react-native-navigation';
import iconSt from './assets/images/statsicon.png';
import iconV from './assets/images/uploadresulticon.jpg';

const puData  =require('./assets/json/punit.json');
const partyData  =require('./assets/json/parties.json');
import bgLogo from './assets/images/logo.png';


const {width:WIDTH}=Dimensions.get('window');

import { createStackNavigator, createAppContainer } from "react-navigation";


class HomeScreen extends React.Component {
 
  static navigationOptions={
    //  header:'none'
  }
  render() {
    return  ( 
    <View style={homeStyles.container}>
      <View style={homeStyles.top}>
      <Image source={ bgLogo   } style={ homeStyles.headerimage }/>
        
      </View>

      <View style={ homeStyles.layer1 } >

          <View style={ homeStyles.layerItem } > 
              <TouchableOpacity                 style={ homeStyles.layerItemIcon }  onPress={()=>this.gotoScreen('ResultEntry')}>
                  <Image source={ iconV   } style={ homeStyles.layerItemIcon } />
              </TouchableOpacity>
               <Text style={ homeStyles.layerItemInner } onPress={ ()=> this.gotoScreen('ResultEntry')}>Upload Results</Text>
          </View>

          <View style={ homeStyles.layerItem }>
            <TouchableOpacity
              style={ homeStyles.layerItemIcon }
              onPress={()=>this.gotoScreen('Presidency')}>
            <Image source={ iconP  } style={ homeStyles.layerItemIcon }/>
            </TouchableOpacity>
            
              <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoScreen('Presidency')} >Presidential</Text>
          </View>

          <View style={ homeStyles.layerItem } onPress={()=>this.gotoScreen('SenateResults')}>
            <TouchableOpacity  style={ homeStyles.layerItemIcon }  onPress={()=>this.gotoScreen('SenateResults')}>
                <Image source={ iconS } style={ homeStyles.layerItemIcon }/>
            </TouchableOpacity>
            <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoScreen('Senate')}> Senate </Text>
          </View>

        </View>
      
      <View style={ homeStyles.layer2 }>

          <View style={ homeStyles.layerItem }>
              <TouchableOpacity  style={ homeStyles.layerItemIcon }  onPress={()=>this.gotoScreen('FHRResults')}>
                <Image source={ iconF   } style={ homeStyles.layerItemIcon }/>
              </TouchableOpacity>
                  
              <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoScreen('FHRResults')}>Reps </Text>
          </View>

          <View style={ homeStyles.layerItem }>
              <TouchableOpacity style={ homeStyles.layerItemIcon } onPress={()=>this.gotoScreen('GuberResults')}>
                <Image source={ iconG } style={ homeStyles.layerItemIcon }/>
              </TouchableOpacity>

               <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoScreen('GuberResults')}>Gubernatorial</Text>
           </View>

          <View style={ homeStyles.layerItem }>
              <TouchableOpacity style={ homeStyles.layerItemIcon } onPress={()=>this.gotoScreen('GeneralStats')}>
                <Image source={ iconSt   } style={ homeStyles.layerItemIcon }/>
              </TouchableOpacity>
                  
              <Text style={ homeStyles.layerItemInner } onPress={()=>this.gotoScreen('GeneralStats')}> View Stats</Text>
          </View>
          


      
    </View>
     </View> 
    );
  
  }

 

  gotoScreen(screenName){
    this.props.navigation.navigate(screenName);
    //alert(screenName);
  }
}


class Presidency extends Component {

  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text onPress={()=>this.gotoScreen('Presidency')}>Presidency 1</Text>
      </View>
    );
  }
  gotoScreen(screenName){
    this.props.navigation.navigate(screenName);
   // alert(screenName);
  }
}

class ResultEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {PUnit: ''};
    this.state = {ElectionType: ''};
    //this.state={Parties:[]}
  }
componentWillMount(){
 // this.setState(Parties,partyData);
}
  getPU()
  {
    console.log(puData);
    console.log(partyData);
    console.log('not done');
    //return '';
  }

  render() {
    let parties =partyData;
    let punits =puData;
    this.getPU();
    return (
      <TouchableOpacity>
      <ScrollView style={StyleSheet.inputCard}>
      

        <View > 
        <Text> Select Election Type </Text>
            <Picker selectedValue={this.state.ElectionType}  onValueChange={(itemValue, itemIndex) => this.setState({ElectionType: itemValue})}>
            
            <Picker.Item label="Presidency" value="Presidency" />
            <Picker.Item label="Senate" value="Senate" />
            <Picker.Item label="Federal House" value="Federal House" />
            <Picker.Item label="Gubernatorial" value="Gubernatorial" />
          </Picker>
          
          <Text> Select Polling Unit </Text>
          <Picker selectedValue={this.state.PUnit}  onValueChange={(itemValue, itemIndex) => this.setState({PUnit: itemValue})}>
          {punits.map(p=> 
              <Picker.Item label={p.SN} value={p.SN}/>
             
          )}
            
          </Picker>
          
         

          {parties.map(party=> 
              <Text> {party.Party}</Text>
          )}

          <TextInput />
          <Text> Enter Result</Text>
        </View>
      </ScrollView>
      </TouchableOpacity>
    );
  }
  
}


class GuberResults extends Component {

  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text onPress={()=>this.gotoScreen('Presidency')}>Guber Results 1</Text>
      </View>
    );
  }
 
}
class SenateResults extends Component {

  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text onPress={()=>this.gotoScreen('Presidency')}>Senate Result</Text>
      </View>
    );
  }
  
}



class FHRResults extends Component {

  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Federal House 1</Text>
      </View>
    );
  }
  gotoScreen(screenName){
    this.props.navigation.navigate(screenName);
    alert(screenName);
  }
}

class GeneralStats extends Component {

  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>GeneralStats 1</Text>
      </View>
    );
  }
  
}


const AppNavigator = createStackNavigator(
  {
  
  HomeScreen: {
    screen: HomeScreen
  },
  Presidency:{
    screen:Presidency
  },
  ResultEntry:{
    screen:ResultEntry
  },
  FHRResults:{
    screen:FHRResults
  },
  SenateResults:{
    screen:SenateResults
  },
  GeneralStats:{
    screen:GeneralStats
  },
  GuberResults:{
    screen:GuberResults
  }

},


);




export default createAppContainer(AppNavigator);

  


const homeStyles=StyleSheet.create(
  {
    container:{
      flex:1

    },
    top:{
      height:'40%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#0099CC'
     
    },
    headerimage:{
      width:140,
      height:140,
      borderRadius:50,
      borderWidth:4,
      borderColor:'#006400'

    },
    layer1 :{
      height:'30%',
      flexDirection:'row',
      flexWrap:'wrap',
      
      padding:5,
      backgroundColor:"#0099CC"
    },
    layer2 :{
      height:'30%',
      flexDirection:'row',
      flexWrap:'wrap',
      padding:5,
      backgroundColor:"#0099CC"
    },
    

    layerItem:{
      backgroundColor:"#0099CC",
      width :'33%',
      alignItems:'center',
      justifyContent:'center',
      padding:5
    },
    layerItemInner:{
      
      height:'20%',
      color:'white',
      fontSize: 15,
      fontWeight: 'bold'
     
    },
    layerItemIcon:{
      flex:1,
      width:'100%',
      height:'50%',
      padding:5,
      borderRadius:10,
      borderWidth:4,
      borderColor:'#00688B'
    },
    inputCard:{
      height:'95%',
      alignItems:'flex-start',
     // alignItems:'lef,t',
      justifyContent: 'flex-start',
      backgroundColor:'blue',padding:5
    }
    
  }
);
