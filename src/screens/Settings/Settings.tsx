import { ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { SettingHeader, SettingItem } from '@/components/atoms';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';
import { useTranslation } from 'react-i18next';

function Settings() {
  const { changeTheme, variant, gutters, backgrounds } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { t } = useTranslation(['settings']);

  const accountOptions = [
    {
      label: t('profile'),
      icon: 'user',
      onPress: () => {
        navigation.navigate('EditProfile');
      },
    },
    {
      label: t('account'),
      icon: 'lock',
      onPress: () => {
        navigation.navigate('EditAccount');
      },
    },
    { label: t('notifications'), icon: 'bell' },
  ];

  const preferenceOptions = [
    { label: t('workouts'), icon: 'dumbbell' },
    {
      label: t('privacyAndSocial'),
      icon: 'shield-alt',
      onPress: () => {
        navigation.navigate('PrivacyAndSocial');
      },
    },
    {
      label: t('units'),
      icon: 'ruler',
      onPress: () => {
        navigation.navigate('Units');
      },
    },
    {
      label: t('language'),
      icon: 'language',
      onPress: () => {
        navigation.navigate('Language');
      },
    },
    {
      label: t('theme'),
      icon: 'moon',
      onPress: () => {
        navigation.navigate('ThemeSettings');
      },
    },
    {
      label: `${t('toggleTheme')} (${
        variant === 'default' ? t('light') : t('dark')
      })`,
      icon: 'adjust',
      onPress: () => {
        changeTheme(variant === 'default' ? 'dark' : 'default');
      },
    },
  ];

  return (
    <SafeScreen>
      <ScrollView style={[gutters.paddingBottom_16, backgrounds.background]}>
        <View style={[gutters.marginBottom_16, gutters.marginTop_12]}>
          <SettingHeader title={t('account')} />
          {accountOptions.map(option => (
            <TouchableOpacity key={option.label} onPress={option.onPress}>
              <SettingItem label={option.label} icon={option.icon} />
            </TouchableOpacity>
          ))}

          <SettingHeader title={t('preferences')} />
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
