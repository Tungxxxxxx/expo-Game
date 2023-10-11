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
} from "react-native";
import { useRef, useEffect } from "react";
export default function Login() {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  });
  handleLogin = () => {
    Alert.alert("Hãy nhập mật khẩu");
  };
  return (
    // <SafeAreaView>
    <ImageBackground
      source={require("../assets/images/41d02f4e4b5585bdfb2fca209436c301.jpg")}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.headerText}> Chơi game hay tiền về ngay</Text>
          <TextInput style={styles.txtUser} ref={ref} placeholder="Tài khoản" />
          <TextInput style={styles.txtPass} placeholder="Mật khẩu" />
          <TouchableOpacity
            style={styles.butSignIn}
            onPress={handleLogin} // Khi nhấn, gọi hàm handleLogin
          >
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butSignUp}>
            <Text style={styles.buttonText}>Chưa có tài khoản</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Nạp rút nhanh chóng</Text>
        </View>
      </View>
    </ImageBackground>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  form: {
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontFamily: "Roboto-Italic",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 80,
    marginBottom: 80,
  },
  txtUser: {
    marginTop: 10,
    width: 200,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "black",
  },
  txtPass: {
    marginTop: 10,
    width: 200,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "black",
  },
  butSignIn: {
    marginTop: 10,
    width: 200,
    height: 40,
    backgroundColor: "orange",
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
  },
  butSignUp: {
    textAlign: "center",
    marginTop: 10,
    width: 200,
    height: 40,
    backgroundColor: "orange",
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "#000", // Màu chữ của button (có thể sửa lại màu)
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
