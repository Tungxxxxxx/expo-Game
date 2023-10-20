import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/wellcome/Main';
import Home from '../screens/Home/Home';
import ProductScreen from '../screens/Home/ProductScreen';
import ProductDetail from '../screens/Product/ProductDetail';

const Stack = createStackNavigator();
class Route extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          {/* <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false }} /> */}
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Chi tiết sản phẩm' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Route;
