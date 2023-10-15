import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import { Icon } from '@rneui/themed';
import AppbarComponent from '../component/AppbarComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { products } = this.props;
    // console.log('>>>>>>Check dmmm', this.props);
    return (
      <View>
        <View>
          <AppbarComponent />
        </View>
        <View style={{ marginTop: 65, marginBottom: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            labelStyle={{ color: 'rgb(57, 58, 52)', fontSize: 10 }}
            uppercase={false}
            style={{ width: '20%', height: 30, backgroundColor: '#e1f0ff' }}
          >
            Phổ biến
          </Button>
          <Button
            labelStyle={{ color: 'rgb(57, 58, 52)', fontSize: 10 }}
            uppercase={false}
            style={{ width: '20%', height: 30, backgroundColor: '#e1f0ff' }}
          >
            Mới nhất
          </Button>
          <Button
            labelStyle={{ color: 'rgb(57, 58, 52)', fontSize: 10 }}
            uppercase={false}
            style={{ width: '20%', height: 30, backgroundColor: '#e1f0ff' }}
          >
            Bán chạy
          </Button>
          <Button
            labelStyle={{ color: 'rgb(57, 58, 52)', fontSize: 10 }}
            uppercase={false}
            style={{ width: '20%', height: 30, backgroundColor: '#e1f0ff' }}
          >
            Giá
          </Button>
        </View>
        <View>
          <Divider />
        </View>
        {/* <ScrollView> */}
        <View
          style={{
            marginTop: 5,
            marginBottom: 5,
            flexDirection: 'row',
            flexWrap: 'wrap', // Cho phép xuống dòng
            justifyContent: 'space-around',
          }}
        >
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <View style={{ width: '48%', justifyContent: 'center', flexDirection: 'column' }}>
                <View style={{}}>
                  <Image
                    style={{ resizeMode: 'contain', width: '100%', height: 200 }}
                    source={require('../assets/images/products/sg-11134201-7rbl6-llyi1rl3t4ir54.jpg')}
                  />
                </View>
                <Text>Máy tính bảng Xiaomi pad 6</Text>
                <Text>6.990.000</Text>
                <Text>***** 1.899</Text>
              </View>
            )}
          />
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}
// ghi dữ liệu từ state của redux vào props của component
const mapStateToProps = (state) => {
  return { products: state.products };
};
export default connect(mapStateToProps, null)(HomeScreen);
