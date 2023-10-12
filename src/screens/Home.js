import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Input, Icon, Button } from '@rneui/themed';
import Temp from './template';
class Home extends React.Component {
  render() {
    return (
      <>
        <Image
          style={{ height: '25%', margin: 0, resizeMode: 'contain' }}
          source={require('../assets/images/suvip-removebg-preview.png')}
        />

        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/images/VIP-removebg-preview.png')} />
          </View>

          <Input placeholder="Tài khoản" leftIcon={<Icon name="account-outline" size={20} color={'#F1AF00'} />} />
          <Input placeholder="Mật khẩu" leftIcon={<Icon name="lock" size={20} color={'#F1AF00'} />} />
          <View style={styles.signIn}>
            <Button title={'Đăng nhập'} buttonStyle={styles.butSignIn} />
            <Icon name="fingerprint" color={'#F1AF00'} size={50} />
          </View>
          <View style={styles.signUp}>
            <Button title={'Chưa có tài khoản'} buttonStyle={styles.butSignUp} />
          </View>
          <Text>Quên mật khẩu</Text>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: { backgroundColor: 'grey', height: '70%', top: '25%', justifyContent: 'flex-start' },
  txtInput: { backgroundColor: 'pink', height: '30%' },
});
export default Home;
