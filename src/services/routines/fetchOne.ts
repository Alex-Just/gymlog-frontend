import { instance } from '@/services/instance';
import { Routine } from '@/types/schemas/routine';

export async function fetchOne(id: string): Promise<Routine> {
  return instance.get(`routines/${id}/`).json<Routine>();
}
