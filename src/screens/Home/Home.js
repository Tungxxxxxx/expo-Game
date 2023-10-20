import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/themed';
import BagScreen from './BagScreen';
import OrderScreen from './OrderScreen';
import ProductScreen from './ProductScreen';
import IconWithBadge from '../../component/IconWithBadge';
import React from 'react';
import Appbar from '../../component/Appbar';
import NotificationScreen from './NotificationScreen';
import UserInfoScreen from './UserInfoScreen';
import SupportScreen from './SupportScreen';
import { Avatar } from 'react-native-paper';
const Tab = createMaterialTopTabNavigator();
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
    };
  }
  handleSearchProduct = (val) => {
    this.setState({
      searchVal: val,
    });
    this.props.OnchangeSearch(val);
  };

  render() {
    const { userLogin } = this.props;
    return (
      <>
        <Appbar handleSearchProduct={this.handleSearchProduct} searchVal={this.state.searchVal} />
        <Tab.Navigator
          initialRouteName="Products"
          screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'blue',
            tabBarStyle: {
              height: 45,
              backgroundColor: '#e1f0ff',
            },
          }}
        >
          {/* Sử dụng Children props */}
          <Tab.Screen
            name="Products"
            options={{
              tabBarIcon: () => <Icon name="home" color={'rgba(111, 202, 186, 1)'} size={24} />,
              title: '',
              headerShown: false,
            }}
          >
            {() => <ProductScreen navigation={this.props.navigation} searchVal={this.state.searchVal} />}
          </Tab.Screen>
          <Tab.Screen
            name="Order"
            options={{
              tabBarIcon: () => <Icon name="shopping-bag" color={'rgba(111, 202, 186, 1)'} size={24} />,
              title: '',
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
                  name={'shopping-cart'}
                  color={'rgba(111, 202, 186, 1)'}
                  size={24}
                />
              ),
              title: '',
              headerShown: false,
            }}
          >
            {() => <BagScreen />}
          </Tab.Screen>
          <Tab.Screen
            name="notifications"
            options={{
              tabBarIcon: () => (
                <IconWithBadge
                  badgeCount={this.props.countPIB}
                  name={'notifications'}
                  color={'rgba(111, 202, 186, 1)'}
                  size={24}
                />
              ),
              title: '',
              headerShown: false,
            }}
          >
            {() => <NotificationScreen />}
          </Tab.Screen>
          <Tab.Screen
            name="Support"
            options={{
              tabBarIcon: () => (
                <IconWithBadge
                  badgeCount={this.props.countPIB}
                  name={'chat'}
                  color={'rgba(111, 202, 186, 1)'}
                  size={24}
                />
              ),
              title: '',
              headerShown: false,
            }}
          >
            {() => <SupportScreen />}
          </Tab.Screen>
          <Tab.Screen
            name="User"
            options={{
              tabBarIcon: () => <Avatar.Image size={24} source={userLogin.avatar} />,
              title: '',
              headerShown: false,
            }}
          >
            {() => <UserInfoScreen />}
          </Tab.Screen>
        </Tab.Navigator>
      </>
    );
  }
}
// ghi dữ liệu từ state của redux vào props của component
const mapStateToProps = (state) => {
  return { countPIB: state.users.countPIB, users: state.users, userLogin: state.userLogin.userLogin };
};
const mapDispatchToProps = (dispatch) => {
  return {
    OnchangeSearch: (searchVal) => dispatch({ type: 'SEARCH', payload: { searchVal: searchVal } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
