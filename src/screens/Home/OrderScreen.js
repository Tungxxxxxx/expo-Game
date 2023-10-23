import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ visibility: true })}>
          <Text>View Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 400,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default OrderScreen;
