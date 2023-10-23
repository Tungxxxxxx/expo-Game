import { Icon } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import ProductModal from './ProductModal';
class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibility: false, textSubmit: '' };
  }
  handleOpenModal = (textSubmit) => {
    console.log(textSubmit);
    this.setState({ visibility: true, textSubmit: textSubmit });
  };
  handleCloseModal = (visibility) => {
    this.setState({ visibility: visibility });
  };
  render() {
    const { visibility, textSubmit } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buyButton}>
          <TouchableOpacity style={styles.touch}>
            <Text>Nhắn tin</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buyButton}>
          <TouchableOpacity onPress={() => this.handleOpenModal('Thêm vào giỏ')}>
            <Text>Thêm vào giỏ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buyButton}>
          <TouchableOpacity onPress={() => this.handleOpenModal('Mua ngay')}>
            <Text>Mua ngay</Text>
          </TouchableOpacity>
        </View>
        {visibility ? (
          <ProductModal
            handleCloseModal={this.handleCloseModal}
            visibility={visibility}
            product={this.props.product}
            textSubmit={textSubmit}
            handleAddBagWithQty={this.props.handleAddBagWithQty}
          />
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buyButton: {
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  touch: {
    justifyContent: 'center',
  },
});
export default BottomBar;
