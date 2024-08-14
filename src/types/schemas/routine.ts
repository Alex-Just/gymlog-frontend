import { z } from 'zod';

// Define the schema for individual sets within an exercise
const setSchema = z.object({
  id: z.string().uuid(),
  order: z.number(),
  weight: z.number(),
  reps: z.number(),
});

// Define the schema for the exercise details
const exerciseDetailSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  exerciseType: z.enum(['weight_reps', 'reps_only']),
  equipment: z.string(),
  primaryMuscleGroup: z.string(),
  otherMuscles: z.array(z.string()),
  smallImage: z.string().url(),
  largeImage: z.string().url(),
});

// Define the schema for individual exercises within the routine
const exerciseSchema = z.object({
  id: z.string().uuid(),
  order: z.number(),
  exercise: exerciseDetailSchema,
  restTimer: z.string(),
  note: z.string().nullable(),
  routineSets: z.array(setSchema).default([]),
});

// Define the schema for the entire routine
export const routineSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  routineExercises: z.array(exerciseSchema).default([]),
  exercisesTxt: z.string(),
});

export type Routine = z.infer<typeof routineSchema>;
