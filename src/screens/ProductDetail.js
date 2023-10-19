import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PriceFormat from '../component/PriceFormat';
import RatingComponent from '../component/RatingComponent';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// renderPhoto = ({ item, index }) => {
//   return (
//     <View style={{ width: 500 + 5, height: 'auto', flexDirection: 'row' }}>
//       <FastImage resizeMode={'contain'} source={item.path} />
//       {this.itemSeparatorComponent()}
//     </View>
//   );
// };
class ProductDetail extends React.Component {
  render() {
    const { product } = this.props.route.params;
    console.log(this.props);
    return (
      <View>
        <View>
          {/* <ScrollView>
            <View>
              <FlatList
                scrollEnabled={false}
                data={product.images}
                horizontal
                keyExtractor={(item) => item.id.toString()} //key
                renderItem={({ item }) => (
                  <View
                    style={{
                    //  width: '30%',
                    //  height: 350,
                    //  justifyContent: 'space-around',
                    //  flexDirection: 'column',
                    //  backgroundColor: '#fff',
                    //  margin: 2,
                    //  borderRadius: 2,
                    //  padding: 3,
                    }}
                  >
                    <Image style={{ resizeMode: 'contain', width: '100%', height: 300 }} source={item.path} />
                  </View>
                )}
              />
            </View>
          </ScrollView> */}
          {/* <View>
            <FlatList
              horizontal
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              data={product}
              renderItem={(item) => this.renderPhoto(item)}
              keyExtractor={(photo) => photo.id}
              style={{ width: 500 + 5, height: '100%' }}
            />
          </View> */}
        </View>
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
