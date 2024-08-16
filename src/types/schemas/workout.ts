import { z } from 'zod';

const setSchema = z.object({
  id: z.string().uuid().optional(),
  order: z.number(),
  weight: z.number(),
  reps: z.number(),
});

const exerciseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  exerciseType: z.enum(['weight_reps', 'reps_only']),
  equipment: z.string(),
  primaryMuscleGroup: z.string(),
  otherMuscles: z.array(z.string()),
  smallImage: z.string().url(),
  largeImage: z.string().url(),
});

export const exerciseSchemaLite = z.object({
  id: z.number(),
  name: z.string(),
});

const routineExerciseSchema = z.object({
  id: z.string().uuid(),
  order: z.number(),
  exercise: exerciseSchema,
  restTimer: z.string(),
  note: z.string().nullable().optional(),
  routineSets: z.array(setSchema).default([]),
});

export const routineSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  routineExercises: z.array(routineExerciseSchema).default([]),
  exercisesTxt: z.string(),
});

export const workoutSchema = z.object({
  id: z.number(),
  avatar: z.string().url(), // Assuming avatar is a URL
  name: z.string(),
  date: z.string(), // You might want to validate this as a date string
  title: z.string(),
  time: z.string(),
  volume: z.string(),
  exercises: z.array(exerciseSchemaLite), // Array of exercises
});

export type Set = z.infer<typeof setSchema>;
export type Exercise = z.infer<typeof exerciseSchema>;
export type RoutineExercise = z.infer<typeof routineExerciseSchema>;
export type Routine = z.infer<typeof routineSchema>;
export type Workout = z.infer<typeof workoutSchema>;
