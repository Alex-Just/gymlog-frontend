import { View, Text } from 'react-native';

import { ExerciseImage, TextWithIcon } from '@/components/atoms';
import { useTheme } from '@/theme';

interface IRoutineExerciseHeaderProps {
  imageUri: string;
  name: string;
  restTimer: string;
}

function RoutineExerciseHeader({
  imageUri,
  name,
  restTimer,
}: IRoutineExerciseHeaderProps) {
  const { layout, gutters, fonts } = useTheme();

  return (
    <View style={[gutters.marginTop_12]}>
      <View style={[layout.row, layout.itemsCenter, gutters.marginBottom_8]}>
        <ExerciseImage uri={imageUri} size={50} iconSize={24} />
        <Text style={[fonts.size_16, fonts.bold, fonts.primaryBtnBg]}>
          {name}
        </Text>
      </View>
      <TextWithIcon icon="clock" text={restTimer} />
    </View>
  );
}

export default RoutineExerciseHeader;
