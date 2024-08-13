import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';

function TimerSoundVolume() {
  const { gutters, fonts, layout, colors } = useTheme();
  const { t } = useTranslation(['timerSoundVolume']);

  const options = [
    { label: t('options.high'), value: 'high' },
    { label: t('options.normal'), value: 'normal' },
    { label: t('options.low'), value: 'low' },
    { label: t('options.off'), value: 'off' },
  ];

  // This would be dynamically set based on the user's previous selection
  const selectedOption = 'high';

  return (
    <SafeScreen>
      <ScrollView>
        {options.map(option => (
          <TouchableOpacity
            key={option.value}
            style={[
              layout.row,
              layout.justifyBetween,
              layout.itemsCenter,
              gutters.paddingVertical_16,
              gutters.paddingHorizontal_16,
              gutters.marginBottom_8,
              selectedOption === option.value
                ? { backgroundColor: colors.primaryBtnBg }
                : { backgroundColor: colors.card },
            ]}
          >
            <Text
              style={[
                fonts.size_16,
                selectedOption === option.value
                  ? fonts.primaryBtnText
                  : fonts.text,
              ]}
            >
              {option.label}
            </Text>
            {selectedOption === option.value && (
              <Icon name="check" size={16} color={colors.primaryBtnText} />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeScreen>
  );
}

export default TimerSoundVolume;
