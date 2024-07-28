import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@/theme';

interface IconButtonProps extends TouchableOpacityProps {
  name: string;
  size?: number;
}

export default function IconButton({
  name,
  size = 24,
  style,
  ...props
}: IconButtonProps) {
  const { colors, gutters } = useTheme();
  return (
    <TouchableOpacity style={[gutters.marginRight_16, style]} {...props}>
      <Icon name={name} size={size} color={colors.text} />
    </TouchableOpacity>
  );
}
