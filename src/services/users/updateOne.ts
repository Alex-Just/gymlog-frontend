import { Alert } from 'react-native';

import { instance } from '@/services/instance';
import { handleApiError } from '@/utils/handleApiError';

type UpdateUserPayload = {
  name: string;
  bio?: string;
  language?: string;
  profile_picture?: string; // Only the URL or file path, not the FormData itself
  private_profile?: boolean;
};

export default async function updateOne(data: UpdateUserPayload | FormData) {
  try {
    const isFormData = data instanceof FormData;

    const response = await instance
      .put('users/me/', {
        body: isFormData ? data : JSON.stringify(data), // Handle both FormData and JSON
        headers: {
          'Content-Type': isFormData ? undefined : 'application/json', // If FormData, let the browser set the correct Content-Type
        },
      })
      .json();

    return response;
  } catch (error) {
    const handledError = handleApiError(error);
    Alert.alert('Request failed', handledError.message);
    throw handledError; // Re-throw the error to allow further handling if necessary
  }
}
