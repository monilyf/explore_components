import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Image source={require('../assets/images/Logo-porter.png')}
                style={styles.logo}
            />
            </View>
        )
    }
}

export default Header

const styles = StyleSheet.create({
    container:{
        // flex:1,
        alignItems:'center',
        // margin:10,
        // backgroundColor:'blue'
    },
    logo:{
        height:150,
        width:'30%',
        // backgroundColor:'green',
        marginBottom:10
    },
   
});