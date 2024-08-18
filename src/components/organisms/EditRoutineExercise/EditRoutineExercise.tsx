import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { UseFieldArrayUpdate, useFormContext } from 'react-hook-form';

import {
  EditRoutineExerciseNote,
  ExerciseSetsHeader,
  SecondaryButton,
} from '@/components/atoms';
import {
  RoutineExerciseHeader,
  EditRoutineExerciseSet,
} from '@/components/molecules';
import { IRoutineFormValues } from '@/types/forms';
import { useEditRoutineExercise } from '@/hooks';
import { RoutineExercise, RoutineSet } from '@/types/schemas/workout';
import { validateFloat } from '@/utils/numberUtils';

interface IEditRoutineExerciseProps {
  routineExercise: Omit<RoutineExercise, 'routineSets'> & {
    routineSets: Array<Omit<RoutineSet, 'weight'> & { weight: string }>;
  };
  exerciseIndex: number;
  updateRoutineExercises: UseFieldArrayUpdate<
    IRoutineFormValues,
    'routineExercises'
  >;
}

function EditRoutineExercise({
  routineExercise,
  exerciseIndex,
  updateRoutineExercises,
}: IEditRoutineExerciseProps) {
  const { addSetToExercise, removeSetFromExercise } = useEditRoutineExercise();
  const { t } = useTranslation(['editRoutine', 'routine']);
  const { control } = useFormContext<IRoutineFormValues>();

  return (
    <View key={routineExercise.id}>
      <RoutineExerciseHeader
        imageUri={routineExercise.exercise.smallImage}
        name={routineExercise.exercise.name}
        restTimer={t('routine:restTimer', { time: '1min 0s' })}
      />
      <EditRoutineExerciseNote
        name={`routineExercises.${exerciseIndex}.note`}
        control={control}
        placeholder={t('addNotes')}
      />
      <ExerciseSetsHeader />

      {routineExercise.routineSets.map((set, setIndex) => (
        <EditRoutineExerciseSet
          key={setIndex}
          set={set}
          exerciseIndex={exerciseIndex}
          setIndex={setIndex}
          onRemoveSet={() =>
            removeSetFromExercise(
              {
                ...routineExercise,
                note: routineExercise.note,
                order: exerciseIndex + 1,
                restTimer: '1min 0s',
              },
              exerciseIndex,
              setIndex,
              updateRoutineExercises,
            )
          }
          control={control}
          validateWeight={validateFloat}
        />
      ))}
      <SecondaryButton
        label={t('addSet')}
        iconName="plus"
        onPress={() =>
          addSetToExercise(
            {
              ...routineExercise,
              note: routineExercise.note,
              order: exerciseIndex + 1,
              restTimer: '1min 0s',
            },
            exerciseIndex,
            updateRoutineExercises,
          )
        }
      />
    </View>
  );
}

export default EditRoutineExercise;
