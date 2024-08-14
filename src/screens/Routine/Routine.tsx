import { useTranslation } from 'react-i18next';
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useQuery } from '@tanstack/react-query';
import { useRoute } from '@react-navigation/native';

import { PrimaryButton, ExerciseImage } from '@/components/atoms';
import { ExerciseSetsTable } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { fetchOne } from '@/services/routines/fetchOne';

function Routine() {
  const { layout, gutters, fonts, colors } = useTheme();
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
        <View style={[gutters.marginTop_8]}>
          <Text style={[fonts.size_24, fonts.bold, fonts.text]}>
            {routine.name}
          </Text>
          <Text style={[fonts.size_14, fonts.gray400, gutters.marginTop_4]}>
            {t('createdBy', { user: 'Unknown' })}
          </Text>
        </View>

        <PrimaryButton
          label={t('startRoutine')}
          onPress={() => {
            /* Start routine action */
          }}
        />

        <View
          style={[
            layout.row,
            layout.justifyBetween,
            layout.itemsCenter,
            gutters.marginTop_16,
            gutters.marginBottom_16,
          ]}
        >
          <Text style={[fonts.size_16, fonts.bold, { color: colors.gray400 }]}>
            {t('exercises')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              /* Edit routine action */
            }}
          >
            <Text style={[fonts.size_16, fonts.primaryBtnBg]}>
              {t('editRoutine')}
            </Text>
          </TouchableOpacity>
        </View>

        {routine.routineExercises.map(routineExercise => (
          <View key={routineExercise.id} style={[gutters.marginBottom_24]}>
            <View
              style={[layout.row, layout.itemsCenter, gutters.marginBottom_4]}
            >
              <ExerciseImage
                uri={routineExercise.exercise.smallImage}
                size={50}
                iconSize={24}
                iconColor={colors.primaryBtnText}
              />
              <Text style={[fonts.size_16, fonts.bold, fonts.primaryBtnBg]}>
                {routineExercise.exercise.name}
              </Text>
            </View>

            <View style={[layout.row, layout.itemsCenter, gutters.marginTop_4]}>
              <Icon
                name="clock"
                size={16}
                color={colors.primaryBtnBg}
                style={[gutters.marginRight_8]}
              />
              <Text style={[fonts.size_14, fonts.primaryBtnBg]}>
                {t('restTimer', { time: '1min 0s' })}
              </Text>
            </View>

            <ExerciseSetsTable
              sets={routineExercise.routineSets.map(set => ({
                set: set.order,
                kg: set.weight,
                reps: set.reps,
              }))}
            />
          </View>
        ))}
      </ScrollView>
    </SafeScreen>
  );
}

export default Routine;
