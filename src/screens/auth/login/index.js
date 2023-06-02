import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../../assets/images';
import COLORS from '../../../constants/colors';
import CheckBox from 'react-native-check-box';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
const Login = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const managePasswordvisbility = () => {
    isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}
        bounces={false}>
        <View style={styles.headerImage}>
          <Image source={Images.hefson} style={styles.hefson}></Image>
        </View>

        <View style={styles.login}>
          <View>
            <Text style={styles.title}>Let's Log in</Text>
            <Text style={styles.subtitle}>
              Welcome Back, you've been missed!
            </Text>
          </View>

          <View style={styles.text}>
          <View> 
          <TextInput
              style={styles.textInput}
              placeholder="Email Address"></TextInput>
            <TouchableOpacity style={styles.eye}>
              <Image source={Images.layer3}></Image>
            </TouchableOpacity>
            </View> 
            <TextInput
              style={styles.textInput}
              placeholder="Password"></TextInput>
            <TouchableOpacity style={styles.eye}>
              <Image
                name={isPasswordSecure ? 'eye-off' : 'eye'}
                source={Images.layer1}
                onPress={() => managePasswordvisbility()}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.check}>
            <CheckBox
              style={{flex: 1}}
              onClick={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
              rightText={'Keep me signed in'}
            />
            <TouchableOpacity style={styles.forgot}>
              <Text style={styles.forgotPass}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.logins}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.account}>
            <Text style={styles.textacc}>
              Don't have an account yet?{' '}
              <Text tyle={styles.textaccount}> Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  headerImage: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  container: {
    flex: 1,
  },
  login: {
    flex: 0.75,
    marginHorizontal: 20,
    marginTop: 70,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: COLORS.PRIMARY,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.PRIMARY,
    marginTop: 8,
  },
  text: {
    flex: 0.4,
  },
  textInput: {
    shadowOffset: {},
    shadowOpacity: 0.5,
    shadowColor: 'grey',
    shadowRadius: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '100%',
    height: 43,
    marginTop: 30,
    elevation: 20,
    paddingHorizontal: 10,
  },
  check: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 30,
  },
  forgot: {
    marginTop: 3,
  },
  forgotPass: {
    fontSize: 14,
    fontWeight: '400',
  },
  logins: {
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5,
    shadowColor: 'grey',
    shadowRadius: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '100%',
    height: 46,
    marginTop: 40,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 18,
    fontWeight: '600',
  },
  account: {
    alignItems: 'center',
    marginTop: 15,
  },
  textacc: {
    fontSize: 17,
  },
  textaccount: {
    color: COLORS.PRIMARY,
  },
  eye: {
    position: 'absolute',
    right: 20,
    bottom: 13,
  },
});
