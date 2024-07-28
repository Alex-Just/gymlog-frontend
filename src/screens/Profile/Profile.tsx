import { View, ScrollView, Text } from 'react-native';
import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';
import { ProfileHeader, WorkoutCard } from '@/components/molecules';

interface IExercise {
  id: number;
  name: string;
}

interface IWorkout {
  id: number;
  avatar: string;
  name: string;
  date: string;
  title: string;
  time: string;
  volume: string;
  exercises: IExercise[];
}

const workoutData: IWorkout[] = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/150?img=3',
    name: 'alex74737737',
    date: 'Wednesday, Jul 31, 2024',
    title: 'Full Body 1',
    time: '2h 0min',
    volume: '23,016 kg',
    exercises: [
      { id: 1, name: '5 sets Calf Press (Machine)' },
      { id: 2, name: '5 sets Squat (Barbell)' },
      { id: 3, name: '5 sets Lat Pulldown (Cable)' },
    ],
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/150?img=3',
    name: 'alex74737737',
    date: 'Saturday, Jul 20, 2024',
    title: 'Full Body 1',
    time: '2h 2min',
    volume: '23,496 kg',
    exercises: [
      { id: 1, name: '5 sets Calf Press (Machine)' },
      { id: 2, name: '5 sets Squat (Barbell)' },
      { id: 3, name: '5 sets Lat Pulldown (Cable)' },
    ],
  },
];

function Profile() {
  const { gutters, colors, fonts } = useTheme();

  return (
    <SafeScreen>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View>
          <ProfileHeader
            avatarUri="https://i.pravatar.cc/150?img=3"
            name="Alex"
            workouts={81}
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
          Workouts
        </Text>
        {workoutData.map(workout => (
          <WorkoutCard key={workout.id} {...workout} />
        ))}
      </ScrollView>
    </SafeScreen>
  );
}

export default Profile;
