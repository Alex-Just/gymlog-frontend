import {
  Control,
  UseFormHandleSubmit,
  UseFieldArrayUpdate,
} from 'react-hook-form';
import { View } from 'react-native';

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
import { validateFloat } from '@/utils/numberUtils';

import { useEditRoutineExercise } from './hooks/useEditRoutineExercise';

interface IEditRoutineExerciseProps {
  exercise: {
    id: string;
    note?: string | null | undefined;
    exercise: {
      name: string;
      smallImage: string;
      id: string;
      exerciseType: 'weight_reps' | 'reps_only';
      equipment: string;
      primaryMuscleGroup: string;
      otherMuscles: string[];
      largeImage: string;
    };
    routineSets: {
      id?: string;
      order: number;
      weight: string;
      reps: number;
    }[];
  };
  exerciseIndex: number;
  control: Control<IRoutineFormValues>;
  update: UseFieldArrayUpdate<IRoutineFormValues, 'routineExercises'>;
  handleSubmit: UseFormHandleSubmit<IRoutineFormValues>;
}

function EditRoutineExercise({
  exercise,
  exerciseIndex,
  control,
  update,
  handleSubmit,
}: IEditRoutineExerciseProps) {
  const { addSetToExercise, removeSetFromExercise } = useEditRoutineExercise();

  const onSubmit = (data: IRoutineFormValues) => {
    // eslint-disable-next-line no-console
    console.log('Submitted data:', data);
  };

  return (
    <View key={exercise.id}>
      <RoutineExerciseHeader
        imageUri={exercise.exercise.smallImage}
        name={exercise.exercise.name}
        restTimer="1min 0s"
      />
      <EditRoutineExerciseNote
        name={`routineExercises.${exerciseIndex}.note` as const}
        control={control}
        placeholder="Add exercise notes here"
      />
      <ExerciseSetsHeader />
      {exercise.routineSets.map((set, setIndex) => (
        <EditRoutineExerciseSet
          key={setIndex}
          set={set}
          exerciseIndex={exerciseIndex}
          setIndex={setIndex}
          onRemoveSet={() =>
            removeSetFromExercise(
              {
                ...exercise,
                order: exerciseIndex + 1,
                restTimer: '1min 0s',
              },
              exerciseIndex,
              setIndex,
              update,
            )
          }
          control={control}
          validateWeight={validateFloat}
          handleSubmit={() => {
            void handleSubmit(onSubmit)();
          }}
        />
      ))}
      <SecondaryButton
        label="Add Set"
        iconName="plus"
        onPress={() =>
          addSetToExercise(
            {
              ...exercise,
              order: exerciseIndex + 1,
              restTimer: '1min 0s',
            },
            exerciseIndex,
            update,
          )
        }
      />
    </View>
  );
}

export default EditRoutineExercise;
