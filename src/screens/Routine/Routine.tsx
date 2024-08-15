import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';

import {
  SectionHeader,
  PrimaryButton,
  SectionSubHeader,
} from '@/components/atoms';
import { RowGroup } from '@/components/molecules';
import { RoutineExercise } from '@/components/organisms';
import { SafeScreen } from '@/components/template';
import { fetchOne } from '@/services/routines/fetchOne';
import { useTheme } from '@/theme';

function Routine() {
  const { gutters, fonts, colors } = useTheme();
  const { t } = useTranslation(['routine', 'common']);
  const route = useRoute();
  const { id } = route.params as { id: string };

  const {
    data: routine,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['routine', id],
    queryFn: () => fetchOne(id),
  });

  if (isLoading) {
    return (
      <SafeScreen>
        <ActivityIndicator size="large" color={colors.primaryBtnBg} />
      </SafeScreen>
    );
  }

  if (isError || !routine) {
    return (
      <SafeScreen>
        <Text style={[fonts.size_16, fonts.red500]}>{t('common:error')}</Text>
      </SafeScreen>
    );
  }

  return (
    <SafeScreen>
      <ScrollView>
        <View>
          <SectionHeader title={routine.name} />
          <Text style={[fonts.size_14, fonts.gray400, gutters.marginTop_4]}>
            {t('createdBy', { user: 'Unknown' })}
          </Text>
        </View>

        <PrimaryButton
          label={t('startRoutine')}
          onPress={() => {
            // Start routine action
          }}
        />

        <RowGroup>
          <SectionSubHeader title={t('exercises')} />
          <TouchableOpacity
            onPress={() => {
              /* Edit routine action */
            }}
          >
            <Text style={[fonts.size_16, fonts.primaryBtnBg]}>
              {t('editRoutine')}
            </Text>
          </TouchableOpacity>
        </RowGroup>

        {routine.routineExercises.map(routineExercise => (
          <RoutineExercise
            key={routineExercise.id}
            exercise={{
              imageUri: routineExercise.exercise.smallImage,
              name: routineExercise.exercise.name,
              restTimer: t('restTimer', { time: '1min 0s' }),
              sets: routineExercise.routineSets.map(set => ({
                set: set.order,
                kg: set.weight,
                reps: set.reps,
              })),
            }}
          />
        ))}
      </ScrollView>
    </SafeScreen>
  );
}

export default Routine;
