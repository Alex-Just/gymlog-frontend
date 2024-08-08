import { ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { SettingHeader, SettingItem } from '@/components/atoms';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';

function Settings() {
  const { changeTheme, variant, gutters, colors } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const accountOptions = [
    { label: 'Profile', icon: 'user' },
    { label: 'Account', icon: 'lock' },
    { label: 'Notifications', icon: 'bell' },
  ];

  const preferenceOptions = [
    { label: 'Workouts', icon: 'dumbbell' },
    {
      label: 'Privacy & Social',
      icon: 'shield-alt',
      onPress: () => {
        navigation.navigate('PrivacyAndSocial');
      },
    },
    {
      label: 'Units',
      icon: 'ruler',
      onPress: () => {
        navigation.navigate('Units');
      },
    },
    {
      label: 'Language',
      icon: 'language',
      onPress: () => {
        navigation.navigate('Language');
      },
    },
    {
      label: 'Theme',
      icon: 'moon',
      onPress: () => {
        navigation.navigate('ThemeSettings');
      },
    },
    {
      label: `Toggle Theme (${variant === 'default' ? 'Light' : 'Dark'})`,
      icon: 'adjust',
      onPress: () => {
        changeTheme(variant === 'default' ? 'dark' : 'default');
      },
    },
  ];

  return (
    <SafeScreen>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View style={[gutters.marginBottom_16, gutters.marginTop_12]}>
          <SettingHeader title="Account" />
          {accountOptions.map(option => (
            <SettingItem
              key={option.label}
              label={option.label}
              icon={option.icon}
            />
          ))}

          <SettingHeader title="Preferences" />
          {preferenceOptions.map(option => (
            <TouchableOpacity key={option.label} onPress={option.onPress}>
              <SettingItem label={option.label} icon={option.icon} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default Settings;
