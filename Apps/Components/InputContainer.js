import React, { Component } from 'react'
import { Text, View,TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconError from 'react-native-vector-icons/MaterialCommunityIcons'
import IconEye from 'react-native-vector-icons/Octicons'


const InputContainer=(props)=>{
  
        return (
          <View>
            <View style={styles.inputContainer}>
            <Icon
              name={props.iconName}//"person-outline"
              color='#000'
              size={20}
              style={styles.inputIcon}
            />
            <TextInput placeholder={props.placeholder} style={styles.input} value={props.value} onEndEditing={props.onEndEditing} maxLength={props.maxLength} onChangeText={props.onChangeText} secureTextEntry={Boolean(props.secureText)} keyboardType={props.keyboardType}/>
            <TouchableOpacity onPress={props.onToggle}>
            <IconError
              name={props.errorIcon}//"person-outline"
              color='#000'
              size={20}s
              style={styles.errorIcon}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onToggle}>
            <IconEye
              name={props.extraIconName}//"person-outline"
              color='#000'
              size={20}
              style={styles.extraIcon}
            />
            </TouchableOpacity>
            {/* <Text style={styles.errorMsg}>{this.props.errorMsg}</Text> */}
          
          </View>
          {/* <Text style={errorMsg}>{props.errorMsg}</Text> */}
          </View>
        )
    }


export default InputContainer

const styles=StyleSheet.create({
    inputContainer: { 
        flexDirection: 'row',
        marginTop: 10,
        borderColor: '#FFF',
        borderWidth: 0.5,
        borderRadius:14,

        backgroundColor:'#fff'
       },
      input: {
        color: '#6f6e92',
        paddingLeft: 60,
          flex: 1,
        fontSize: 20,
      },
      extraIcon:{marginTop:15,marginRight:20,color:'#a5a5a5'},
      errorIcon:{marginTop:15,marginRight:20,color:'red'},
      inputIcon: { marginTop: 15,marginLeft:20, position: 'absolute',fontSize:20,color:'#28388f', },
});