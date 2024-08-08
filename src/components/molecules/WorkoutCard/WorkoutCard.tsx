import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/theme';
import { WorkoutExercise, Card } from '@/components/atoms';
import WorkoutCardHeader from '@/components/molecules/WorkoutCardHeader/WorkoutCardHeader';

interface IWorkoutCardProps {
  avatar: string;
  name: string;
  date: string;
  title: string;
  time: string;
  volume: string;
  exercises: { id: number; name: string }[];
}

function WorkoutCard({
  avatar,
  name,
  date,
  title,
  time,
  volume,
  exercises,
}: IWorkoutCardProps) {
  const { layout, fonts, gutters } = useTheme();

  return (
    <Card>
      <WorkoutCardHeader avatar={avatar} name={name} date={date} />
      <Text style={[fonts.size_16, fonts.bold, fonts.text]}>{title}</Text>
      <View
        style={[
          layout.row,
          layout.justifyBetween,
          gutters.marginBottom_8,
          gutters.marginTop_8,
        ]}
      >
        <View>
          <Text style={[fonts.size_14, fonts.gray400]}>Time</Text>
          <Text style={[fonts.size_16, fonts.text, gutters.marginTop_4]}>
            {time}
          </Text>
        </View>
        <View>
          <Text style={[fonts.size_14, fonts.gray400]}>Volume</Text>
          <Text style={[fonts.size_16, fonts.text, gutters.marginTop_4]}>
            {volume}
          </Text>
        </View>
      </View>
      <Text style={[fonts.size_16, fonts.gray400]}>Workout</Text>
      <View>
        {exercises.map(exercise => (
          <WorkoutExercise key={exercise.id} exerciseName={exercise.name} />
        ))}
      </View>
      <TouchableOpacity>
        <Text style={[fonts.size_14, fonts.primaryBtnBg, gutters.marginTop_8]}>
          See 5 more exercises
        </Text>
      </TouchableOpacity>
      <View style={[layout.row, layout.justifyBetween, gutters.marginTop_14]}>
        <Text style={[fonts.size_14, fonts.gray400]}>0 likes</Text>
        <Text style={[fonts.size_14, fonts.gray400]}>0 comments</Text>
      </View>
    </Card>
  );
}

export default React.memo(WorkoutCard);
