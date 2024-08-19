import { useEffect, useRef } from 'react';
import { UseFieldArrayUpdate } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { IRoutineFormValues } from '@/types/forms';
import { updateOne } from '@/services/routines/updateOne';
import { Routine } from '@/types/schemas/workout';
import { notify } from '@/utils/notification';

interface ApiError {
  response?: {
    json: () => Promise<Record<string, unknown>>;
  };
  message: string;
}

const useEditRoutineExercise = (routineId: string) => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const isMounted = useRef(true);
  const { t } = useTranslation('common');

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const mutation = useMutation({
    mutationFn: (data: Routine) => updateOne(routineId, data),
    onSuccess: updatedRoutine => {
      queryClient.setQueryData(['routine', routineId], updatedRoutine);
      notify('success', t('updated'));
      if (isMounted.current) {
        navigation.goBack();
      }
    },
    onError: async (error: ApiError) => {
      let errorMessage: string;

      if (error?.response) {
        const responseBody = await error.response.json();
        errorMessage = `${error.message} ${JSON.stringify(responseBody)}`;
      } else {
        errorMessage = error.message;
      }

      notify('error', t('error'), errorMessage);
    },
  });

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
    const formattedData: Routine = {
      ...data,
      routineExercises: data.routineExercises.map(exercise => ({
        ...exercise,
        routineSets: exercise.routineSets.map(set => ({
          ...set,
          weight: parseFloat(set.weight.toString()), // Ensure weight is a number
        })),
      })),
    };
    mutation.mutate(formattedData);
  };

  return {
    onSubmit,
    addSetToExercise,
    removeSetFromExercise,
  };
};

export default useEditRoutineExercise;
