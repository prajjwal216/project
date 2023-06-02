import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../../assets/images';
import COLORS from '../../../constants/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ForgotPassword = ({navigation}) => {
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
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.subtitle}>
              No worries, we'll send you reset instructions.
            </Text>
          </View>
          <View style={styles.text}>
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"></TextInput>
            <TouchableOpacity style={styles.eye}>
              <Image source={Images.layer3}></Image>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.logins}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.loginText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ForgotPassword;

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
    marginTop: 50,

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
    marginTop: 40,
    elevation: 20,
    paddingHorizontal: 10,
  },
  eye: {
    position: 'absolute',
    right: 20,
    bottom: 10,
  },
});
