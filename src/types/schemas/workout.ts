import { z } from 'zod';

/**
 * Exercise         (e.g. "Bicep Curl (Barbell), Primary Muscle Group: Biceps")
 * |
 * +-- Routine                    (a template/plan for future workout sessions)
 *     |
 *     +-- RoutineExercise                       (an exercise within a routine)
 *     |   |
 *     |   +-- RoutineSet             (a routing set e.g. "#1 - 40 kg 15 reps")
 *     |
 *     +-- Workout          (an actual live workout session based on a routine)
 *         |
 *         +-- ExerciseLog      (a log of exercises performed during a workout)
 *             |
 *             +-- SetLog                (a log of sets within an exercise log)
 */

const routineSetSchema = z.object({
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
  routineSets: z.array(routineSetSchema).default([]),
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
  date: z.string(),
  title: z.string(),
  time: z.string(),
  volume: z.string(),
  exercises: z.array(exerciseSchemaLite),
});

export type RoutineSet = z.infer<typeof routineSetSchema>;
export type Exercise = z.infer<typeof exerciseSchema>;
export type RoutineExercise = z.infer<typeof routineExerciseSchema>;
export type Routine = z.infer<typeof routineSchema>;
export type Workout = z.infer<typeof workoutSchema>;
