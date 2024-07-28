import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@/theme';

interface ISectionHeaderProps {
  title: string;
  iconName?: string;
  onIconPress?: () => void;
}

function SectionHeader({
  title,
  iconName = '',
  onIconPress = () => {},
}: ISectionHeaderProps) {
  const { layout, fonts, gutters, colors } = useTheme();

  return (
    <View
      style={[
        layout.row,
        layout.justifyBetween,
        layout.itemsCenter,
        gutters.marginTop_16,
      ]}
    >
      <Text style={[fonts.size_16, fonts.bold, fonts.text]}>{title}</Text>
      {iconName && onIconPress && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon name={iconName} size={24} color={colors.text} />
        </TouchableOpacity>
      )}
    </View>
  );
}

SectionHeader.propTypes = {
  iconName: PropTypes.string,
  onIconPress: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
