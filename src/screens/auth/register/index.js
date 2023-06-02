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

const Register = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

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
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>
              Hello, I guess you are new around here.
            </Text>
          </View>

          <View style={styles.text}>
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Full Name"></TextInput>
              <TouchableOpacity style={styles.eye}>
                <Image source={Images.layer3}></Image>
              </TouchableOpacity>
            </View>
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Email Address"></TextInput>
              <TouchableOpacity style={styles.eye}>
                <Image source={Images.layer3}></Image>
              </TouchableOpacity>
            </View>
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="License No. "></TextInput>
              <TouchableOpacity style={styles.eye}>
                <Image source={Images.layer3}></Image>
              </TouchableOpacity>
            </View>
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Password"></TextInput>
              <TouchableOpacity style={styles.eye}>
                <Image source={Images.layer1}></Image>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"></TextInput>
            <TouchableOpacity style={styles.eye}>
              <Image source={Images.layer1}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.check}>
            <CheckBox
              style={{flex: 1}}
              onClick={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
              rightText={'I accept Hefson Terms of Use'}
            />
          </View>
          <TouchableOpacity
            style={styles.logins}
            onPress={() => navigation.navigate('OtpVerify')}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.account}>
            <Text style={styles.textacc}>
              Already have an account?{' '}
              <Text tyle={styles.textaccount}> Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Register;

const styles = StyleSheet.create({
  hefson: {},
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
    marginTop: 20,
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
    bottom: 10,
  },
});
