import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../../assets/images';
import COLORS from '../../../constants/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpVerify = ({navigation}) => {
  const [otp, setOtp] = useState();

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
            <Text style={styles.title}>Enter Code</Text>
            <Text style={styles.subtitle}>
              Verification Code Sent on ex****12@gmail.com
            </Text>
          </View>
          <View style={{flex: 1, marginVertical: 30}}>
            <OTPInputView
              style={{
                alignSelf: 'center',
              }}
              pinCount={6}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                setOtp(code);
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.logins}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.loginText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default OtpVerify;

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
    flex: 1,
    marginHorizontal: 20,
    marginTop: 120,
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

  logins: {
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5,
    shadowColor: 'grey',
    shadowRadius: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '100%',
    height: 46,
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
    marginTop: 30,
  },
  textacc: {
    fontSize: 17,
  },
  textaccount: {
    color: COLORS.PRIMARY,
  },
  borderStyleHighLighted: {
    borderColor: COLORS.PRIMARY,
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 4,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 30,
    padding: 5,

    marginLeft: 5,
  },
  underlineStyleHighLighted: {
    borderColor: COLORS.PRIMARY,
  },
});
