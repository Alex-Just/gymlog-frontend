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
            update={update}
            handleSubmit={handleSubmit}
          />
        ))}
      </ScrollView>
    </SafeScreen>
  );
}

export default EditRoutine;
