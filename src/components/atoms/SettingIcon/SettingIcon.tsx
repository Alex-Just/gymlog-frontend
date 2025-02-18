import Icon from 'react-native-vector-icons/FontAwesome5';

import { useTheme } from '@/theme';

interface ISettingIconProps {
  name: string;
  size?: number;
}

function SettingIcon({ name, size = 20 }: ISettingIconProps) {
  const { colors, gutters, layout } = useTheme();

  return (
    <Icon
      name={name}
      size={size}
      color={colors.text}
      style={[gutters.marginLeft_8, layout.iconSize_24]}
    />
  );
}

export default SettingIcon;
