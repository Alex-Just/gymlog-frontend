import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';

function Units() {
  const { layout, gutters, fonts, colors } = useTheme();
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
          Weight
        </Text>
        <View style={[layout.row, gutters.marginBottom_16]}>
          {renderUnitOption('kg', 'kg', weightUnit, () => setWeightUnit('kg'))}
          {renderUnitOption('lbs', 'lbs', weightUnit, () =>
            setWeightUnit('lbs'),
          )}
        </View>

        <Text style={[fonts.size_16, gutters.marginBottom_8, fonts.gray400]}>
          Distance
        </Text>
        <View style={[layout.row, gutters.marginBottom_16]}>
          {renderUnitOption('kilometers', 'kilometers', distanceUnit, () =>
            setDistanceUnit('kilometers'),
          )}
          {renderUnitOption('miles', 'miles', distanceUnit, () =>
            setDistanceUnit('miles'),
          )}
        </View>

        <Text style={[fonts.size_16, gutters.marginBottom_8, fonts.gray400]}>
          Body Measurements
        </Text>
        <View style={[layout.row, gutters.marginBottom_16]}>
          {renderUnitOption('cm', 'cm', measurementUnit, () =>
            setMeasurementUnit('cm'),
          )}
          {renderUnitOption('in', 'in', measurementUnit, () =>
            setMeasurementUnit('in'),
          )}
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default Units;
