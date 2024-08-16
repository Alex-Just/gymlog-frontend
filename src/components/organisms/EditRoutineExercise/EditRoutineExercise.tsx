import { Control, UseFormHandleSubmit } from 'react-hook-form';
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

interface IEditRoutineExerciseProps {
  exercise: {
    id: string;
    note?: string | null;
    exercise: {
      name: string;
      smallImage: string;
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
  handleSubmit: UseFormHandleSubmit<IRoutineFormValues>;
  addSetToExercise: (exerciseIndex: number) => void;
  removeSetFromExercise: (exerciseIndex: number, setIndex: number) => void;
}

function EditRoutineExercise({
  exercise,
  exerciseIndex,
  control,
  handleSubmit,
  addSetToExercise,
  removeSetFromExercise,
}: IEditRoutineExerciseProps) {
  const onSubmit = (data: IRoutineFormValues) => {
    // eslint-disable-next-line no-console
    console.log('Submitted data:', data);
    // Handle the submit logic (e.g., API call)
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
          onRemoveSet={() => removeSetFromExercise(exerciseIndex, setIndex)}
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
        onPress={() => {
          addSetToExercise(exerciseIndex);
        }}
      />
    </View>
  );
}

export default EditRoutineExercise;
