import { Icon } from '@rneui/themed';
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PriceFormat from '../../component/PriceFormat';
import { Divider } from 'react-native-paper';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
class PayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { userLogin } = this.props.userLogin;
    const { product } = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={styles.address}>
          <View style={styles.addressHeader}>
            <Icon name="location" size={24} />
            <Text>Địa chỉ nhận hàng</Text>
          </View>
          <Text>{userLogin.address}</Text>
        </View>
        <Divider />
        <View style={styles.product}>
          <Image style={styles.productImage} source={product.avatar} />
          <View style={styles.productContent}>
            <Text>{product.title}</Text>
            <PriceFormat price={product.price} />
          </View>
        </View>
        <Divider />
        <View style={styles.payDetail}>
          <View style={styles.payDetailItem}>
            <Text>Chi tiết thanh toán</Text>
          </View>
          <View style={styles.payDetailItem}>
            <Text>Tổng tiền hàng</Text>
            <PriceFormat price={product.price} />
          </View>
          <View style={styles.payDetailItem}>
            <Text>Phí vận chuyển</Text>
            <PriceFormat price={30000} />
          </View>
          <Divider style={{ backgroundColor: 'orange' }} />
          <View style={styles.payDetailItem}>
            <Text>Tổng thanh toán</Text>
            <PriceFormat price={product.price} />
          </View>
        </View>
        <View style={styles.submit}>
          <TouchableOpacity style={styles.touchSubmit}>
            <Text>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  address: { width: '100%', height: 100 },
  addressHeader: { flexDirection: 'row' },
  product: { width: '100%', height: 100, flexDirection: 'row' },
  productImage: { width: 100, height: 100 },
  productContent: { flexDirection: 'column' },
  payDetail: { width: '100%', height: 100 },
  payDetailItem: { width: '100%', height: 40, flexDirection: 'row' },
  submit: { width: '100%', height: 50, justifyContent: 'flex-end' },
  touchSubmit: { width: '30%', height: '100%' },
});
const mapStateToProps = (state) => {
  return { userLogin: state.userLogin.userLogin };
};
export default connect(mapStateToProps)(PayScreen);
