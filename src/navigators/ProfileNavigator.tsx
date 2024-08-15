import { useTranslation } from 'react-i18next';

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
  EditNotifications,
  WorkoutSettings,
  FirstWeekday,
  TimerSoundVolume,
} from '@/screens';
import { ProfileHeaderLeft, ProfileHeaderRight } from '@/components/molecules';
import { useTheme } from '@/theme';

const Stack = createStackNavigator();

function ProfileNavigator() {
  const { colors, fonts } = useTheme();
  const { t } = useTranslation([
    'common',
    'settings',
    'profile',
    'editAccount',
    'changeUsername',
    'changeEmail',
    'changePassword',
    'editNotifications',
    'workoutSettings',
    'firstWeekday',
    'timerSoundVolume',
  ]);

  const commonHeaderOptions = {
    headerBackTitle: t('common:back'),
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
          headerLeft: ProfileHeaderLeft,
          headerRight: ProfileHeaderRight,
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
      <Stack.Screen
        name="EditNotifications"
        component={EditNotifications}
        options={{
          headerTitle: t('editNotifications:title'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="WorkoutSettings"
        component={WorkoutSettings}
        options={{
          headerTitle: t('workoutSettings:title'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="FirstWeekday"
        component={FirstWeekday}
        options={{
          headerTitle: t('firstWeekday:title'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="TimerSoundVolume"
        component={TimerSoundVolume}
        options={{
          headerTitle: t('timerSoundVolume:title'),
          ...commonHeaderOptions,
        }}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
