import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { UseFieldArrayUpdate, useFormContext } from 'react-hook-form';

import { useRoute } from '@react-navigation/native';

import {
  EditRoutineExerciseNote,
  ExerciseSetsHeader,
  SecondaryButton,
} from '@/components/atoms';
import { RoutineExerciseHeader, EditRoutineSet } from '@/components/molecules';
import { useEditRoutineExercise } from '@/hooks';
import { IRoutineFormValues } from '@/types/forms';
import { Routine, RoutineExercise, RoutineSet } from '@/types/schemas/workout';
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
  const { t } = useTranslation(['editRoutine', 'routine']);
  const { control } = useFormContext<IRoutineFormValues>();
  const route = useRoute();
  const { routine } = route.params as { routine: Routine };
  const { addSetToExercise, removeSetFromExercise } = useEditRoutineExercise(
    routine.id,
  );

  return (
    <View key={routineExercise.id}>
      <RoutineExerciseHeader
        imageUri={routineExercise.exercise.smallImage}
        name={routineExercise.exercise.name}
        restTimer={t('routine:restTimer', { time: '1min 0s' })} // TODO: remove hard code
      />
      <EditRoutineExerciseNote
        name={`routineExercises.${exerciseIndex}.note`}
        control={control}
        placeholder={t('addNotes')}
      />
      <ExerciseSetsHeader />

      {routineExercise.routineSets.map((set, setIndex) => (
        <EditRoutineSet
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
                restTimer: '00:01:00', // TODO: remove hard code
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
              restTimer: '00:01:00', // TODO: remove hard code
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
