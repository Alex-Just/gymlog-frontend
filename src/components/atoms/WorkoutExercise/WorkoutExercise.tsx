import { View, Text, ViewProps, ViewStyle, StyleProp } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@/theme';

interface IWorkoutExerciseProps extends ViewProps {
  exerciseName: string;
  style?: StyleProp<ViewStyle>;
}

function WorkoutExercise({
  exerciseName,
  style = {},
  ...props
}: IWorkoutExerciseProps) {
  const { fonts, colors, gutters, layout } = useTheme();

  return (
    <View
      style={[style, layout.row, layout.itemsCenter, gutters.marginTop_4]}
      {...props}
    >
      <Icon name="dumbbell" size={16} color={colors.text} />
      <Text style={[fonts.size_14, fonts.text, gutters.marginLeft_8]}>
        {exerciseName}
      </Text>
    </View>
  );
}

WorkoutExercise.propTypes = {
  exerciseName: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default WorkoutExercise;
