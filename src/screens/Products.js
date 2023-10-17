import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import AppbarComponent from '../component/AppbarComponent';
import { ScrollView } from 'react-native-gesture-handler';
import RatingComponent from '../component/RatingComponent';
import PriceFormat from '../component/PriceFormat';

class Products extends React.Component {
  handlePressProduct = (product) => {
    this.props.handlePressProductImage(product);
  };
  render() {
    const { products, userLogin } = this.props;
    return (
      <>
        <View style={{ zIndex: 2 }}>
          <AppbarComponent />
        </View>
        <View style={{ backgroundColor: '#e1f0ff' }}>
          <View
            style={{
              width: '100%',
              marginTop: 65,
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: '#e1f0ff',
            }}
          >
            <View style={{ width: '25%', height: 32, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.props.handlePressPhoBien();
                }}
              >
                <Text
                  style={{
                    color: 'rgb(57, 58, 52)',
                    fontSize: 15,
                    backgroundColor: '#e1f0ff',
                  }}
                >
                  Phổ biến
                </Text>
                {/* {1 === 1 ? (
                    <View
                      style={{ width: '100%', height: '2', backgroundColor: 'orange', position: 'absolute', bottom: 0 }}
                    ></View>
                  ) : (
                    <></>
                  )} */}
              </TouchableOpacity>
            </View>
            <View style={{ width: '25%', height: 32, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.props.handlePressMoiNhat();
                }}
              >
                <Text
                  style={{
                    color: 'rgb(57, 58, 52)',
                    fontSize: 15,
                    backgroundColor: '#e1f0ff',
                  }}
                >
                  Mới nhất
                </Text>
              </TouchableOpacity>
              {/* {this.state.orderBy === 'MOI_NHAT' ? (
                  <View
                    style={{ width: '100%', height: '2', backgroundColor: 'orange', position: 'absolute', bottom: 0 }}
                  ></View>
                ) : null} */}
            </View>
            <View style={{ width: '25%', height: 32, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.props.handlePressBanChay();
                }}
              >
                <Text
                  style={{
                    color: 'rgb(57, 58, 52)',
                    fontSize: 15,
                    backgroundColor: '#e1f0ff',
                  }}
                >
                  Bán chạy
                </Text>
              </TouchableOpacity>
              {/* {this.state.orderBy === 'BAN_CHAY' ? (
                  <View
                    style={{ width: '100%', height: '2', backgroundColor: 'orange', position: 'absolute', bottom: 0 }}
                  ></View>
                ) : null} */}
            </View>
            <View style={{ width: '25%', height: 32, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                style={{ width: '100%', height: 30, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.props.handlePressGia();
                }}
              >
                <Text
                  style={{
                    color: 'rgb(57, 58, 52)',
                    fontSize: 15,
                    backgroundColor: '#e1f0ff',
                  }}
                >
                  Giá
                </Text>
              </TouchableOpacity>
              {/* {this.state.orderBy === 'GIA' ? (
                  <View
                    style={{ width: '100%', height: '2', backgroundColor: 'orange', position: 'absolute', bottom: 0 }}
                  ></View>
                ) : null} */}
            </View>
          </View>
          <View>
            <Divider />
          </View>
        </View>
        {/* <ScrollView> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: '100%',
              flex: 1,
              marginTop: 5,
              marginBottom: 150,
              flexDirection: 'row',
              flexWrap: 'wrap', // Cho phép xuống dòng
              justifyContent: 'space-around',
              paddingLeft: 5,
            }}
          >
            <FlatList
              scrollEnabled={false}
              data={products}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()} //key
              renderItem={({ item }) => (
                <View
                  style={{
                    width: '48%',
                    height: 350,
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    margin: 2,
                    borderRadius: 2,
                    padding: 3,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.handlePressProduct(item);
                    }}
                  >
                    <Image style={{ resizeMode: 'contain', width: '100%', height: 200 }} source={item.avatar} />
                  </TouchableOpacity>
                  <Text>{item.title}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Text style={{ color: 'red' }}>
                      <PriceFormat price={item.price} />
                    </Text>
                    <Text style={{ color: 'red', fontStyle: 'italic' }}> -{item.saleOff}</Text>
                  </View>
                  <RatingComponent rating={item.rating} />
                  <TouchableOpacity
                    style={{
                      width: '70%',
                      height: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'orange',
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      this.props.handleAddBag(item, userLogin);
                    }}
                  >
                    <Text
                      style={{
                        color: 'rgb(57, 58, 52)',
                        fontSize: 13,
                      }}
                    >
                      Thêm vào giỏ
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: '70%',
                      height: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'orange',
                      borderRadius: 10,
                    }}
                    onPress={() => {
                      this.props.handleAddBag(item, userLogin);
                    }}
                  >
                    <Text
                      style={{
                        color: 'rgb(57, 58, 52)',
                        fontSize: 13,
                      }}
                    >
                      Mua ngay
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Products;
