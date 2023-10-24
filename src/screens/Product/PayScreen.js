import { Icon } from '@rneui/themed';
import React from 'react';
import { connect } from 'react-redux';
import PriceFormat from '../../component/PriceFormat';
import { Divider } from 'react-native-paper';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { dividerStyle } from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
class PayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { product, userLogin, qty } = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={styles.address}>
          <View style={styles.addressHeader}>
            <Icon name="location-pin" size={24} />
            <Text>Địa chỉ nhận hàng</Text>
          </View>
          <Text>{userLogin.address}</Text>
        </View>
        <Divider style={dividerStyle} />
        <View style={styles.product}>
          <Image style={styles.productImage} source={product.avatar} />
          <View style={styles.productContent}>
            <Text>{product.title}</Text>
            <PriceFormat price={product.price} />
            <Text>Số lượng: {qty}</Text>
          </View>
        </View>
        <Divider style={dividerStyle} />
        <View style={styles.payDetail}>
          <View style={styles.payDetailItem}>
            <View>
              <MaterialCommunityIcons name="view-list-outline" size={24} />
              <Text>Chi tiết thanh toán</Text>
            </View>
          </View>
          <View style={styles.payDetailItem}>
            <Text>Tổng tiền hàng</Text>
            <Text>
              <PriceFormat price={product.price * qty} />
            </Text>
          </View>
          <View style={styles.payDetailItem}>
            <Text>Phí vận chuyển</Text>
            <Text>
              <PriceFormat price={30000} />
            </Text>
          </View>
          <View style={styles.payDetailItem}>
            <Text style={{ fontWeight: 'bold' }}>Tổng thanh toán</Text>
            <Text style={{ color: 'red' }}>
              <PriceFormat price={product.price * qty + 30000} />
            </Text>
          </View>
        </View>
        <Divider style={dividerStyle} />
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
  container: { flex: 1 },
  address: { width: '100%', height: 100 },
  addressHeader: { flexDirection: 'row' },
  product: { width: '100%', height: 100, flexDirection: 'row' },
  productImage: { width: 100, height: 100, marginLeft: 20, marginRight: 10 },
  productContent: { flexDirection: 'column', justifyContent: 'flex-end' },
  payDetail: { width: '100%', height: 180 },
  payDetailItem: { width: '100%', height: 40, flexDirection: 'row', justifyContent: 'space-between' },
  submit: { width: '100%', height: 50, justifyContent: 'flex-end' },
  touchSubmit: { width: '30%', height: '100%' },
});
const mapStateToProps = (state) => {
  return { userLogin: state.userLogin.userLogin };
};
export default connect(mapStateToProps)(PayScreen);
