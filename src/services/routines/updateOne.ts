import { Alert } from 'react-native';

import { instance } from '@/services/instance';
import { Routine } from '@/types/schemas/workout';
import { handleApiError } from '@/utils/handleApiError';

export async function updateOne(
  routineId: string,
  data: Routine,
): Promise<Routine> {
  try {
    const response = await instance
      .patch(`routines/${routineId}/`, { json: data })
      .json<Routine>();
    return response;
  } catch (error) {
    const handledError = handleApiError(error);
    Alert.alert('Request failed', handledError.message);
    throw handledError; // Re-throw the error to allow further handling if necessary
  }
}
