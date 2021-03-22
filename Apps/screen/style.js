// import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  
    logo:{
        height:110,
        width:'80%'
    },
    signUpContainer:{
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: 'column',
        // alignItems: 'center',
        // marginVertical:10,
        // backgroundColor:'red'
    },
    bgImg:{
        flex:1,
        width:'100%',
        // height:800,
       resizeMode:'cover'      //        <ImageBackground source={require('../assets/images/signupBG.jpg')} style={styles.bgImg}>

    },
   
    errorMsg:{
        color:"red",
        fontStyle:'italic',
        marginLeft:23
    },
    footer:{
        marginTop:30,
        marginBottom:20
    },
    footerText:{
        textAlign:'center',
        fontSize:16
    }
//   inputIcon: { marginTop: 15,marginLeft:20, position: 'absolute',fontSize:20,color:colors.primary, },


});

export default styles;