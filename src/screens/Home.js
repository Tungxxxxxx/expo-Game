import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import GioHangScreen from './GioHangScreen';
import LoaiHangScreen from './LoaiHangScreen';
import HomeScreen from './HomeScreen';
import IconWithBadge from '../component/IconWithBadge';
const Tab = createBottomTabNavigator();
export default function Home() {
  return (
    <Tab.Navigator initialRouteName="Products">
      <Tab.Screen
        name="Products"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" color={'rgba(111, 202, 186, 1)'} size={24} />,
          title: 'Trang chủ',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Order"
        component={LoaiHangScreen}
        options={{
          tabBarIcon: () => <Icon name="shopping-cart" color={'rgba(111, 202, 186, 1)'} size={24} />,
          title: 'Đơn hàng',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="shoppingBag"
        component={GioHangScreen}
        options={{
          tabBarIcon: () => (
            <IconWithBadge badgeCount={101} name={'shopping-bag'} color={'rgba(111, 202, 186, 1)'} size={24} />
          ),
          title: 'Giỏ hàng',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Support"
        component={GioHangScreen}
        options={{
          tabBarIcon: () => <Icon name="chat" color={'rgba(111, 202, 186, 1)'} size={24} />,
          title: 'Hỗ trợ',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
