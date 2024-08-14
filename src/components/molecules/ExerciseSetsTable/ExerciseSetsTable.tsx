import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/theme';

interface ExerciseSet {
  set: number;
  kg: number;
  reps: number;
}

interface ExerciseSetsTableProps {
  sets: ExerciseSet[];
}

function ExerciseSetsTable({ sets }: ExerciseSetsTableProps) {
  const { gutters, fonts, layout, borders, colors } = useTheme();
  const { t } = useTranslation('routine');

  return (
    <View style={[gutters.marginTop_4]}>
      {/* Table Header */}
      <View
        style={[
          layout.row,
          layout.justifyAround,
          borders.wBottom_1,
          borders.lightCard,
          gutters.paddingVertical_8,
        ]}
      >
        <Text
          style={[
            fonts.size_14,
            layout.flex_1,
            fonts.alignCenter,
            fonts.gray400,
          ]}
        >
          {t('set')}
        </Text>
        <Text
          style={[
            fonts.size_14,
            layout.flex_1,
            fonts.alignCenter,
            fonts.gray400,
          ]}
        >
          {t('kg')}
        </Text>
        <Text
          style={[
            fonts.size_14,
            layout.flex_1,
            fonts.alignCenter,
            fonts.gray400,
          ]}
        >
          {t('reps')}
        </Text>
      </View>

      {/* Table Body */}
      {sets.map((set, index) => (
        <View
          key={index}
          style={[
            layout.row,
            layout.justifyAround,
            borders.wBottom_1,
            borders.lightCard,
            gutters.paddingVertical_8,
            {
              backgroundColor:
                index % 2 === 0 ? colors.lightCard : colors.background,
            },
          ]}
        >
          <Text
            style={[
              fonts.size_14,
              layout.flex_1,
              fonts.alignCenter,
              fonts.text,
              fonts.bold,
            ]}
          >
            {set.set}
          </Text>
          <Text
            style={[
              fonts.size_14,
              layout.flex_1,
              fonts.alignCenter,
              fonts.text,
            ]}
          >
            {set.kg}
          </Text>
          <Text
            style={[
              fonts.size_14,
              layout.flex_1,
              fonts.alignCenter,
              fonts.text,
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
