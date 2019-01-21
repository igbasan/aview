/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image,TouchableOpacity, View,TextInput,ImageBackground,Dimensions} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons'
import bgImage from '../assets/images/background.jpg';
import bgLogo from '../assets/images/logo.png';
const {width:WIDTH}=Dimensions.get('window');


export default class GuberResults extends Component {

  
  render() {
    return (
      
      <ImageBackground source={bgImage} style={GuberResultStyles.backgroundContainer}>
      <View style={GuberResultStyles.logoContainer}>
      <Image source={bgLogo} style={GuberResultStyles.logo}></Image>
          <Text style ={GuberResultStyles.logoText}></Text>
          <Text style ={GuberResultStyles.logoText}> Register</Text>
      </View>

      <View  style={GuberResultStyles.inputContainer}>
        <Icon name='rocket' size={28} color={'rgba(255,255,255,0.7)'}
        style={GuberResultStyles.inputIcon}/>
        <TextInput 
        style ={GuberResultStyles.input}
        placeholder={'PhoneNumber'}
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        />
      </View>
      <View  style={GuberResultStyles.inputContainer}>
        <Icon name='rocket' size={28} color={'rgba(255,255,255,0.7)'}
        style={GuberResultStyles.inputIcon}/>
        <TextInput 
        style ={GuberResultStyles.input}
        placeholder={'Password'}
        secureTextEntry={false}
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        />
        
      </View>
      <TouchableOpacity style={GuberResultStyles.btnLogin}>
           <Text style={GuberResultStyles.text}>Login</Text>
        </TouchableOpacity>

      </ImageBackground>
    );
  }
}

const GuberResultStyles = StyleSheet.create({

  backgroundContainer:{
    flex:1,
    width:null,
    height:null,
    justifyContent:'center',
    alignItems:'center'
   },

   logo:{
    width:120,
    height:120
  },
  logoContainer:{
    alignItems:'center'
    
  },
  logoText:{
    color:'white',
    fontSize:20,
    fontWeight:'500',
    marginTop:10,
    opacity:0.5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input:{
    width:WIDTH -55,
    height:45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal:25
  } ,
  inputIcon:{
    position:'absolute',
    top:10,
    left:37
  }, 
  inputContainer:{
     alignItems:"center"
     
  }
  ,
  btnLogin :{
    width:WIDTH -55,
    height:45,
    borderRadius:25,
    fontSize:16,
    backgroundColor:'#432577',
    justifyContent:'center',
    marginTop:20
  },
  btnEye:{
    position:'absolute',
    top:8,
    right:37
  },
  text:{ 
    color: 'rgba(255,255,255,0.7)',
    fontSize:16,
    textAlign:'center'
  }
});
