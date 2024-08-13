import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  username: z.string(),
  bio: z.string(),
  language: z.string(),
  profile_picture: z.string(),
  private_profile: z.boolean(),
});
