import { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useTranslation } from 'react-i18next';

function DefaultWorkoutVisibility() {
  const { gutters, colors, fonts, layout, borders } = useTheme();
  const { t } = useTranslation(['settings']);
  const [selectedOption, setSelectedOption] = useState('Private');

  const options = [
    {
      label: t('settings:everyone'),
      description: t('settings:everyoneDescription'),
    },
    {
      label: t('settings:private'),
      description: t('settings:privateDescription'),
    },
  ];

  return (
    <SafeScreen>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View
          style={[
            gutters.marginBottom_16,
            gutters.marginTop_24,
            gutters.paddingHorizontal_4,
          ]}
        >
          <Text style={[fonts.size_14, fonts.gray400, gutters.marginBottom_16]}>
            {t('settings:defaultWorkoutVisibilityDescription')}
          </Text>

          {options.map(option => (
            <TouchableOpacity
              key={option.label}
              onPress={() => setSelectedOption(option.label)}
              style={[
                layout.row,
                layout.justifyBetween,
                layout.itemsCenter,
                gutters.paddingVertical_16,
                gutters.marginBottom_8,
                borders.wBottom_1,
              ]}
            >
              <View style={layout.flex_1}>
                <Text style={[fonts.size_16, fonts.text]}>{option.label}</Text>
                <Text
                  style={[fonts.size_14, fonts.gray400, gutters.marginTop_4]}
                >
                  {option.description}
                </Text>
              </View>
              {selectedOption === option.label && (
                <Icon
                  name="check"
                  size={24}
                  color={colors.primaryBtnBg}
                  style={[gutters.marginLeft_4]}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default DefaultWorkoutVisibility;
