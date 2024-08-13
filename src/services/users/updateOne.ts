import { instance } from '@/services/instance';
import { userSchema } from '@/types/schemas/user';

export default async (data: {
  name: string;
  bio?: string;
  language?: string;
  profile_picture?: string;
  private_profile?: boolean;
}) => {
  try {
    const response = await instance
      .put('users/me/', {
        json: data,
      })
      .json();

    return userSchema.parse(response);
  } catch (error) {
    throw new Error('Failed to update user data. Please try again.');
  }
};
