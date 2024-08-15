import { View } from 'react-native';

import { ExerciseSetsHeader } from '@/components/atoms';
import {
  RoutineExerciseHeader,
  ExerciseSetsTable,
} from '@/components/molecules';

interface IRoutineExerciseProps {
  exercise: {
    imageUri: string;
    name: string;
    restTimer: string;
    sets: { set: number; kg: number; reps: number }[];
  };
}

function RoutineExercise({ exercise }: IRoutineExerciseProps) {
  return (
    <View>
      <RoutineExerciseHeader
        imageUri={exercise.imageUri}
        name={exercise.name}
        restTimer={exercise.restTimer}
      />
      <ExerciseSetsHeader />
      <ExerciseSetsTable sets={exercise.sets} />
    </View>
  );
}

export default RoutineExercise;
