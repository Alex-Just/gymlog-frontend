import { instance } from '@/services/instance';
import { userSchema } from '@/types/schemas/user';

export default async () => {
  try {
    const response = await instance.get('users/me/').json();
    return userSchema.parse(response);
  } catch (error) {
    throw new Error('Error fetching user');
  }
};
