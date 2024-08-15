import { ScrollView } from 'react-native';
import { useForm, useFieldArray } from 'react-hook-form';

import { useRoute } from '@react-navigation/native';

import { SectionHeader } from '@/components/atoms';
import { SafeScreen } from '@/components/template';
import { EditRoutineExercise } from '@/components/organisms';
import { Routine } from '@/types/schemas/routine';

export interface IRoutineFormValues {
  routineExercises: ReadonlyArray<{
    id: string;
    note?: string | null;
    exercise: {
      name: string;
      smallImage: string;
    };
    routineSets: Array<{
      id?: string;
      order: number;
      weight: string; // Store as string first
      reps: number;
    }>;
  }>;
}

function EditRoutine() {
  const route = useRoute();
  const { routine } = route.params as { routine: Routine };

  const { control, handleSubmit } = useForm<IRoutineFormValues>({
    defaultValues: {
      routineExercises: routine.routineExercises.map(exercise => ({
        ...exercise,
        note: exercise.note ?? '',
        routineSets: exercise.routineSets.map(set => ({
          ...set,
          weight: set.weight.toString(),
        })),
      })),
    },
  });

  const { fields, update } = useFieldArray({
    control,
    name: 'routineExercises',
  });

  const addSetToExercise = (exerciseIndex: number) => {
    const exercise = fields[exerciseIndex];
    const lastSet = exercise.routineSets[exercise.routineSets.length - 1];
    const newSet = {
      id: undefined,
      order: exercise.routineSets.length + 1,
      weight: lastSet ? lastSet.weight : '0',
      reps: lastSet ? lastSet.reps : 0,
    };
    update(exerciseIndex, {
      ...exercise,
      routineSets: [...exercise.routineSets, newSet],
    });
  };

  const removeSetFromExercise = (exerciseIndex: number, setIndex: number) => {
    const exercise = fields[exerciseIndex];
    const updatedRoutineSets = exercise.routineSets.filter(
      (_, index) => index !== setIndex,
    );
    const reorderedSets = updatedRoutineSets.map((set, index) => ({
      ...set,
      order: index + 1,
    }));
    update(exerciseIndex, {
      ...exercise,
      routineSets: reorderedSets,
    });
  };

  const validateWeight = (val: string): string => {
    let cleanedValue = val.replace(',', '.').replace(/[^0-9.]/g, '');
    const parts = cleanedValue.split('.');
    if (parts.length > 2) {
      cleanedValue = `${parts[0]}.${parts.slice(1).join('')}`;
    }
    if (cleanedValue.endsWith('.')) {
      cleanedValue = cleanedValue.slice(0, -1);
    }
    return cleanedValue;
  };

  return (
    <SafeScreen>
      <ScrollView>
        <SectionHeader title={routine.name} />

        {fields.map((exercise, exerciseIndex) => (
          <EditRoutineExercise
            key={exercise.id}
            exercise={exercise}
            exerciseIndex={exerciseIndex}
            control={control}
            handleSubmit={handleSubmit}
            addSetToExercise={addSetToExercise}
            removeSetFromExercise={removeSetFromExercise}
            validateWeight={validateWeight}
          />
        ))}
      </ScrollView>
    </SafeScreen>
  );
}

export default EditRoutine;
