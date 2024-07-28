import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@/theme';

interface ISecondaryButtonProps extends TouchableOpacityProps {
  label: string;
  iconName: string;
  iconLeft?: boolean;
}

function SecondaryButton({
  label,
  iconName,
  iconLeft = true,
  style,
  ...props
}: ISecondaryButtonProps) {
  const { components, fonts, gutters, layout } = useTheme();

  return (
    <TouchableOpacity
      style={[
        components.secondaryButton,
        layout.row,
        layout.itemsCenter,
        layout.itemsStart,
        style,
      ]}
      {...props}
    >
      {iconLeft && (
        <View style={[layout.row, layout.itemsCenter]}>
          <Icon
            name={iconName}
            style={[fonts.size_16, fonts.text, gutters.marginRight_8]}
          />
          <Text style={[fonts.size_16, fonts.text]}>{label}</Text>
        </View>
      )}
      {!iconLeft && (
        <View style={[layout.row, layout.itemsCenter]}>
          <Text style={[fonts.size_16, fonts.text]}>{label}</Text>
          <Icon
            name={iconName}
            style={[fonts.size_16, fonts.text, gutters.marginLeft_8]}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

SecondaryButton.propTypes = {
  iconLeft: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SecondaryButton;
