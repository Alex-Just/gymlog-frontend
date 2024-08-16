import { Routine } from '@/types/schemas/routine';

export type IRoutineFormValues = Omit<Routine, 'routineExercises'> & {
  routineExercises: Array<
    Omit<Routine['routineExercises'][number], 'routineSets'> & {
      routineSets: Array<
        Omit<
          Routine['routineExercises'][number]['routineSets'][number],
          'weight'
        > & { weight: string }
      >;
    }
  >;
};
