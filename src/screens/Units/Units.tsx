import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { useTranslation } from 'react-i18next';

function Units() {
  const { layout, gutters, fonts, colors } = useTheme();
  const { t } = useTranslation(['settings']);
  const [weightUnit, setWeightUnit] = useState('kg');
  const [distanceUnit, setDistanceUnit] = useState('kilometers');
  const [measurementUnit, setMeasurementUnit] = useState('cm');

  const renderUnitOption = (
    label: string,
    value: string,
    selectedValue: string,
    onPress: () => void,
  ) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        layout.flex_1,
        gutters.paddingVertical_12,
        layout.itemsCenter,
        selectedValue === value
          ? { backgroundColor: colors.primaryBtnBg }
          : { backgroundColor: colors.card },
      ]}
    >
      <Text
        style={[
          fonts.size_16,
          {
            color:
              selectedValue === value ? colors.primaryBtnText : colors.text,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeScreen>
      <ScrollView>
        <Text
          style={[
            fonts.size_16,
            gutters.marginBottom_8,
            gutters.marginTop_12,
            fonts.gray400,
          ]}
        >
          {t('settings:weight')}
        </Text>
        <View style={[layout.row, gutters.marginBottom_16]}>
          {renderUnitOption(t('settings:kg'), 'kg', weightUnit, () =>
            setWeightUnit('kg'),
          )}
          {renderUnitOption(t('settings:lbs'), 'lbs', weightUnit, () =>
            setWeightUnit('lbs'),
          )}
        </View>

        <Text style={[fonts.size_16, gutters.marginBottom_8, fonts.gray400]}>
          {t('settings:distance')}
        </Text>
        <View style={[layout.row, gutters.marginBottom_16]}>
          {renderUnitOption(
            t('settings:kilometers'),
            'kilometers',
            distanceUnit,
            () => setDistanceUnit('kilometers'),
          )}
          {renderUnitOption(t('settings:miles'), 'miles', distanceUnit, () =>
            setDistanceUnit('miles'),
          )}
        </View>

        <Text style={[fonts.size_16, gutters.marginBottom_8, fonts.gray400]}>
          {t('settings:bodyMeasurements')}
        </Text>
        <View style={[layout.row, gutters.marginBottom_16]}>
          {renderUnitOption(t('settings:cm'), 'cm', measurementUnit, () =>
            setMeasurementUnit('cm'),
          )}
          {renderUnitOption(t('settings:in'), 'in', measurementUnit, () =>
            setMeasurementUnit('in'),
          )}
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default Units;
