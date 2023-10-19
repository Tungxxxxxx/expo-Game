import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/themed';
import BagScreen from './BagScreen';
import OrderScreen from './OrderScreen';
import ProductScreen from './ProductScreen';
import IconWithBadge from '../component/IconWithBadge';
import React from 'react';
import Appbar from '../component/Appbar';
import ProductStackScreen from '../navigation/ProductStackScreen';
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
            {() => <ProductStackScreen searchVal={this.state.searchVal} />}
          </Tab.Screen>
          <Tab.Screen
            name="Order"
            options={{
              tabBarIcon: () => <Icon name="shopping-cart" color={'rgba(111, 202, 186, 1)'} size={24} />,
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
                  name={'shopping-bag'}
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
            name="User"
            options={{
              tabBarIcon: () => (
                <IconWithBadge
                  badgeCount={this.props.countPIB}
                  name={'shopping-bag'}
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
            name="alert"
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
            {() => <BagScreen />}
          </Tab.Screen>
          <Tab.Screen
            name="Support"
            component={BagScreen}
            options={{
              tabBarIcon: () => <Icon name="chat" color={'rgba(111, 202, 186, 1)'} size={24} />,
              title: '',
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </>
    );
  }
}
// ghi dữ liệu từ state của redux vào props của component
const mapStateToProps = (state) => {
  return { countPIB: state.users.countPIB, users: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    OnchangeSearch: (searchVal) => dispatch({ type: 'SEARCH', payload: { searchVal: searchVal } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
