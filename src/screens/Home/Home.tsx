import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { WorkoutCard } from '@/components/molecules';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchAllWorkouts, Workout } from '@/services/workouts/fetchAll';

function HomeScreen() {
  const { gutters, colors, fonts, backgrounds } = useTheme();
  const { t } = useTranslation(['home', 'common']);
  const navigation = useNavigation();

  const {
    data: workoutData,
    isLoading,
    isError,
  }: UseQueryResult<Workout[]> = useQuery({
    queryKey: ['workouts'],
    queryFn: fetchAllWorkouts,
  });

  useEffect(() => {
    navigation.setOptions({
      headerTitle: t('home:title'),
    });
  }, [navigation, t]);

  if (isLoading) {
    return (
      <SafeScreen>
        <ActivityIndicator
          testID="loading-indicator"
          size="large"
          color={colors.primaryBtnBg}
        />
      </SafeScreen>
    );
  }

  if (isError) {
    return (
      <SafeScreen>
        <Text testID="error-message" style={[fonts.size_16, fonts.red500]}>
          {t('common:error')}
        </Text>
      </SafeScreen>
    );
  }

  return (
    <SafeScreen>
      <ScrollView style={[backgrounds.background]}>
        <View style={[gutters.paddingTop_16]}>
          {workoutData?.map(workout => (
            <WorkoutCard key={workout.id} {...workout} />
          ))}
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default HomeScreen;
