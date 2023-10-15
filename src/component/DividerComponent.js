import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-paper';
class DividerComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, borderWidth: 1, justifyContent: 'center' }}>
        <View style={{ height: 1, borderWidth: 1, backgroundColor: 'grey', width: 20 }}></View>
        <View style={{ height: 20, borderWidth: 1, width: 20, flex: 1, flexDirection: 'row' }}>
          <Text style={{ fontSize: 10, backgroundColor: 'grey' }}>Hoặc đăng nhập bằng</Text>
        </View>
        <View style={{ height: 1, borderWidth: 1, backgroundColor: 'grey', width: 20 }}></View>
      </View>
    );
  }
}
export default DividerComponent;
