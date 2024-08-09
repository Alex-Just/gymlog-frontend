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
        style,
      ]}
      {...props}
    >
      <View style={[layout.row, layout.itemsCenter]}>
        {iconLeft && (
          <Icon
            name={iconName}
            style={[
              fonts.size_16,
              fonts.text,
              gutters.marginRight_8,
              layout.justifyCenter,
              layout.itemsCenter,
            ]}
          />
        )}
        <Text style={[fonts.size_16, fonts.text]}>{label}</Text>
        {!iconLeft && (
          <Icon
            name={iconName}
            style={[fonts.size_16, fonts.text, gutters.marginLeft_8]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

SecondaryButton.propTypes = {
  iconLeft: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SecondaryButton;
