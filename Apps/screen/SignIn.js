import React, {Component} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header} from '../Components/Header';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputContainer from '../Components/InputContainer';
import Picker from 'react-native-country-picker-modal';
import LinearGradient from 'react-native-linear-gradient';

import SubmitButton from '../Components/SubmitButton';
export class SignIn extends Component {
 

  constructor(props) {
    super(props);

    this.state = {
      email: '',

      password: '',

      toggleIcon: 'eye',
      isSecurePassword:true
    };
  }
  check_IsNull = () => {
    const {email, password} = this.state;
    if (email == '') {
      alert('please fill email ');
      return false;
    } else if (password == '') {
      alert('please fill password');
      return false;
    }
    this.props.navigation.navigate('Auth', {
      email: this.state.email,
      password: this.state.password,
    });
    return true;
  };

  handleToggle = () => {
        this.state.isSecurePassword ? this.setState({ isSecurePassword: false,toggleIcon: 'eye-closed'  }) : this.setState({isSecurePassword: true,toggleIcon: 'eye' });
  };
  render(props) {

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}
            style={{flex: 1}}>
            <ImageBackground
              source={require('../assets/images/bg1.png')}
              style={(styles.bgImg, {height: 800})}>
              <Header />
              <Text style={{fontSize: 32, textAlign: 'center'}}> Login </Text>

              <View
                style={{flex: 1, marginTop: 50, marginHorizontal: 20, flex: 1}}>
              
                <InputContainer
                  iconName="email"
                  placeholder="Enter Email"
                  onChangeText={(text) => this.setState({email: text})}
                />
                {this.state.isEmailvalidate ? (
                  <Text style={(styles.errorMsg, {color: 'green'})}>
                    {this.state.emailError}
                  </Text>
                ) : (
                  <Text style={styles.errorMsg}>{this.state.emailError}</Text>
                )}
                <InputContainer
                  iconName="lock"
                  secureText={this.state.isSecurePassword}
                  placeholder="Enter Password"
                  extraIconName={this.state.toggleIcon}
                  onChangeText={(text) => this.setState({password: text})}
                  onToggle={()=>this.handleToggle()}
                />
                {this.state.isPasswordvalidate ? (
                  <Text style={(styles.errorMsg, {color: 'green'})}>
                    {this.state.passwordError}
                  </Text>
                ) : (
                  <Text style={styles.errorMsg}>
                    {this.state.passwordError}
                  </Text>
                )}
                <SubmitButton
                  onPress={() => {
                    this.check_IsNull();
                  }}
                  buttonText="Login"
                />

                <View style={styles.footer}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.footerText}>
                      Haven't Registered Yet!{' '} <Text style={{fontWeight:'bold'}}>Register</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    );
  }
 
}

export default SignIn;
