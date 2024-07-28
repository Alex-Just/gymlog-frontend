import React from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '@/theme';

interface IButtonGroupProps extends ViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function ButtonGroup({ children, style = {}, ...props }: IButtonGroupProps) {
  const { layout, gutters } = useTheme();
  return (
    <View style={[layout.row, gutters.gap_12, layout.flex_1, style]} {...props}>
      {children}
    </View>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default ButtonGroup;
