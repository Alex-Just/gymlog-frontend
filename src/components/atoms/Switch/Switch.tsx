import { Switch as RNSwitch, StyleProp, ViewStyle } from 'react-native';

import { useTheme } from '@/theme';

interface ISwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
}

function Switch({ value, onValueChange, style }: ISwitchProps) {
  const { colors } = useTheme();

  return (
    <RNSwitch
      value={value}
      onValueChange={onValueChange}
      style={[style]}
      trackColor={{ false: colors.text, true: colors.primaryBtnBg }}
    />
  );
}

export default Switch;
