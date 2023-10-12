import * as React from 'react';
import { Input } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native-web';

export default function Temp() {
  return (
    <>
      <Input
        containerStyle={{}} //Thuộc tính này làm tùy chỉnh cho style của container bao quanh ô input.
        disabledInputStyle={{ background: 'red' }} //Đây là style dùng khi input bị vô hiệu hóa (disabled). Trong trường hợp này, nó đã được thiết lập để có màu nền đỏ khi input bị vô hiệu hóa.
        inputContainerStyle={{}} //Style của container chứa ô input.
        errorMessage="" // Chuỗi thông báo lỗi sẽ được hiển thị dưới ô input khi có lỗi.
        errorStyle={{}} //Style cho thông báo lỗi
        errorProps={{}} // Các thuộc tính bổ sung cho thông báo lỗi, ví dụ như event handlers.
        inputStyle={{}} //Style cho ô input.
        labelStyle={{}} // Style cho nhãn (label) của ô input.
        labelProps={{}} //Các thuộc tính bổ sung cho nhãn (label), ví dụ như event handlers.
        leftIcon={<Icon name="account-outline" color={'orange'} size={20} />} //Icon hiển thị bên trái của ô input.
        leftIconContainerStyle={{}} //Style cho container chứa icon bên trái.
        rightIcon={<Icon name="close" size={20} />}
        rightIconContainerStyle={{}}
        placeholder="Enter Name" // Văn bản gợi ý hiển thị trong ô input khi không có giá trị nào được nhập.
      />
      <Input leftIcon={<Icon name="lock" color={'orange'} size={20} />} />
      <Icon name="fingerprint" color={'orange'} size={60} />
    </>
  );
}
