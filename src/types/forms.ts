import { Routine } from '@/types/schemas/routine';

// Define form values type by reusing `Routine` type
// but modifying `weight` to be a string for easier form validation (dots/commas)
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
