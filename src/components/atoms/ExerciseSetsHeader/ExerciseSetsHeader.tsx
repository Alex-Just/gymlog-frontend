import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/theme';

const styles = StyleSheet.create({
  fixedWidth: {
    width: 80,
  },
});

function ExerciseSetsHeader() {
  const { gutters, fonts, layout, borders } = useTheme();
  const { t } = useTranslation('routine');

  return (
    <View style={[layout.row, gutters.paddingVertical_8, borders.lightCard]}>
      <Text
        style={[
          fonts.size_14,
          fonts.alignCenter,
          fonts.gray400,
          styles.fixedWidth,
        ]}
      >
        {t('set')}
      </Text>
      <Text
        style={[
          gutters.paddingHorizontal_8,
          fonts.size_14,
          fonts.alignCenter,
          fonts.gray400,
          styles.fixedWidth,
        ]}
      >
        {t('kg')}
      </Text>
      <Text
        style={[
          gutters.paddingHorizontal_8,
          fonts.size_14,
          fonts.alignCenter,
          fonts.gray400,
          styles.fixedWidth,
        ]}
      >
        {t('reps')}
      </Text>
    </View>
  );
}

export default ExerciseSetsHeader;
