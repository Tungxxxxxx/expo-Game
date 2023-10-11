import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, { useRef, useEffect } from 'react';
import { Users } from '../model/user';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
      // <SafeAreaView>
      <ImageBackground source={require('../assets/images/41d02f4e4b5585bdfb2fca209436c301.jpg')} style={styles.bgImage}>
        <View style={styles.container}>
          <View style={styles.form}>
            {/* <Text style={styles.headerText}> Chơi game hay tiền về ngay</Text> */}
            {/* <Image style={styles.headImg} source={require('../assets/images/VIP.png')}></Image> */}
            <View style={styles.loading}>
              {this.state.isLoading && <ActivityIndicator color={'orange'} size="large" />}
            </View>

            <TextInput
              style={styles.txtUser}
              value={username}
              placeholder="Tài khoản"
              onChangeText={(val) => {
                this.handleChangeUsername(val);
              }}
            />
            <View style={styles.inputPass}>
              <TextInput
                style={styles.txtPass}
                placeholder="Mật khẩu"
                value={pass}
                onChangeText={(val) => {
                  this.handleChangePass(val);
                }}
              />
              <FontAwesome style={styles.eyeIcon} name="eye" size={16} color="greygit" />
            </View>
            <TouchableOpacity
              style={styles.butSignIn}
              onPress={() => this.handleLogin(username, pass)} // Khi nhấn, gọi hàm handleLogin
            >
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.butSignUp}>
              <Text style={styles.buttonText}>Chưa có tài khoản</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgetPassLink}>Quên mật khẩu</Text>
            </TouchableOpacity>
            {/* <Text style={styles.headerText}>Nạp rút nhanh chóng</Text> */}
          </View>
        </View>
      </ImageBackground>
      // </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    // height: '70%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  loading: { zIndex: 999, position: 'absolute', flex: 1, justifyContent: 'center', alignItems: 'center' },
  form: {
    alignItems: 'center',
    padding: 20,
    verticalAlign: 'center',
  },
  inputPass: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: { left: -10 },
  headImg: {
    width: 200,
  },
  headerText: {
    // fontFamily: 'Roboto-Italic',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 80,
  },
  txtUser: {
    marginTop: 10,
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'black',
  },
  txtPass: {
    marginTop: 10,
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'black',
  },
  butSignIn: {
    marginTop: 10,
    width: 200,
    height: 40,
    backgroundColor: 'orange',
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
  butSignUp: {
    textAlign: 'center',
    marginTop: 10,
    width: 200,
    height: 40,
    backgroundColor: 'orange',
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgetPassLink: {
    color: '#fff',
    textAlign: 'left',
    marginTop: 10,
  },
});
export default Login;
