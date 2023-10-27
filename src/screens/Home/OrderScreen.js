import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Animated } from 'react-native';

// import * as Animatable from 'react-native-animatable';
// import { PanGestureHandler, State } from 'react-native-gesture-handler';

class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoMarginTop: new Animated.Value(500),
      logoMarginRight: new Animated.Value(100),
      isAnimatingShow: false,
    };
  }
  StartAnimation = () => {
    this.setState({
      isAnimatingShow: true,
    });
    Animated.timing(this.state.logoMarginTop, { toValue: -40, duration: 2000, useNativeDriver: false }).start(() =>
      this.setState({
        isAnimatingShow: false,
        logoMarginRight: new Animated.Value(100),
        logoMarginTop: new Animated.Value(500),
      }),
    );
    Animated.timing(this.state.logoMarginRight, { toValue: 320, duration: 2000, useNativeDriver: false }).start(() =>
      this.setState({
        isAnimatingShow: false,
        logoMarginRight: new Animated.Value(100),
        logoMarginTop: new Animated.Value(500),
      }),
    );
  };
  // componentDidMount() {
  //   Animated.timing(this.state.logoMarginTop, { toValue: -40, duration: 2000, useNativeDriver: false }).start();
  //   Animated.timing(this.state.logoMarginRight, { toValue: 320, duration: 2000, useNativeDriver: false }).start();
  // }

  render() {
    console.log(this.state.logoMarginRight + '__' + this.state.logoMarginTop);
    return (
      <View style={{ width: '100%', borderWidth: 1, flex: 1 }}>
        {this.state.isAnimatingShow && (
          <Animated.Image
            source={require('../../assets/images/banners/online-shopping-on-mobile-phone.jpg')}
            style={{
              width: 50,
              height: 50,
              marginTop: this.state.logoMarginTop,
              marginLeft: this.state.logoMarginRight,
              position: 'absolute',
              zIndex: 99999,
            }}
          />
        )}
        <Text style={{ fontFamily: 'Nunito_SemiBoldItalic' }}>COn mẹ mày nhé</Text>
        <Button onPress={() => this.StartAnimation()}>Animation</Button>
      </View>
    );
  }
}

export default OrderScreen;
