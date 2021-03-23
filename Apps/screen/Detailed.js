import React, {Component} from 'react';
import {Text, View,StyleSheet, Image,SafeAreaView, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export class Detailed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      password: '',
    };
  }

  componentDidMount() {
    this.check_data();
  }

  check_data = async () => {
    try {
      console.log('registered_data from check_data:', registered_data);

      let user_data = await AsyncStorage.getItem('registered_data');
      var parsed = JSON.parse(user_data);
      this.setState({firstName: parsed.firstName, lastName: parsed.lastName,email:parsed.email,mobileNo:parsed.mobileNo,password:parsed.password});
      console.log('registered_data from firstName:', parsed.firstName);
    } catch (error) {
      alert(error);

    }
  };

  render(props) {
    // console.log('email render', this.state.email, '---', this.state.password);
    // console.log('registered_data from render firstName:', this.state.firstName);

    return (
      <View style={{backgroundColor:'#fff',flex:1
    }}>
      <View style={styles.container}>
      <View style={styles.centerValues}>
        <Text style={styles.header}>Details</Text>
        <View style={styles.underLine}></View>
        <Image source={require('../assets/images/user1.png')} style={{height:100,width:100,marginVertical:20}}/>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>First Name</Text>
          <Text style={styles.value}>{this.state.firstName}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>Last Name</Text>
          <Text style={styles.value}>{this.state.lastName}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{this.state.email}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>Mobile Number</Text>
          <Text style={styles.value}>{this.state.mobileNo}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{
        AsyncStorage.clear()
      this.props.navigation.navigate('SignIn')}} >
        <Text style={{color:'red',fontSize:20,textAlign:'center',letterSpacing:1}}>Logout</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

export default Detailed;

const styles = StyleSheet.create({

    container:{
      marginHorizontal:40,
      marginVertical:40,
    //flex:1,
      // alignItems:'center',
      // justifyContent:'center'
      
    },
    centerValues:{
      alignItems:'center',
     
    },
    header:{
      fontSize:30,
      textAlign:'center'
    },
    underLine:{
      marginVertical:10,
      borderWidth:3,
      borderColor:'#8e7f7f',
      borderRadius:10,
      width:40,
      alignItems:'center',
    },
    valueContainer:{
      marginVertical:10,

    },
    label:{
      marginVertical:8,
      fontSize:15,
      color:'#a5a5a5'
    },
    value:{
      fontSize:20,
      paddingBottom:10,
      borderBottomWidth:1,
      borderBottomColor:'#dddddd'

    }
});