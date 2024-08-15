import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useRoute } from '@react-navigation/native';

import {
  SectionHeader,
  SecondaryButton,
  ExerciseSetsHeader,
} from '@/components/atoms';
import { RoutineExerciseHeader } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { Routine } from '@/types/schemas/routine';
import { useTheme } from '@/theme';

const styles = StyleSheet.create({
  fixedHeight: {
    height: 40,
  },
  fixedWidth: {
    width: 80,
  },
  fixedHeight20: {
    height: 20,
  },
});

function EditRoutine() {
  const { t } = useTranslation(['routine', 'common', 'editRoutine']);
  const { fonts, gutters, layout, colors, backgrounds, borders } = useTheme();
  const route = useRoute();
  const { routine } = route.params as { routine: Routine };

  const [routineData, setRoutineData] = useState(routine);

  const handleSetChange = (
    exerciseIndex: number,
    setIndex: number,
    field: 'kg' | 'reps',
    value: string,
  ) => {
    const updatedRoutine = { ...routineData };
    const mappedField = field === 'kg' ? 'weight' : field;
    updatedRoutine.routineExercises[exerciseIndex].routineSets[setIndex][
      mappedField
    ] = parseFloat(value);
    setRoutineData(updatedRoutine);
  };

  const handleNotesChange = (exerciseIndex: number, value: string) => {
    const updatedRoutine = { ...routineData };
    updatedRoutine.routineExercises[exerciseIndex].note = value;
    setRoutineData(updatedRoutine);
  };

  return (
    <SafeScreen>
      <ScrollView>
        <SectionHeader title={routine.name} />

        {routineData.routineExercises.map((routineExercise, exerciseIndex) => (
          <View key={routineExercise.id}>
            <RoutineExerciseHeader
              imageUri={routineExercise.exercise.smallImage}
              name={routineExercise.exercise.name}
              restTimer={t('restTimer', { time: '1min 0s' })}
            />

            <TextInput
              style={[
                backgrounds.lightCard,
                gutters.marginBottom_4,
                gutters.marginTop_4,
                gutters.paddingHorizontal_8,
                gutters.paddingVertical_12,
                borders.rounded_4,
                fonts.size_16,
                fonts.text,
              ]}
              placeholder={t('editRoutine:addNotes')}
              value={routineExercise.note || ''}
              onChangeText={value => handleNotesChange(exerciseIndex, value)}
            />

            <ExerciseSetsHeader />

            {routineExercise.routineSets.map((set, setIndex) => (
              <View
                key={setIndex}
                style={[
                  layout.row,
                  layout.itemsCenter,
                  gutters.paddingVertical_8,
                  {
                    backgroundColor:
                      setIndex % 2 !== 0 ? colors.lightCard : colors.background,
                  },
                  styles.fixedHeight,
                ]}
              >
                <Text
                  style={[
                    fonts.size_16,
                    fonts.text,
                    fonts.bold,
                    fonts.alignCenter,
                    styles.fixedWidth,
                  ]}
                >
                  {set.order}
                </Text>
                <TextInput
                  style={[
                    gutters.paddingHorizontal_8,
                    borders.rounded_4,
                    fonts.size_16,
                    fonts.text,
                    fonts.alignCenter,
                    styles.fixedWidth,
                    styles.fixedHeight20,
                  ]}
                  value={set.weight.toString()}
                  onChangeText={value =>
                    handleSetChange(exerciseIndex, setIndex, 'kg', value)
                  }
                  keyboardType="numeric"
                />
                <TextInput
                  style={[
                    gutters.paddingHorizontal_8,
                    borders.rounded_4,
                    fonts.size_16,
                    fonts.text,
                    fonts.alignCenter,
                    styles.fixedWidth,
                    styles.fixedHeight20,
                  ]}
                  value={set.reps.toString()}
                  onChangeText={value =>
                    handleSetChange(exerciseIndex, setIndex, 'reps', value)
                  }
                  keyboardType="numeric"
                />
              </View>
            ))}
            <SecondaryButton label={t('editRoutine:addSet')} iconName="plus" />
          </View>
        ))}
      </ScrollView>
    </SafeScreen>
  );
}

export default EditRoutine;
