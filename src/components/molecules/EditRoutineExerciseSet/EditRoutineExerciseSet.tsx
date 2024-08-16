import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { Controller, Control } from 'react-hook-form';
import Icon from 'react-native-vector-icons/AntDesign';

import { useTheme } from '@/theme';
import { IRoutineFormValues } from '@/types/forms';
import { RoutineSet } from '@/types/schemas/workout';

interface IEditRoutineExerciseSetProps {
  set: Omit<RoutineSet, 'weight'> & { weight: string };
  exerciseIndex: number;
  setIndex: number;
  onRemoveSet: (exerciseIndex: number, setIndex: number) => void;
  control: Control<IRoutineFormValues>;
  validateWeight: (val: string) => string;
  handleSubmit: () => void;
}

const styles = StyleSheet.create({
  width_80: {
    width: 80,
  },
  height_20: {
    height: 20,
  },
  height_40: {
    height: 40,
  },
});

export function EditRoutineExerciseSet({
  set,
  exerciseIndex,
  setIndex,
  onRemoveSet,
  control,
  validateWeight,
  handleSubmit,
}: IEditRoutineExerciseSetProps) {
  const { layout, fonts, gutters, backgrounds, borders } = useTheme();

  return (
    <View
      style={[
        layout.row,
        layout.itemsCenter,
        gutters.paddingVertical_8,
        setIndex % 2 !== 0 ? backgrounds.lightCard : backgrounds.background,
        styles.height_40,
      ]}
    >
      <Text
        style={[
          fonts.size_16,
          fonts.text,
          fonts.bold,
          fonts.alignCenter,
          styles.width_80,
        ]}
      >
        {set.order}
      </Text>

      <Controller
        control={control}
        name={`routineExercises.${exerciseIndex}.routineSets.${setIndex}.weight`}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[
              gutters.paddingHorizontal_8,
              borders.rounded_4,
              fonts.size_16,
              fonts.text,
              fonts.alignCenter,
              styles.width_80,
              styles.height_20,
            ]}
            value={value || ''}
            onBlur={() => {
              const validatedWeight = validateWeight(value || '');
              onChange(validatedWeight);
              handleSubmit();
            }}
            onChangeText={onChange}
            keyboardType="numeric"
          />
        )}
      />

      <Controller
        control={control}
        name={`routineExercises.${exerciseIndex}.routineSets.${setIndex}.reps`}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[
              gutters.paddingHorizontal_8,
              borders.rounded_4,
              fonts.size_16,
              fonts.text,
              fonts.alignCenter,
              styles.width_80,
              styles.height_20,
            ]}
            value={value?.toString() || ''}
            onBlur={handleSubmit}
            onChangeText={val => onChange(parseInt(val, 10) || 0)}
            keyboardType="numeric"
          />
        )}
      />

      <TouchableOpacity
        style={[gutters.paddingHorizontal_8]}
        onPress={() => onRemoveSet(exerciseIndex, setIndex)}
      >
        <Icon name="delete" size={16} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

export default EditRoutineExerciseSet;
