import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import React from 'react';
import { Users } from '../model/user';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { Icon } from 'react-native-elements';
import { Button } from '@rneui/themed';
import { Input } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CheckBox } from 'react-native-elements';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass: '',
      isLoading: false,
    };
  }
  handleChangeUsername = (val) => {
    this.setState({
      username: val,
    });
  };
  handleChangePass = (val) => {
    this.setState({
      pass: val,
    });
  };
  handleLogin = (username, pass) => {
    this.setState({
      isLoading: true,
    });
    // Trả về mảng user thoả mãn
    const foundUser = Users.filter((item) => {
      return item.username === username && item.password === pass;
    });
    // Alert.alert(foundUser);
    if (username === '') {
      Alert.alert('Lỗi đăng nhập', 'Tài khoản không được trống', [{ text: 'OK' }]);
      this.setState({
        isLoading: false,
      });
      return;
    }
    if (pass === '') {
      this.setState({
        isLoading: false,
      });
      Alert.alert('Lỗi đăng nhập', 'Mật khẩu không được trống', [{ text: 'OK' }]);
      return;
    }
    if (!foundUser || foundUser.length === 0) {
      this.setState({
        isLoading: false,
      });
      Alert.alert('Lỗi đăng nhập', 'Tài khoản hoặc mật khẩu không đúng', [{ text: 'OK' }]);
      return;
    }
  };
  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }
  render() {
    const { username, pass } = this.state;
    return (
      <>
        <View style={styles.headImg}>
          <Image
            style={{ height: '90%', margin: 0, resizeMode: 'contain' }}
            source={require('../assets/images/suvip-removebg-preview.png')}
          />
        </View>

        <View style={styles.logoContainer}>
          <Image style={{ resizeMode: 'contain' }} source={require('../assets/images/VIP-removebg-preview.png')} />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Input placeholder="Tài khoản" leftIcon={<Icon name="account-outline" size={20} color={'#F1AF00'} />} />
          <Input placeholder="Mật khẩu" leftIcon={<Icon name="lock" size={20} color={'#F1AF00'} />} />
          <View style={styles.signIn}>
            <Button title={'Đăng nhập'} buttonStyle={styles.butSignIn} />
            <Icon name="fingerprint" style={{ flex: 1 }} color={'#F1AF00'} size={50} />
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
  headImg: {
    height: '30%',
  },
  // logoContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  //   height: '25%',
  // },
  // checkboxContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   // height: 20,
  //   backgroundColor: '#367517',
  // },
  signIn: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  signUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    padding: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  // container: {
  //   position: 'absolute',
  //   flex: 1,
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   borderBottomRightRadius: 0,
  //   borderBottomLeftRadius: 0,
  //   top: '25%',
  //   bottom: 0,
  //   width: '100%',
  //   backgroundColor: '#367517',
  //   justifyContent: 'center',
  //   // alignItems: 'center',
  // },
  // loading: { zIndex: 999, position: 'absolute', flex: 1, justifyContent: 'center', alignItems: 'center' },
  // form: {
  //   alignItems: 'center',
  //   padding: 20,
  //   verticalAlign: 'center',
  // },
  // inputPass: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // eyeIcon: { left: -10 },
  // headImg: {
  //   width: 200,
  // },
  // headerText: {
  //   color: '#fff',
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   marginTop: 80,
  //   marginBottom: 80,
  // },
  // txtUser: {
  //   marginTop: 10,
  //   width: 300,
  //   height: 40,
  //   backgroundColor: '#fff',
  //   borderRadius: 5,
  //   paddingHorizontal: 10,
  //   color: 'black',
  // },
  // txtPass: {
  //   marginTop: 10,
  //   width: 300,
  //   height: 40,
  //   backgroundColor: '#fff',
  //   borderRadius: 5,
  //   paddingHorizontal: 10,
  //   color: 'black',
  // },
  butSignIn: {
    flex: 3,
    backgroundColor: '#F1AF00',
    borderRadius: 30,
    textAlign: 'center',
    shadowColor: 'black', // Màu bóng
    shadowOffset: { width: 10, height: 10 }, // Độ dịch chuyển của bóng
    shadowOpacity: 0.5, // Độ trong suốt của bóng (0 - 1)
    shadowRadius: 3, // Độ cong của bóng
    elevation: 3, // Cho Android, tương tự shadowRadius
  },
  // butSignUp: {
  //   textAlign: 'center',
  //   width: 200,
  //   height: 40,
  //   backgroundColor: '#F1AF00',
  //   borderRadius: 5,
  //   shadowColor: 'black', // Màu bóng
  //   shadowOffset: { width: 10, height: 10 }, // Độ dịch chuyển của bóng
  //   shadowOpacity: 0.5, // Độ trong suốt của bóng (0 - 1)
  //   shadowRadius: 3, // Độ cong của bóng
  //   elevation: 3, // Cho Android, tương tự shadowRadius
  // },
  // buttonText: {
  //   color: '#000',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // forgetPassLink: {
  //   color: '#fff',
  //   textAlign: 'left',
  //   marginTop: 10,
  // },
});
export default Login;
