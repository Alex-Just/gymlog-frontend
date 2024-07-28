import { z } from 'zod';

// Define the Routine schema using Zod
export const routineSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

// Export the TypeScript type for Routine based on the Zod schema
export type Routine = z.infer<typeof routineSchema>;
