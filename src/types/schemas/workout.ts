import { z } from 'zod';

// Define the schema for a single exercise in a workout
export const exerciseSchema = z.object({
  id: z.number(),
  name: z.string(),
});

// Define the schema for the workout
export const workoutSchema = z.object({
  id: z.number(),
  avatar: z.string().url(), // Assuming avatar is a URL
  name: z.string(),
  date: z.string(), // You might want to validate this as a date string
  title: z.string(),
  time: z.string(),
  volume: z.string(),
  exercises: z.array(exerciseSchema), // Array of exercises
});

// Define TypeScript types based on the schema
export type Exercise = z.infer<typeof exerciseSchema>;
export type Workout = z.infer<typeof workoutSchema>;
