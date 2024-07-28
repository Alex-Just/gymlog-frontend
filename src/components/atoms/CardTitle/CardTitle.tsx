import {
  View,
  Text,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
  StyleProp,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@/theme';

interface ICardTitleProps extends ViewProps {
  title: string;
  onMenuPress: () => void;
  style?: StyleProp<ViewStyle>;
}

function CardTitle({
  title,
  onMenuPress,
  style = {},
  ...props
}: ICardTitleProps) {
  const { layout, fonts, gutters, colors } = useTheme();

  return (
    <View
      style={[layout.row, layout.justifyBetween, layout.itemsCenter, style]}
      {...props}
    >
      <Text style={[fonts.size_16, fonts.bold, fonts.text]}>{title}</Text>
      <TouchableOpacity style={[gutters.marginLeft_8]} onPress={onMenuPress}>
        <Icon name="ellipsis-h" size={20} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}

CardTitle.propTypes = {
  onMenuPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string.isRequired,
};

export default CardTitle;
