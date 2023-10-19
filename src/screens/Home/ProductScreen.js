import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Products from '../Products';
import ProductDetail from '../ProductDetail';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
class ProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'PHO_BIEN',
      page: 'PRODUCT',
      productPressed: {},
    };
  }
  handleAddBag = (product, userLogin) => {
    this.props.AddProductToBag(product, userLogin);
  };

  handlePressProductImage = (product) => {
    this.setState({
      page: 'PRODUCT_DETAIL',
      productPressed: product,
    });
    // Alert.alert(product.title);
  };
  handleBack = () => {
    this.setState({
      page: 'PRODUCT',
    });
  };
  handleShowProductDetail = () => {
    const { navigation } = this.props;
    navigation.navigate('ProductDetail');
  };
  handleProductDetail = (product) => {
    const { navigation } = this.props;
    navigation.navigate('ProductDetail', { product: product });
  };
  render() {
    const { page, productPressed } = this.state;
    return (
      <>
        <View style={{}}>
          <TouchableOpacity
            onPress={() => {
              this.handleShowProductDetail();
            }}
          >
            <Text>sssssssssss</Text>
          </TouchableOpacity>
          <Products
            searchVal={this.props.searchVal}
            handleAddBag={this.handleAddBag}
            handlePressProductImage={this.handlePressProductImage}
            handleProductDetail={this.handleProductDetail}
          />
        </View>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </>
    );
  }
}
// ghi dữ liệu từ state của redux vào props của component
// const mapStateToProps = (state) => {
//   return { products: state.products.products, userLogin: state.userLogin.userLogin };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    AddProductToBag: (product, userLogin) =>
      dispatch({ type: 'ADD_PRODUCT_BAG', payload: { product: product, userLogin: userLogin } }),
  };
};
export default connect(null, mapDispatchToProps)(ProductScreen);
