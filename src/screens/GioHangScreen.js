import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import AppbarComponent from '../component/AppbarComponent';
import { connect } from 'react-redux';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
class GioHangScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
    };
  }
  render() {
    console.log('>>>Check props giỏ hàng:', this.props);
    const { shoppingBagsUserLogin } = this.props;
    return (
      <View>
        <View style={{ zIndex: 0, borderWidth: 1 }}>
          <AppbarComponent />
        </View>
        <View style={{ width: '100%', marginTop: 65 }}>
          <View
            style={{
              width: '100%',
              height: 30,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <BouncyCheckbox isChecked={this.state.isChecked} />
            <Text>Xin chào {}</Text>
          </View>
          <ScrollView>
            <View style={{ marginBottom: 20, flexDirection: 'column' }}>
              <FlatList
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
                      <BouncyCheckbox isChecked={this.state.isChecked} />
                    </View>
                    <View style={{ height: 80, width: 80, justifyContent: 'center' }}>
                      <Image
                        style={{ resizeMode: 'contain', width: '100%', height: 180 }}
                        source={item.product.avatar}
                      />
                    </View>
                    <View>
                      <Text style={{ marginBottom: 3, fontSize: 15 }}>{item.product.title}</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <Text style={{ marginBottom: 3, fontSize: 15 }}>{item.product.price}</Text>
                          <Text style={{ marginBottom: 3, fontSize: 15 }}>Số lượng: {item.qty}</Text>
                        </View>
                        <Icon name="delete" color={'rgba(111, 202, 186, 1)'} size={25} />
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
                )}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { shoppingBagsUserLogin: state.users.shoppingBagsUserLogin };
};
export default connect(mapStateToProps)(GioHangScreen);
