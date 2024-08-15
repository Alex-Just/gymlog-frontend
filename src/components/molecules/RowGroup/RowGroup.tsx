import React from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from '@/theme';

interface RowGroupProps extends ViewProps {
  children: React.ReactNode;
}

function RowGroup({ children, style, ...props }: RowGroupProps) {
  const { layout, gutters } = useTheme();

  return (
    <View
      style={[
        layout.row,
        layout.justifyBetween,
        layout.itemsCenter,
        gutters.marginTop_16,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

export default RowGroup;
