import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/wellcome/Main';
import Home from '../screens/Home/Home';
import ProductDetail from '../screens/Product/ProductDetail';
import { Icon } from '@rneui/themed';
import { View } from 'react-native';
import IconWithBadge from '../component/IconWithBadge';
import { connect } from 'react-redux';
import PayScreen from '../screens/Product/PayScreen';

const Stack = createStackNavigator();

class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="PayScreen" component={PayScreen} options={{ title: 'Thanh toán' }} />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{
              title: 'Chi tiết sản phẩm',
              headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                  <Icon name="search" color={'rgba(111, 202, 186, 1)'} size={24} />
                  <IconWithBadge
                    badgeCount={this.props.countPIB}
                    name={'shopping-cart'}
                    color={'rgba(111, 202, 186, 1)'}
                    size={24}
                  />
                </View>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const mapStateToProps = (state) => {
  return { countPIB: state.users.countPIB, users: state.users, userLogin: state.userLogin.userLogin };
};

export default connect(mapStateToProps)(Route);
