import { Workout } from '@/types/schemas/workout';

export type { Workout };

export const fetchAllWorkouts = async (): Promise<Workout[]> => {
  // Mocked workout data
  const mockData: Workout[] = [
    {
      id: 1,
      avatar: 'https://i.pravatar.cc/150?img=3',
      name: 'alex74737737',
      date: '2024-07-31T00:00:00Z',
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
      date: '2024-07-20T00:00:00Z',
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

  // Simulate an API delay
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockData);
    }, 500);
  });
};
