import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';

import { WorkoutExercise, Card, SectionSubHeader } from '@/components/atoms';
import WorkoutCardHeader from '@/components/molecules/WorkoutCardHeader/WorkoutCardHeader';
import { useTheme } from '@/theme';

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
  const { t } = useTranslation(['workoutCard']);

  return (
    <Card>
      <WorkoutCardHeader avatar={avatar} name={name} date={date} />
      <Text style={[fonts.size_16, fonts.bold, fonts.text]}>{title}</Text>
      <View style={[layout.row, layout.justifyBetween, gutters.marginTop_8]}>
        <View>
          <Text style={[fonts.size_14, fonts.gray400]}>
            {t('workoutCard:time')}
          </Text>
          <Text style={[fonts.size_16, fonts.text, gutters.marginTop_4]}>
            {time}
          </Text>
        </View>
        <View>
          <Text style={[fonts.size_14, fonts.gray400]}>
            {t('workoutCard:volume')}
          </Text>
          <Text style={[fonts.size_16, fonts.text, gutters.marginTop_4]}>
            {volume}
          </Text>
        </View>
      </View>
      <SectionSubHeader title={t('workoutCard:workout')} small />
      <View>
        {exercises.map(exercise => (
          <WorkoutExercise key={exercise.id} exerciseName={exercise.name} />
        ))}
      </View>
      <TouchableOpacity>
        <Text style={[fonts.size_14, fonts.primaryBtnBg, gutters.marginTop_8]}>
          {t('workoutCard:seeMoreExercises', { count: 5 })}
        </Text>
      </TouchableOpacity>
      <View style={[layout.row, layout.justifyBetween, gutters.marginTop_14]}>
        <Text style={[fonts.size_14, fonts.gray400]}>
          {t('workoutCard:likes', { count: 0 })}
        </Text>
        <Text style={[fonts.size_14, fonts.gray400]}>
          {t('workoutCard:comments', { count: 0 })}
        </Text>
      </View>
    </Card>
  );
}

export default WorkoutCard;
