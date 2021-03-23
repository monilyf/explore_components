import React, { Component } from 'react'
import { Alert, Image, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export class Auth extends Component {
    constructor(props){
        super(props);
        this.state={
          email:'',
          password:'',
          // error:
          isAuthenticated:false
        }
      }
      
    componentDidMount(){
      const {email, password} = this.props.route.params;
      this.setState({email: email, password: password});
 
      // var login_data={email:'mansip@gmail.com',password:'mansip123'};
      // AsyncStorage.setItem('user',JSON.stringify(login_data))

      // this.setAuthentication();
      this.checkAuthentication();
    }
   
    checkAuthentication = async () => {
     

        try {
            let user = await AsyncStorage.getItem('registered_data');
            let parsed = JSON.parse(user);
        
      
            if (
              parsed.email === this.state.email &&
              parsed.password === this.state.password
            )
            // this.state.isAuthenticated=true;
              this.props.navigation.replace('Home');
            else {
             Alert.alert('Email or Password not valid')
              this.props.navigation.navigate('SignIn');
            }
          } catch (error) {
            alert("You don't have account!");
            this.props.navigation.navigate('SignIn');

            // 
          }

    }

    
    render() {
        console.log("email render",this.state.email,"---",this.state.password)

        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
              {/* <Image source={require('../assets/images/error.jpg')}/> */}
            </View>
        )
    }
}

export default Auth
