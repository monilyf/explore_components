import React, {Component} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ScrollView} from 'react-native-gesture-handler';
import {Header} from '../Components/Header';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputContainer from '../Components/InputContainer';
import Picker from 'react-native-country-picker-modal';
// import {validateEmail,validateMobile,validateName,validatePassword,checkPassword} from './validation'
import SubmitButton from '../Components/SubmitButton';

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      toggleIcon: 'eye',
      isSecurePassword:true,
      isFnNamevalidate: '',
      isLnNamevalidate: '',
      nameError: '',
      country:'',
      email: '',
      mobileNo: '',
      emailError: '',
      password: '',
      cpassword: '',
      errorMsg: '',
      errorIcon: 'blank',
      isCPasswordvalidate: false,
      cpasswordError: '',
      isMobileValidate: false,
      phone: '',
      phoneError: '',
      isEmailvalidate: false,
      check_textInputChange: false,
      // isAllNull:false
    };
  }

  handleToggle = () => {
    this.state.isSecurePassword ? this.setState({ isSecurePassword: false,toggleIcon: 'eye-closed'  }) : this.setState({isSecurePassword: true,toggleIcon: 'eye' });
};

  handleEventsBaar = () => {
    if (
      this.state.firstName == '' ||
      this.state.lastName == '' ||
      this.state.email == '' ||
      this.state.mobileNo == '' ||
      this.state.password == '' ||
      this.state.cpassword == ''
    ) {
      this.setState({
        // isAllNull:true,
        errorIcon: 'alert-circle-outline',
      });
      Alert.alert('Please fill all marked Field Properly');
    }
    else {
    if(
      this.state.isFnNamevalidate == false ||
      this.state.isLnNamevalidate == false ||
      this.state.isEmailvalidate == false ||
      this.state.isMobileValidate == false ||
      this.state.isPasswordvalidate == false ||
      this.state.isCPasswordvalidate == false
    ){
      // this.setDataToAsyncStorage()
      validateFirstName(this.state.firstName);
      validateLastName(this.state.lastName);
      validateEmail(this.state.email);
      validateMobile(this.state.mobileNo);
      validatePassword(this.state.password);
      checkPassword(this.state.cpassword);
      {
        this.setState({
          // isAllNull:false,
          errorIcon: 'blank',
        });
      }
    }
     
    else {
      registered_data={firstName:this.state.firstName,lastName:this.state.lastName,
        email:this.state.email,mobileNo:this.state.mobileNo,password:this.state.password};
      AsyncStorage.setItem('registered_data',JSON.stringify(registered_data))
      alert('Registered Successfully!',registered_data)
      console.log("registered_data from register:",registered_data);

      this.props.navigation.navigate('SignIn');
     
     
      
    }
  }

  };

  render(props) {
    validateEmail = (text) => {
      // console.log(text);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(text) === false) {
        // console.log('Email is Not Correct');
        this.setState({
          email: text,
          emailError: 'Email Must be In proper format',
          isEmailvalidate: false,
        });
        // console.log('Email is not Correct',this.state.email,'---',text);
        return false;
      } else {
        // console.log('tetextxt==', text);
        this.setState({
          email: text,
          emailError: '',//valid Email',
          isEmailvalidate: true,
        });
        // console.log('Email is Correct', this.state.email, '---');
      }
    };
    validateFirstName = (text) => {
      // console.log(text);
      let reg = /^[a-zA-Z]*$/;
      if (reg.test(text) === false) {
        // console.log('Name only contain alphabets');
        this.setState({
          firstName: text,
          fnError: 'only alphabets allowed',
          isFnNamevalidate: false,
        });
        // console.log('Email is not Correct',this.state.email,'---',text);
        return false;
      } else {
        if (text != '') {
          //text.length >= 3 && text.length <= 15
          // console.log('text==', text);
          this.setState({
            firstName: text,
            fnError: '',//'Valid Name',
            isFnNamevalidate: true,
          });
          // console.log('Name is Correct', this.state.firstName, '---');
        } else {
          // console.log('Name must be in between 3 to 15 characters');
          this.setState({
            firstName: text,
            fnError: 'First Name Required', //'Name must be in between 3 to 15 characters',
            isFnNamevalidate: false,
          });
        }
      }
    };
    validateLastName = (text) => {
      // console.log(text);
      let reg = /^[a-zA-Z]*$/;
      if (reg.test(text) === false) {
        console.log('Name only contain alphabets');
        this.setState({
          lastName: text,
          lnError: 'only alphabets allowed',
          isLnNamevalidate: false,
        });
        // console.log('Email is not Correct',this.state.email,'---',text);
        return false;
      } else {
        if (text != '') {
          //text.length >= 3 && text.length <= 15
          // console.log('text==', text);
          this.setState({
            lastName: text,
            lnError: '',//'Valid Name',
            isLnNamevalidate: true,
          });
          // console.log('Name is Correct', this.state.lastName, '---');
        } else {
          // console.log('Name must be in between 3 to 15 characters');
          this.setState({
            lastName: text,
            lnError: 'Last Name required', //'Name must be in between 3 to 15 characters',
            isLnNamevalidate: false,
          });
        }
      }
    };
    validateMobile = (text) => {
      // console.log(text);
      const reg = /^[0]?[789]\d{9}$/;
      if (reg.test(parseInt(text)) === false) {
        // console.log('Mobile no. is Not Correct');
        this.setState({
          phone: text,
          phoneError:
            'only 10 digits allowed and Number must be start with 9 or 8 or 7', //Numeric value
          isMobileValidate: false,
        });

        return false;
      } else {
        this.setState({
          phone: text,
          phoneError: '',//'Valid Mobile Number',
          isMobileValidate: true,
        });
        // console.log('Mobile No is Correct', this.state.mobileNo);
      }
    };
    validatePassword = (text) => {
      // console.log(text);
      let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
      if (reg.test(text) === false) {
        // console.log('Password Not Valid');
        this.setState({
          password: text,
          passwordError:
            'Minimum eight & maximum 15 characters, at least one letter, one number and one special character required',
          isPasswordvalidate: false,
        });
        return false;
      } else {
        // console.log('text==', text);
        this.setState({
          password: text,
          passwordError: '',//'Valid Password',
          isPasswordvalidate: true,
        });
        // console.log('Password is Correct', text, '---');
      }
    };
    checkPassword = (text) => {
      if (this.state.password === text) {
        this.setState({
          cpassword: text,
          cpasswordError: '',//'Password matched',
          isCPasswordvalidate: true,
        });
        return false;
      } else {
        this.setState({
          cpassword: text,
          cpasswordError: 'Password Does not match',
          isCPasswordvalidate: false,
        });
      }
    };

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
              style={styles.bgImg}>
              <Header/>
              <Text style={{ fontSize:32,textAlign:'center'}}> Create Account </Text>

              <View style={styles.signUpContainer}>
                <InputContainer
                  iconName="person"
                  errorIcon={this.state.errorIcon}
                  placeholder="First Name"
                  onChangeText={(text) =>
                    this.setState({
                      firstName: text,
                    })
                  }
                />
                {this.state.isFnNamevalidate ? (
                  <Text style={(styles.errorMsg, {color: 'green'})}>
                    {this.state.fnError}
                  </Text>
                ) : (
                  <Text style={styles.errorMsg}>{this.state.fnError}</Text>
                )}
                <InputContainer
                  iconName="person"
                  errorIcon={this.state.errorIcon}
                  placeholder="Last Name"
                  onChangeText={(text) =>
                    this.setState({
                      lastName: text,
                    })
                  }
                />
                {/* value={this.state.lastname} */}
                {this.state.isLnNamevalidate ? (
                  <Text style={(styles.errorMsg, {color: 'green'})}>
                    {this.state.lnError}
                  </Text>
                ) : (
                  <Text style={styles.errorMsg}>{this.state.lnError}</Text>
                )}
                <InputContainer
                  iconName="email"
                  errorIcon={this.state.errorIcon}
                  // value={this.state.email}
                  placeholder="Enter Email"
                  onChangeText={(text) =>
                    this.setState({
                      email: text,
                    })
                  }
                />
                {this.state.isEmailvalidate ? (
                  <Text style={(styles.errorMsg, {color: 'green'})}>
                    {this.state.emailError}
                  </Text>
                ) : (
                  <Text style={styles.errorMsg}>{this.state.emailError}</Text>
                )}

                <InputContainer
                  iconName="phone"
                  errorIcon={this.state.errorIcon}
                  keyboardType='numeric'
                  placeholder="Enter Mobile No."
                  // value={this.state.phone}
                  maxLength={10}
                  onChangeText={(text) =>
                    this.setState({
                      mobileNo: text,
                    })
                  }
                />
                {this.state.isMobileValidate ? (
                  <Text style={(styles.errorMsg, {color: 'green'})}>
                    {this.state.phoneError}
                  </Text>
                ) : (
                  <Text style={styles.errorMsg}>{this.state.phoneError}</Text>
                )}
                {/* <InputContainer iconName='flag' placeholder='Select Country'/> */}
                {/* <View style={style1.inputContainer}>
                  <Icon
                    name="flag" //"person-outline"
                    color="#000"
                    size={20}
                    style={style1.inputIcon}
                  />
                  <Picker style={style1.picker}  onSelect={(country) => this.setState({country:country})}>
                    {/* <Picker.Item></Picker.Item> 
                  </Picker>
                </View> */}
                <InputContainer
                  iconName="lock"
                  errorIcon={this.state.errorIcon}
                  // value={this.state.password}
                  placeholder="Enter Password"
                  extraIconName={this.state.toggleIcon}
                  onToggle={this.handleToggle}
                  secureText={this.state.isSecurePassword}
                  onChangeText={(text) =>
                    this.setState({
                      password: text,
                    })
                  }
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
                <InputContainer
                  iconName="lock"
                  
                  errorIcon={this.state.errorIcon}
                  // value={this.state.cpassword}
                  placeholder="Confirm Password"
                  secureText="true"
                  onChangeText={(text) =>
                    this.setState({
                      cpassword: text,
                    })
                  }
                />
                {this.state.isCPasswordvalidate ? (
                  <Text style={(styles.errorMsg, {color: 'green'})}>
                    {this.state.cpasswordError}
                  </Text>
                ) : (
                  <Text style={styles.errorMsg}>
                    {this.state.cpasswordError}
                  </Text>
                )}
                <SubmitButton onPress={this.handleEventsBaar} buttonText="SignUp" />
                {/* <SubmitButton /> */}

                <View style={styles.footer}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignIn')}>
                    <Text style={styles.footerText}>
                      Already Registered! {' '}<Text style={{fontWeight:'bold'}}>Login</Text>
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

export default Register;

const style1 = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    borderColor: '#FFF',
    borderWidth: 0.5,
    borderRadius: 14,
    backgroundColor: '#fff',
    padding: 13,
    width: '100%',
  },

  picker: {
    backgroundColor: 'red',
  },
  inputIcon: {marginLeft: 10, marginRight: 20, fontSize: 20, color: '#28388f'},
});
