import { View, ScrollView } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { WorkoutCard } from '@/components/molecules';

const workoutData = [
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

function HomeScreen() {
  const { gutters, colors } = useTheme();

  return (
    <SafeScreen>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View style={[gutters.paddingTop_16]}>
          {workoutData.map(workout => (
            <WorkoutCard key={workout.id} {...workout} />
          ))}
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default HomeScreen;
