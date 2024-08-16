import { UseFieldArrayUpdate } from 'react-hook-form';

import { IRoutineFormValues } from '@/types/forms';

export const useEditRoutineExercise = () => {
  const addSetToExercise = (
    exercise: IRoutineFormValues['routineExercises'][number],
    exerciseIndex: number,
    update: UseFieldArrayUpdate<IRoutineFormValues, 'routineExercises'>,
  ) => {
    const lastSet = exercise.routineSets[exercise.routineSets.length - 1];
    const newSet = {
      id: undefined,
      order: exercise.routineSets.length + 1,
      weight: lastSet ? lastSet.weight : '0',
      reps: lastSet ? lastSet.reps : 0,
    };

    const updatedExercise = {
      ...exercise,
      routineSets: [...exercise.routineSets, newSet],
    };

    update(exerciseIndex, updatedExercise);
  };

  const removeSetFromExercise = (
    exercise: IRoutineFormValues['routineExercises'][number],
    exerciseIndex: number,
    setIndex: number,
    update: UseFieldArrayUpdate<IRoutineFormValues, 'routineExercises'>,
  ) => {
    const updatedRoutineSets = exercise.routineSets.filter(
      (_, index) => index !== setIndex,
    );
    const reorderedSets = updatedRoutineSets.map((set, index) => ({
      ...set,
      order: index + 1,
    }));

    const updatedExercise = {
      ...exercise,
      routineSets: reorderedSets,
    };

    update(exerciseIndex, updatedExercise);
  };

  return {
    addSetToExercise,
    removeSetFromExercise,
  };
};
