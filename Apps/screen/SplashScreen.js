// Splash Screen

import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, Text,
  Image,
} from 'react-native';

const SplashScreen = ({navigation}) =>  {

    return (
      <View style={styles.SplashScreen_RootView}>
       
         <Image source={require('../assets/images/splashScreen1.gif')} style={styles.logo}/>
         
         {/* <View style={styles.SplashScreen_ChildView}>
          <Image source={require('../assests/images/splashScreen1.gif')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View> */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>By Team{"\n"}  Porter</Text>
        </View>
       
      </View>
    );
  }

const styles = StyleSheet.create(
  {
    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex: 1,
      // marginTop: 60,  
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor:'#fff',
      alignItems: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#00BCD4',  
        flex:1,  
    },  
    logo: {
      height:200,
      width:'80%',
      // marginTop:40,
      // marginLeft:30,
      alignItems:'center'

    },
   footer:{
     position:'absolute',
 
     bottom:50,
     
   },
   footerText:{
   
    color: '#6f6e92',
 
   }
  });  
export default SplashScreen;