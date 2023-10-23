import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import Icon from 'react-native-ico-shopping';
// import { Icon as ShoppingIcon } from 'react-native-ico-shopping';
class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>ShoppingIcon </Text>
        <Icon name="invoice" />
        <Icon name="shopping-cart" height="40" width="40" />
        <Icon name="shopping-cart-1" color="red" />
        <Icon name="shopping-cart" badge="10" />
        <Icon
          name="shopping-cart"
          badge={{
            value: 'A',
            fontSize: 25,
            radius: 22,
            position: 'top_left',
            color: 'orange',
            backgroundColor: 'blue',
          }}
        />
        <Icon name="invoice" background="circle" />
        <Icon name="invoice" background={{ type: 'button', color: 'green' }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
  },
});
export default Bottom;
