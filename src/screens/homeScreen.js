import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native';
import { TextInput, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Icon } from '@rneui/themed';
import Temp from './Temp';
import { Avatar } from 'react-native-paper';
import { BottomNavigation, Appbar } from 'react-native-paper';
import AppbarComponent from '../component/AppbarComponent';

class HomeScreen extends React.Component {
  render() {
    return <AppbarComponent />;
  }
}

export default HomeScreen;
