import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { SafeScreen } from '@/components/template';
import { SectionSubHeader } from '@/components/atoms';
import { ProfileHeader, WorkoutCard } from '@/components/molecules';
import { fetchAllWorkouts, Workout } from '@/services/workouts/fetchAll';
import { useTheme } from '@/theme';

function Profile() {
  const { colors, fonts, backgrounds } = useTheme();
  const { t } = useTranslation();

  const {
    data: workoutData,
    isLoading,
    isError,
  }: UseQueryResult<Workout[]> = useQuery({
    queryKey: ['workouts'],
    queryFn: fetchAllWorkouts,
  });

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
        <View>
          <ProfileHeader
            avatarUri="https://i.pravatar.cc/150?img=3"
            name="Alex"
            workouts={workoutData?.length || 0}
            followers={0}
            following={0}
          />
        </View>
        <SectionSubHeader title={t('profile:workouts')} />
        {workoutData?.map((workout: Workout) => (
          <WorkoutCard key={workout.id} {...workout} />
        ))}
      </ScrollView>
    </SafeScreen>
  );
}

export default Profile;
