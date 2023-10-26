import { SafeAreaView, StyleSheet } from 'react-native';

import Route from './src/navigation/Route';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
export default function App() {
  return (
    //Kết nối ứng dụng với redux bằng Provider, truyền vào store
    <Provider store={store}>
      <PaperProvider>
        <Route />
      </PaperProvider>
    </Provider>
  );
}

//redux: Sau đó sử dụng redux trong component
