import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Products from './Products';
import ProductDetail from './ProductDetail';
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
  handlePressPhoBien = () => {
    this.setState({
      orderBy: 'PHO_BIEN',
    });
  };
  handlePressMoiNhat = () => {
    this.setState({
      orderBy: 'MOI_NHAT',
    });
  };
  handlePressBanChay = () => {
    this.setState({
      orderBy: 'BAN_CHAY',
    });
  };
  handlePressGia = () => {
    this.setState({
      orderBy: 'GIA',
    });
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
    console.log(this.state.page);
  };
  // handleShowProductDetail= (){
  //   const { navigation } = this.props;

  // }
  render() {
    const { products, userLogin } = this.props;
    const { page, productPressed } = this.state;
    console.log('>>>>>>Check productPressed', productPressed);
    return (
      <View style={{}}>
        {page === 'PRODUCT' ? (
          <Products
            products={products}
            userLogin={userLogin}
            handleAddBag={this.handleAddBag}
            handlePressPhoBien={this.handlePressPhoBien}
            handlePressMoiNhat={this.handlePressMoiNhat}
            handlePressBanChay={this.handlePressBanChay}
            handlePressGia={this.handlePressGia}
            handlePressProductImage={this.handlePressProductImage}
          />
        ) : (
          <ProductDetail handleBack={this.handleBack} product={this.state.productPressed} />
        )}
      </View>
    );
  }
}
// ghi dữ liệu từ state của redux vào props của component
const mapStateToProps = (state) => {
  return { products: state.products.products, userLogin: state.userLogin.userLogin };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddProductToBag: (product, userLogin) =>
      dispatch({ type: 'ADD_PRODUCT_BAG', payload: { product: product, userLogin: userLogin } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
