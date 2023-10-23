import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
class AddQty extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qty: 1 };
  }
  handleAddQty = () => {
    this.setState((prevState) => {
      const newQty = parseInt(prevState.qty, 10) + 1;
      // call back
      this.props.upDateQty(newQty);
      return { qty: newQty };
    });
    this.props.upDateQty(this.state.qty);
  };
  handleDecrementQty = () => {
    this.setState((prevState) => {
      const newQty = parseInt(prevState.qty, 10) - 1;
      if (newQty >= 1) {
        this.props.upDateQty(newQty);
        return { qty: newQty };
      } else {
        //Không thay đổi gì
        return null;
      }
    });
  };
  handleChangeQty(val) {
    const rex = /^[1-9]\d*$/;
    if (rex.test(val)) {
      console.log(val + 'true');
      this.setState({ qty: val });
    } else {
      console.log(val + 'false');
      this.setState({ qty: '' });
    }
  }
  render() {
    return (
      <View style={{ width: 80, height: 20, borderWidth: 1, borderColor: 'grey', flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            this.handleDecrementQty();
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '50%',
            borderColor: 'grey',
            borderRightWidth: 1,
            borderLeftWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextInput
            style={{ color: 'red', width: '100%', textAlign: 'center' }}
            value={this.state.qty}
            onChangeText={(val) => {
              this.handleChangeQty(val);
            }}
          />
        </View>
        <TouchableOpacity
          style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            this.handleAddQty();
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <TextInput style={{ color: 'red' }} />
      </View>
    );
  }
}

export default AddQty;
