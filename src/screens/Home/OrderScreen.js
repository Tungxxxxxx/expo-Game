import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import { PanGestureHandler, State } from 'react-native-gesture-handler';

class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      isAnimating: false,
    };
  }

  render() {
    return <View style={{ flex: 1 }}></View>;
  }
}

export default OrderScreen;
