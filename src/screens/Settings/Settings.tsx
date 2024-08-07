import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

function SettingsScreen() {
  const { gutters, fonts, colors, layout, backgrounds } = useTheme();

  const settingsOptions = [
    { label: 'Profile', icon: 'user' },
    { label: 'Account', icon: 'lock' },
    { label: 'Manage Subscription', icon: 'credit-card' },
    { label: 'Notifications', icon: 'bell' },
    { label: 'Workouts', icon: 'dumbbell' },
    { label: 'Privacy & Social', icon: 'shield-alt' },
    { label: 'Units', icon: 'ruler' },
    { label: 'Language', icon: 'language' },
    { label: 'Integrations', icon: 'link' },
    { label: 'Theme', icon: 'moon' },
  ];

  return (
    <SafeScreen>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View style={gutters.marginBottom_16}>
          {settingsOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                layout.row,
                layout.itemsCenter,
                gutters.paddingVertical_12,
                gutters.paddingHorizontal_16,
                backgrounds.card,
              ]}
            >
              <Icon name={option.icon} size={20} color={colors.text} />
              <Text style={[fonts.size_16, fonts.text, gutters.marginLeft_16]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default SettingsScreen;
