import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
Animatable.initializeRegistryWithDefinitions({
  translateY: {
    from: {
      translateY: 0,
    },
    to: {
      translateY: -100,
    },
  },
});
class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      isAnimating: false,
    };
  }
  startAnimation = () => {
    this.setState({ isAnimating: true });
    setTimeout(() => {
      this.setState({ isAnimating: false });
    }, 2000);
  };

  onPanGestureEvent = (event) => {
    if (event.nativeEvent.state === State.END) {
      this.startAnimation();
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.button} onPress={this.startAnimation}>
          <Text>View Modal</Text>
        </TouchableOpacity>
        <PanGestureHandler onHandlerStateChange={() => this.onPanGestureEvent()}>
          <Animatable.View
            animation={this.state.isAnimating ? 'translateY' : null}
            duration={2000}
            style={{ transform: [{ translateY: -100 }] }}
          >
            <Image source={require('../../assets/images/00910.jpg')} style={{ width: 50, height: 50 }} />
          </Animatable.View>
        </PanGestureHandler>
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
