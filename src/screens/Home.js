import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import GioHangScreen from './GioHangScreen';
import LoaiHangScreen from './LoaiHangScreen';
import HomeScreen from './HomeScreen';
const Tab = createBottomTabNavigator();
export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" color={'rgba(111, 202, 186, 1)'} size={24} />,
          title: 'Trang chủ',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="LoaiHang"
        component={LoaiHangScreen}
        options={{
          tabBarIcon: () => <Icon name="shopping-cart" color={'rgba(111, 202, 186, 1)'} size={24} />,
          title: 'Loại hàng',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="GioHang"
        component={GioHangScreen}
        options={{
          tabBarIcon: () => <Icon name="shopping-bag" color={'rgba(111, 202, 186, 1)'} size={24} co />,
          title: 'Giỏ hàng',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
