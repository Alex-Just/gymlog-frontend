import { z } from 'zod';

const setSchema = z.object({
  id: z.string().uuid().optional(),
  order: z.number(),
  weight: z.number(),
  reps: z.number(),
});

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

const exerciseSchema = z.object({
  id: z.string().uuid(),
  order: z.number(),
  exercise: exerciseDetailSchema,
  restTimer: z.string(),
  note: z.string().nullable().optional(),
  routineSets: z.array(setSchema).default([]),
});

export const routineSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  routineExercises: z.array(exerciseSchema).default([]),
  exercisesTxt: z.string(),
});

export type Routine = z.infer<typeof routineSchema>;
