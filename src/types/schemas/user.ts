import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  username: z.string().optional(),
  bio: z.string(),
  language: z.string(),
  profilePicture: z.string(),
  privateProfile: z.boolean(),
});

export type User = z.infer<typeof userSchema>;
