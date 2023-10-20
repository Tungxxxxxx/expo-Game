import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PriceFormat from '../../component/PriceFormat';
import RatingComponent from '../../component/RatingComponent';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import Ratings from './Ratings';
import { Dimensions } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');
class ProductDetail extends React.Component {
  handleScrollImageProduct = (e) => {
    if (!e) {
      return;
    } else {
      const { nativeEvent } = e;
      let currentOffset = 0;
      if (nativeEvent && nativeEvent.contentOffset) {
        currentOffset = nativeEvent.contentOffset.x;
      }
      console.log('>>>>Check event scroll', currentOffset / screenWidth);
    }
  };
  render() {
    const { product } = this.props.route.params;
    console.log(product);
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <ScrollView>
          <View>
            <View>
              {/* <FlatList
                data={product.images}
                horizontal
                keyExtractor={(item) => item.id.toString()} //key
                renderItem={({ item }) => (
                  <View
                    style={{
                      width: '30%',
                      height: 350,
                      backgroundColor: '#fff',
                      margin: 2,
                      borderRadius: 2,
                      padding: 3,
                    }}
                  >
                    <Image
                      style={{
                        resizeMode: 'cover', // Chế độ hiển thị hình ảnh
                        width: '100%', // Sửa kích thước
                        height: 300,
                      }}
                      source={{ uri: item.path }} // Sử dụng uri cho đường dẫn
                    />
                  </View>
                )}
              /> */}
              <ScrollView
                pagingEnabled
                horizontal={true}
                contentContainerStyle={{ width: screenWidth * product.images.length, height: 300 }}
                scrollEventThrottle={16}
                onScroll={(e) => {
                  this.handleScrollImageProduct(e);
                }}
              >
                {product.images.map((item, i) => {
                  return <Image key={item.id} style={{ width: screenWidth, height: 300 }} source={item.path} />;
                })}
              </ScrollView>
            </View>
            <View style={{ width: '100%', height: 500 }}>
              <Text style={{ textIndent: 20 }}>{product.description}</Text>
              <Divider style={{ backgroundColor: 'green' }} />
              <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Đánh giá</Text>
                <Ratings product={product} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    width: 200, // Điều chỉnh kích thước mỗi item
    height: 100, // Điều chỉnh kích thước mỗi item
    margin: 10, // Khoảng cách giữa các item
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});

export default ProductDetail;
