import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';
import { ProfileHeader, WorkoutCard } from '@/components/molecules';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchAllWorkouts, Workout } from '@/services/workouts/fetchAll';
import { useTranslation } from 'react-i18next';

function Profile() {
  const { gutters, colors, fonts, backgrounds } = useTheme();
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
        <Text
          style={[
            fonts.gray400,
            fonts.size_16,
            gutters.marginBottom_8,
            gutters.marginTop_16,
          ]}
        >
          {t('profile:workouts')}
        </Text>
        {workoutData?.map((workout: Workout) => (
          <WorkoutCard key={workout.id} {...workout} />
        ))}
      </ScrollView>
    </SafeScreen>
  );
}

export default Profile;
