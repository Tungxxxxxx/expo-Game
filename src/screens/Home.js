import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import BagScreen from './BagScreen';
import OrderScreen from './OrderScreen';
import ProductScreen from './ProductScreen';
import IconWithBadge from '../component/IconWithBadge';
import React from 'react';
const Tab = createBottomTabNavigator();
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator initialRouteName="Products">
        {/* Sử dụng Children props */}
        <Tab.Screen
          name="Products"
          options={{
            tabBarIcon: () => <Icon name="home" color={'rgba(111, 202, 186, 1)'} size={24} />,
            title: 'Trang chủ',
            headerShown: false,
          }}
        >
          {/* {() => <ProductScreen badgeCount={this.state.badgeCount} setBadgeCount={this.setBadgeCount} />} */}
          {() => <ProductScreen />}
        </Tab.Screen>
        <Tab.Screen
          name="Order"
          options={{
            tabBarIcon: () => <Icon name="shopping-cart" color={'rgba(111, 202, 186, 1)'} size={24} />,
            title: 'Đơn hàng',
            headerShown: false,
          }}
        >
          {() => <OrderScreen />}
        </Tab.Screen>
        <Tab.Screen
          name="shoppingBag"
          options={{
            tabBarIcon: () => (
              <IconWithBadge
                badgeCount={this.props.countPIB}
                name={'shopping-bag'}
                color={'rgba(111, 202, 186, 1)'}
                size={24}
              />
            ),
            title: 'Giỏ hàng',
            headerShown: false,
          }}
        >
          {() => <BagScreen />}
        </Tab.Screen>
        <Tab.Screen
          name="Support"
          component={BagScreen}
          options={{
            tabBarIcon: () => <Icon name="chat" color={'rgba(111, 202, 186, 1)'} size={24} />,
            title: 'Hỗ trợ',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }
}
// ghi dữ liệu từ state của redux vào props của component
const mapStateToProps = (state) => {
  console.log('>>>Check state', state);
  return { countPIB: state.users.countPIB, users: state.users };
};

export default connect(mapStateToProps)(Home);
