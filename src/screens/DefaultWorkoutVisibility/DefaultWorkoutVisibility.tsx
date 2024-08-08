import { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import Icon from 'react-native-vector-icons/FontAwesome6';

function DefaultWorkoutVisibility() {
  const { gutters, colors, fonts, layout, borders } = useTheme();
  const [selectedOption, setSelectedOption] = useState('Private');

  const options = [
    {
      label: 'Everyone',
      description: 'Workouts will be visible to all users on GymLog.',
    },
    {
      label: 'Private',
      description: 'Workouts will only be visible to you.',
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
            Set the default workout visibility for new workouts. You can change
            it for specific workouts when saving them. It does not affect
            existing workouts retroactively.
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
                <Icon name="check" size={24} color={colors.primaryBtnBg} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default DefaultWorkoutVisibility;
