import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Modal, Dimensions } from 'react-native';
import PriceFormat from './PriceFormat';
import AddQty from './AddQty';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import * as Constant from '../common/Constant';
const screenHeight = Dimensions.get('window').height;
class ProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qty: 1 };
  }
  setVisibility = () => {
    this.props.handleCloseModal(false);
  };

  upDateQty = (newQty) => {
    this.setState({
      qty: newQty,
    });
  };
  handleAddBagWithQty = (product, qty, userLogin) => {
    this.props.AddQtyToBag(product, qty, userLogin);
  };
  handleMuaNgay = () => {
    const { navigation } = this.props;
    navigation.navigate('PayScreen', {
      product: this.props.product,
      qty: this.state.qty,
      userLogin: this.props.userLogin,
    });
    this.props.handleCloseModal(false);
  };
  render() {
    const { product, textSubmit, visibility, userLogin } = this.props;
    {
      return (
        <Modal animationType="slide" visible={visibility} transparent={true}>
          <View style={styles.modalContent}>
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-end' }}>
              <Image resizeMode="contain" style={{ width: 150, height: 150, marginRight: 5 }} source={product.avatar} />
              <Text style={{ color: 'red' }}>
                <PriceFormat price={product.price} />
              </Text>
            </View>
            <Divider style={{ marginBottom: 10, marginTop: 10 }} />
            <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0 }} onPress={() => this.setVisibility()}>
              <Icon name="clear" size={30} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Số lượng</Text>
              <AddQty upDateQty={this.upDateQty} />
            </View>
            <Divider style={{ marginBottom: 30, marginTop: 10 }} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'orange',
                  width: '100%',
                  height: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  if (textSubmit === Constant.THEM_VAO_GIO) {
                    this.handleAddBagWithQty(product, this.state.qty, userLogin);
                  } else {
                    this.handleMuaNgay();
                  }
                }}
              >
                <Text>{textSubmit}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      );
    }
  }
}
const styles = StyleSheet.create({
  modalContent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxHeight: screenHeight * 0.6,
    minHeight: screenHeight * 0.3,
    backgroundColor: '#fff',
    padding: 5,
  },
});
const mapStateToProps = (state) => {
  return { countPIB: state.users.countPIB, users: state.users, userLogin: state.userLogin.userLogin };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddQtyToBag: (product, qty, userLogin) =>
      dispatch({ type: 'ADD_QTY_TO_BAG', payload: { product: product, qty: qty, userLogin: userLogin } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
