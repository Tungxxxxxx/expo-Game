// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import AppbarComponent from '../component/AppbarComponent';
// import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// class ProductDetail extends React.Component {
//   render() {
//     const { product } = this.props;
//     console.log(this.props);
//     return (
//       <View>
//         <View>
//           <AppbarComponent />
//         </View>
//         <View
//           style={{
//             marginTop: 65,
//           }}
//         >
//           <View>
//             <TouchableOpacity
//               onPress={() => {
//                 this.props.handleBack();
//               }}
//             >
//               <Text>Back</Text>
//             </TouchableOpacity>
//           </View>
//           <Text>CHi tiet san pham</Text>
//           <View>
//             <ScrollView
//             // horizontal={true}
//             >
//               <View>
//                 <FlatList
//                   data={product.images}
//                   //keyExtractor={(item) => item.id.tostring()}
//                   renderItem={({ item }) => (
//                     <View style={styles.item}>
//                       <Image resizeMode="contain" source={item.path} />
//                     </View>
//                   )}
//                 />
//               </View>
//             </ScrollView>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   item: {
//     width: 200, // Điều chỉnh kích thước mỗi item
//     height: 100, // Điều chỉnh kích thước mỗi item
//     margin: 10, // Khoảng cách giữa các item
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightblue',
//   },
// });

// export default ProductDetail;
