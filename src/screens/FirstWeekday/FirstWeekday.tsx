import { useState } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';

type DayOfWeek =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

function FirstWeekday() {
  const { gutters, fonts, layout, colors } = useTheme();
  const { t } = useTranslation(['firstWeekday']);
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>('monday');

  const daysOfWeek: DayOfWeek[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  return (
    <SafeScreen>
      <ScrollView>
        {daysOfWeek.map(day => (
          <TouchableOpacity
            key={day}
            onPress={() => setSelectedDay(day)}
            style={[
              layout.row,
              layout.justifyBetween,
              layout.itemsCenter,
              gutters.paddingVertical_16,
              gutters.paddingHorizontal_16,
              selectedDay === day
                ? { backgroundColor: colors.primaryBtnBg }
                : { backgroundColor: colors.card },
              gutters.marginBottom_8,
            ]}
          >
            <Text
              style={[
                fonts.size_16,
                selectedDay === day ? fonts.primaryBtnText : fonts.text,
              ]}
            >
              {t(`days.${day}`)}
            </Text>
            {selectedDay === day && (
              <Text style={[fonts.size_16, fonts.primaryBtnText]}>✓</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeScreen>
  );
}

export default FirstWeekday;
