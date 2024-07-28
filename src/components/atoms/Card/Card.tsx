import React from 'react';
import { View, ViewProps, StyleProp, ViewStyle } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '@/theme';

interface ICardProps extends ViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Card({ children, style = {}, ...props }: ICardProps) {
  const { components, gutters, colors } = useTheme();

  return (
    <View
      style={[
        components.card,
        gutters.marginBottom_16,
        { backgroundColor: colors.card },
        style as StyleProp<ViewStyle>,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Card;
