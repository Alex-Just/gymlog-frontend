import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import { useTheme } from '@/theme';

interface IButtonProps extends TouchableOpacityProps {
  label: string;
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 16,
    lineHeight: 45,
  },
});

export default function Button({ label, style, ...props }: IButtonProps) {
  const { fonts, colors } = useTheme();
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={[fonts.size_16, { color: colors.primaryBtnBg }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
