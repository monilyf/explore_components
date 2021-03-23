import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export class SubmitButton extends Component {
    render(props) {
        return (
          // <TouchableOpacity onPress={()=>Alert.alert('Registered Successfully')}>
          <TouchableOpacity onPress={this.props.onPress} style={{alignItems:'center'}}>
          <LinearGradient
          // colors={['#00d2ff', '#3a7bd5']}
          colors={['#00d2ff', '#182b56']}
          style={styles.btnPrimary}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
     
  
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
            {this.props.buttonText}
          </Text>
  
        </LinearGradient>
      </TouchableOpacity>

          
        )
    }
}

export default SubmitButton

const styles = StyleSheet.create({
    btnPrimary: {
        // backgroundColor: 'yellow',
        height: 50,
        width:200,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
});