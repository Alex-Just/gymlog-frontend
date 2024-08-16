import { instance } from '@/services/instance';
import { Routine, routineSchema } from '@/types/schemas/workout';

export default async (): Promise<Routine[]> => {
  try {
    const response = await instance.get('routines/').json<Routine[]>();

    return response.map(routine => {
      const routineWithExercises = {
        ...routine,
        routineExercises: Array.isArray(routine.routineExercises)
          ? routine.routineExercises
          : [],
      };

      return routineSchema.parse(routineWithExercises);
    });
  } catch (error) {
    console.error('Failed to fetch routines:', error);
    throw new Error('Error fetching routines');
  }
};
