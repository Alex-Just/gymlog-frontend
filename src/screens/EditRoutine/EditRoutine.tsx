import { useCallback, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';

import { useRoute, useNavigation } from '@react-navigation/native';

import { SectionHeader, EditRoutineHeaderRight } from '@/components/atoms';
import { EditRoutineExercise } from '@/components/organisms';
import { SafeScreen } from '@/components/template';
import { useEditRoutineExercise } from '@/hooks';
import { IRoutineFormValues } from '@/types/forms';
import { Routine } from '@/types/schemas/workout';

function EditRoutine() {
  const route = useRoute();
  const navigation = useNavigation();
  const { routine } = route.params as { routine: Routine };
  const { onSubmit } = useEditRoutineExercise();

  const formMethods = useForm<IRoutineFormValues>({
    defaultValues: {
      routineExercises: routine.routineExercises.map(routineExercise => ({
        ...routineExercise,
        note: routineExercise.note ?? '',
        routineSets: routineExercise.routineSets.map(set => ({
          ...set,
          weight: set.weight.toString(),
        })),
      })),
    },
  });

  const { control, handleSubmit } = formMethods;
  const { fields, update: updateRoutineExercises } = useFieldArray({
    control,
    name: 'routineExercises',
  });

  const HeaderRightComponent = useCallback(
    () => (
      <EditRoutineHeaderRight onPress={() => void handleSubmit(onSubmit)()} />
    ),
    [handleSubmit, onSubmit],
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRightComponent,
    });
  }, [navigation, HeaderRightComponent]);

  return (
    <SafeScreen>
      <FormProvider {...formMethods}>
        <ScrollView>
          <SectionHeader title={routine.name} />

          {fields.map((routineExercise, exerciseIndex) => (
            <EditRoutineExercise
              key={routineExercise.id}
              routineExercise={routineExercise}
              exerciseIndex={exerciseIndex}
              updateRoutineExercises={updateRoutineExercises}
            />
          ))}
        </ScrollView>
      </FormProvider>
    </SafeScreen>
  );
}

export default EditRoutine;
