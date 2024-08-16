import { ScrollView } from 'react-native';
import { useForm, useFieldArray } from 'react-hook-form';

import { useRoute } from '@react-navigation/native';

import { SectionHeader } from '@/components/atoms';
import { SafeScreen } from '@/components/template';
import { EditRoutineExercise } from '@/components/organisms';
import { Routine } from '@/types/schemas/routine';
import { IRoutineFormValues } from '@/types/forms';

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
          />
        ))}
      </ScrollView>
    </SafeScreen>
  );
}

export default EditRoutine;
