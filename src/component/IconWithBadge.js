import { Icon } from '@rneui/base';
import { View, Text } from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
class IconWithBadge extends React.Component {
  constructor(props) {
    super(props);
  }
  accessBag = () => {
    console.log('>>>Check access bag');
    console.log('>>>Check access bag', this.props);
    const { navigation } = this.props;
    navigation.navigate('shoppingBag');
  };
  render() {
    const { badgeCount, name, color, size } = this.props;
    return (
      <View style={{ with: 24, height: 24, margin: 0 }}>
        <Icon
          name={name}
          color={color}
          size={size}
          onPress={() => {
            this.accessBag();
          }}
        />
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -8,
              top: -8,
              backgroundColor: 'red',
              borderRadius: 8,
              width: 22,
              height: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 11 }}>{badgeCount <= 99 ? <>{badgeCount}</> : <>99+</>}</Text>
          </View>
        )}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return { navigation: state.navigation.navigation };
};
export default connect(mapStateToProps)(IconWithBadge);
