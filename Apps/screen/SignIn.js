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
  // handleToggle = () => {
  //     const { isPasswordVisible } = this.state;
  //     if (isPasswordVisible) {
  //         this.setState({ isPasswordVisible: false });
  //         this.setState({ toggleIcon: 'eye-closed' });
  //     } else {
  //         this.setState({ isPasswordVisible: true });
  //         this.setState({ toggleIcon: 'eye' });
  //     }
  // };

  constructor(props) {
    super(props);

    this.state = {
      email: '',

      password: '',

      extraIconName: 'eye',
      // isPasswordvisible
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

  render(props) {
    // console.log('Naam', this.state.fname);

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
                {/* <InputContainer
                iconName='person'
                placeholder="naam"
                
                onEndEditing={(text)=>this.setname(text)}
                // value={this.state.fname}
              /> */}
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
                  placeholder="Enter Password"
                  extraIconName={this.state.extraIconName}
                  onChangeText={(text) => this.setState({password: text})}
                  onToggle={this.handleToggle}
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
                />

                <View style={styles.footer}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.footerText}>
                      Haven't Registered Yet! Register
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
  handleToggle = () => {};
  setname = (text) => {
    this.setState({
      fname: text,
    });
    // console.log()
  };
  validateEmail = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      this.setState({
        email: text,
        emailError: 'Email Must be In proper format',
        isEmailvalidate: false,
      });
      // console.log('Email is not Correct',this.state.email,'---',text);
      return false;
    } else {
      console.log('text==', text);
      this.setState({
        email: text,
        emailError: 'valid Email',
        isEmailvalidate: true,
      });
      console.log('Email is Correct', this.state.email, '---', text);
    }
  };
  validatePassword = (text) => {
    console.log(text);
    let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
    if (reg.test(text) === false) {
      console.log('Password Not Valid');
      this.setState({
        password: text,
        passwordError:
          'Minimum eight & maximum 15 characters, at least one letter, one number and one special character required',
        isPasswordvalidate: false,
      });
      return false;
    } else {
      console.log('text==', text);
      this.setState({
        password: text,
        passwordError: 'Valid Password',
        isPasswordvalidate: true,
      });
      console.log('Password is Correct', this.state.password, '---', text);
    }
  };
}

export default SignIn;
