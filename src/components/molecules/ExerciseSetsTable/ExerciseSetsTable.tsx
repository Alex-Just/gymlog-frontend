import { View, Text, StyleSheet } from 'react-native';

import { useTheme } from '@/theme';

interface IExerciseSet {
  set: number;
  kg: number;
  reps: number;
}

interface IExerciseSetsTableProps {
  sets: IExerciseSet[];
}

const styles = StyleSheet.create({
  fixedWidth: {
    width: 80,
  },
});

function ExerciseSetsTable({ sets }: IExerciseSetsTableProps) {
  const { gutters, fonts, layout, borders, colors } = useTheme();

  return (
    <View style={[gutters.marginTop_4]}>
      {sets.map((set, index) => (
        <View
          key={index}
          style={[
            layout.row,
            layout.itemsCenter,
            gutters.paddingVertical_8,
            borders.lightCard,
            {
              backgroundColor:
                index % 2 === 0 ? colors.lightCard : colors.background,
            },
          ]}
        >
          <Text
            style={[
              fonts.size_16,
              fonts.alignCenter,
              fonts.text,
              fonts.bold,
              styles.fixedWidth,
            ]}
          >
            {set.set}
          </Text>
          <Text
            style={[
              fonts.size_16,
              fonts.alignCenter,
              fonts.text,
              styles.fixedWidth,
            ]}
          >
            {set.kg}
          </Text>
          <Text
            style={[
              fonts.size_16,
              fonts.alignCenter,
              fonts.text,
              styles.fixedWidth,
            ]}
          >
            {set.reps}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default ExerciseSetsTable;
