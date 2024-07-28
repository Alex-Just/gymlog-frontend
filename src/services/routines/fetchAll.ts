import { Routine, routineSchema } from '@/types/schemas/routine';

// Mocked routines data
const routines: Routine[] = [
  { id: '0190ea80-a870-7902-9672-8be033deba07', name: 'My First Routine' },
];

export default async (): Promise<Routine[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(routines.map(routine => routineSchema.parse(routine)));
    }, 500);
  });
};
