import React, {Component} from 'react';
import {Text, View,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

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
    // console.log('registered_data from detailed did mount Detailed:', registered_data);

    // async () => {
    //   let registered_data = await AsyncStorage.getItem('registered_data');
    //   let parsed = JSON.parse(registered_data);
    // this.setState({firstName:parsed.firstName,lastName:parsed.lastName})
    //     alert('email:', parsed.email, '--password:', parsed.password)
    //   console.log('email:', parsed.email, '--password:', parsed.password);
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
    console.log('email render', this.state.email, '---', this.state.password);
    console.log('registered_data from render firstName:', this.state.firstName);

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Details</Text>

        <Text>First Name:   <Text>{this.state.firstName} </Text></Text>
        <Text><Text>{this.state.lastName} </Text></Text>
        <Text><Text>{this.state.email} </Text></Text>
        <Text><Text>{this.state.mobileNo} </Text></Text>
       <Text><Text>{this.state.password} </Text></Text>
      </View>
    );
  }
}

export default Detailed;

// const styles = StyleSheet.create({

//     container:{

//     }
// });