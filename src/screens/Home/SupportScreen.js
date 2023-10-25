import React from 'react';
import { View, Text, Animated, TouchableOpacity, Image } from 'react-native';
class SupportScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnimating: false,
      animatedValue: new Animated.Value(0),
    };
    // Thêm một listener để theo dõi giá trị của animatedValue
    this.state.animatedValue.addListener((event) => {
      const { value } = event;
    });
  }
  startAnimation = () => {
    this.setState({ isAnimating: true });

    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      this.setState({ isAnimating: false, animatedValue: new Animated.Value(0) });
      // Đặt lại giá trị animatedValue về 0 để sẵn sàng cho lần click tiếp theo
      // this.state.animatedValue.setValue(0);
    });
  };

  render() {
    const translateX = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 400], // Di chuyển từ 0 đến 10 theo trục X
    });

    const translateY = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -900], // Di chuyển từ 0 đến 20 theo trục Y
    });
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          {this.state.isAnimating && (
            <Animated.Image
              source={require('../../assets/images/00910.jpg')}
              style={{
                position: 'absolute',
                width: 50,
                height: 50,
                transform: [{ translateX }, { translateY }],
              }}
            />
          )}
          <Image source={require('../../assets/images/00910.jpg')} style={{ width: 300, height: 300 }} />
        </View>
        <TouchableOpacity
          onPress={this.state.isAnimating ? null : this.startAnimation}
          disabled={this.state.isAnimating}
        >
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default SupportScreen;
