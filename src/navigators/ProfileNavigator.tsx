import { createStackNavigator } from '@react-navigation/stack';
import {
  Profile,
  Settings,
  PrivacyAndSocial,
  DefaultWorkoutVisibility,
  Units,
  ThemeSettings,
  Language,
  EditProfile,
  EditAccount,
  ChangeUsername,
  ChangeEmail,
  ChangePassword,
} from '@/screens';
import { HeaderLeftButton, HeaderRightContainer } from '@/components/molecules';
import { useTheme } from '@/theme';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();

function ProfileNavigator() {
  const { colors, fonts } = useTheme();
  const { t } = useTranslation([
    'settings',
    'profile',
    'editAccount',
    'changeUsername',
    'changeEmail',
    'changePassword',
  ]);

  const commonHeaderOptions = {
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: colors.card,
      borderBottomColor: colors.card,
      borderBottomWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitleStyle: {
      color: colors.text,
      fontSize: fonts.size_16.fontSize,
    },
    headerTintColor: colors.text,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: HeaderLeftButton,
          headerRight: HeaderRightContainer,
          headerTitle: t('settings:profile'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: t('settings:settings'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="PrivacyAndSocial"
        component={PrivacyAndSocial}
        options={{
          headerTitle: t('settings:privacyAndSocial'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="DefaultWorkoutVisibility"
        component={DefaultWorkoutVisibility}
        options={{
          headerTitle: t('settings:defaultWorkoutVisibility'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="Units"
        component={Units}
        options={{
          headerTitle: t('settings:units'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="ThemeSettings"
        component={ThemeSettings}
        options={{
          headerTitle: t('settings:theme'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{
          headerTitle: t('settings:language'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: t('profile:editProfile'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="EditAccount"
        component={EditAccount}
        options={{
          headerTitle: t('editAccount:title'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="ChangeUsername"
        component={ChangeUsername}
        options={{
          headerTitle: t('changeUsername:title'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="ChangeEmail"
        component={ChangeEmail}
        options={{
          headerTitle: t('changeEmail:title'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerTitle: t('changePassword:title'),
          ...commonHeaderOptions,
        }}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
