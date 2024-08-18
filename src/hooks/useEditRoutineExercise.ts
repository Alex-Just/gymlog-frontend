import { UseFieldArrayUpdate } from 'react-hook-form';

import { IRoutineFormValues } from '@/types/forms';

const useEditRoutineExercise = () => {
  const addSetToExercise = (
    routineExercise: IRoutineFormValues['routineExercises'][number],
    exerciseIndex: number,
    update: UseFieldArrayUpdate<IRoutineFormValues, 'routineExercises'>,
  ) => {
    const lastSet =
      routineExercise.routineSets[routineExercise.routineSets.length - 1];
    const newSet = {
      id: undefined,
      order: routineExercise.routineSets.length + 1,
      weight: lastSet ? lastSet.weight : '0',
      reps: lastSet ? lastSet.reps : 0,
    };

    const updatedRoutineExercise = {
      ...routineExercise,
      routineSets: [...routineExercise.routineSets, newSet],
    };

    update(exerciseIndex, updatedRoutineExercise);
  };

  const removeSetFromExercise = (
    routineExercise: IRoutineFormValues['routineExercises'][number],
    exerciseIndex: number,
    setIndex: number,
    update: UseFieldArrayUpdate<IRoutineFormValues, 'routineExercises'>,
  ) => {
    const updatedRoutineSets = routineExercise.routineSets.filter(
      (_, index) => index !== setIndex,
    );
    const reorderedSets = updatedRoutineSets.map((set, index) => ({
      ...set,
      order: index + 1,
    }));

    const updatedRoutineExercise = {
      ...routineExercise,
      routineSets: reorderedSets,
    };

    update(exerciseIndex, updatedRoutineExercise);
  };

  const onSubmit = (data: IRoutineFormValues) => {
    // eslint-disable-next-line no-console
    console.log('Submitted data:', data);
  };

  return {
    onSubmit,
    addSetToExercise,
    removeSetFromExercise,
  };
};

export default useEditRoutineExercise;
