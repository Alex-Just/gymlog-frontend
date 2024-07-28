import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@/theme';

interface IWorkoutCardHeaderProps {
  avatar: string;
  name: string;
  date: string;
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
  },
});

function WorkoutCardHeader({ avatar, name, date }: IWorkoutCardHeaderProps) {
  const { fonts, layout, colors, gutters, borders } = useTheme();

  return (
    <View
      style={[
        layout.row,
        layout.itemsCenter,
        layout.justifyBetween,
        gutters.marginBottom_8,
      ]}
    >
      <View style={[layout.row, layout.itemsCenter]}>
        <Image
          source={{ uri: avatar }}
          style={[gutters.marginRight_12, borders.rounded_16, styles.avatar]}
        />
        <View>
          <Text style={[fonts.size_14, fonts.text]}>{name}</Text>
          <Text
            style={[
              fonts.size_12,
              fonts.gray400,
              gutters.marginBottom_8,
              gutters.marginTop_4,
            ]}
          >
            {date} <Icon name="lock" size={12} color="#aaa" /> Only you
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Icon name="ellipsis-h" size={20} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}

WorkoutCardHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default WorkoutCardHeader;
