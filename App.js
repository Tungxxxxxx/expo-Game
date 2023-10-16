import { SafeAreaView, StyleSheet } from 'react-native';

import Route from './src/navigation/Route';
import store from './src/store/store';
import { Provider } from 'react-redux';
import Temp from './src/screens/Temp';
import Temp1 from './src/screens/Temp1';
export default function App() {
  return (
    //Kết nối ứng dụng với redux bằng Provider, truyền vào store
    <Provider store={store}>
      <Route />
      {/* <Temp /> */}
    </Provider>
  );
}
