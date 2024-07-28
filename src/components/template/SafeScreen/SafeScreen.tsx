import React from 'react';
import { SafeAreaView, View, ViewProps } from 'react-native';
import { useTheme } from '@/theme';

interface ISafeScreenProps extends ViewProps {
  children: React.ReactNode;
}

export function SafeScreen({ children, style, ...props }: ISafeScreenProps) {
  const { colors, gutters, layout } = useTheme();

  return (
    <SafeAreaView
      style={[layout.flex_1, { backgroundColor: colors.background }]}
    >
      <View
        style={[layout.flex_1, gutters.padding_16, gutters.paddingTop_0, style]}
        {...props}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}

export default SafeScreen;
