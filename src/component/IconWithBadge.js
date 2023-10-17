import { Icon } from '@rneui/base';
import { View, Text } from 'react-native';
import React from 'react';
class IconWithBadge extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { badgeCount, name, color, size } = this.props;
    return (
      <View style={{ with: 24, height: 24, margin: 0 }}>
        <Icon name={name} color={color} size={size} />
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -4,
              top: -4,
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
export default IconWithBadge;
