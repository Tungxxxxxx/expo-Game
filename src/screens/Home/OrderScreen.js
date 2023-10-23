import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
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
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.visibility}
          onRequestClose={() => this.setState({ visibility: false })}
        >
          <View style={styles.modalContent}>
            <Text>sssssss ssssss</Text>
            <TouchableOpacity onPress={() => this.setState({ visibility: false })}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
  modalContent: {
    position: 'absolute',
    bottom: 0,
    width: 400,
    height: 200,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
});
export default OrderScreen;
