export interface IRoutineFormValues {
  routineExercises: ReadonlyArray<{
    id: string;
    note?: string | null;
    exercise: {
      name: string;
      smallImage: string;
    };
    routineSets: Array<{
      id?: string;
      order: number;
      weight: string; // Store as string first
      reps: number;
    }>;
  }>;
}
