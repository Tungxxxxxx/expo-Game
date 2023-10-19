import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import PriceFormat from '../../component/PriceFormat';
import ProductScreen from './ProductScreen';
class BagScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckedAll: false,
      checkedItems: [],
      test: 'Chọn tất',
    };
  }
  sumPrices = (bags) => {
    let sum = 0;
    bags.forEach((item) => {
      sum += item.product.price * item.qty;
    });
    return sum;
  };
  handlePressAllCheck = (bags) => {
    const { isCheckedAll, checkedItems } = this.state;

    const updatedCheckedItems = isCheckedAll ? [] : bags.map((item) => item.product.id);
    const test = isCheckedAll ? 'Chọn hết' : 'Đã click All';
    console.log('>>>Check updatedCheckedItems', updatedCheckedItems);
    this.setState({
      isCheckedAll: !this.state.isCheckedAll,
      checkedItems: updatedCheckedItems,
      test: test,
    });
  };
  handleChecked = (productId) => {
    const checkedItemsUpdate = [...this.state.checkedItems];
    if (checkedItemsUpdate.includes(productId)) {
      checkedItemsUpdate.splice(checkedItemsUpdate.indexOf(productId), 1);
    } else {
      checkedItemsUpdate.push(productId);
    }
    this.setState({
      checkedItems: checkedItemsUpdate,
    });
  };
  render() {
    const { shoppingBagsUserLogin } = this.props;
    console.log(shoppingBagsUserLogin);
    return (
      <View>
        <View style={{ width: '100%', marginTop: 65 }}>
          {shoppingBagsUserLogin && shoppingBagsUserLogin.length > 0 ? (
            <>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, alignItems: 'center' }}>
                <View
                  style={{
                    width: '33%',
                    height: 30,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  <BouncyCheckbox
                    isChecked={this.state.isCheckedAll}
                    onPress={() => {
                      this.handlePressAllCheck(shoppingBagsUserLogin);
                    }}
                  />
                  <Text>{this.state.test}</Text>
                </View>
                <View style={{ width: '33%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: 'red' }}>
                    <PriceFormat price={this.sumPrices(shoppingBagsUserLogin)} />
                  </Text>
                </View>
                <View style={{ width: '33%', height: 30, alignItems: 'flex-end' }}>
                  <TouchableOpacity
                    style={{
                      width: '70%',
                      height: '100%',
                      backgroundColor: 'orange',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}
                  >
                    <Text>Mua ngay</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView>
                <View style={{ width: '100%', flexDirection: 'column', marginBottom: 150 }}>
                  <FlatList
                    // pagingEnabled={false}
                    scrollEnabled={false}
                    data={shoppingBagsUserLogin}
                    numColumns={1}
                    keyExtractor={(item) => item.product.id.toString()}
                    renderItem={({ item }) => (
                      <View
                        style={{
                          width: '100%',
                          //justifyContent: 'space-around',
                          flexDirection: 'row',
                          padding: 5,
                          borderBottomWidth: 1,
                          borderBottomColor: 'orange',
                        }}
                      >
                        <View style={{ width: 40, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                          <BouncyCheckbox
                            key={item.product.id}
                            isChecked={this.state.checkedItems.includes(item.product.id) || false}
                            onPress={() => this.handleChecked(item.product.id)}
                          />
                        </View>
                        <View style={{ height: 80, width: 80, justifyContent: 'center', marginRight: 3 }}>
                          <Image
                            style={{ resizeMode: 'contain', width: '100%', height: 180 }}
                            source={item.product.avatar}
                          />
                        </View>
                        <View>
                          <Text style={{ marginBottom: 3, fontSize: 15 }}>{item.product.title}</Text>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View>
                              <Text style={{ marginBottom: 3, fontSize: 15, color: 'red' }}>
                                <PriceFormat price={item.product.price} />
                              </Text>
                              <Text style={{ marginBottom: 3, fontSize: 15, color: 'red', fontStyle: 'italic' }}>
                                {' '}
                                -{item.product.saleOff}
                              </Text>
                              <Text style={{ marginBottom: 3, fontSize: 15 }}>Số lượng: {item.qty}</Text>
                            </View>
                            <Icon name="delete" color={'rgba(111, 202, 186, 1)'} size={25} />
                            <View
                              style={{
                                width: '40%',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                              }}
                            >
                              <TouchableOpacity
                                style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}
                                // onPress={() => {
                                //   this.handlePressMoiNhat();
                                // }}
                              >
                                <Text
                                  style={{
                                    color: 'rgb(57, 58, 52)',
                                    fontSize: 15,
                                    backgroundColor: '#e1f0ff',
                                  }}
                                >
                                  Mua ngay
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    )}
                  />
                </View>
              </ScrollView>
            </>
          ) : (
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Text>Chưa có sản phẩm nào</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { shoppingBagsUserLogin: state.users.shoppingBagsUserLogin };
};
export default connect(mapStateToProps)(BagScreen);
