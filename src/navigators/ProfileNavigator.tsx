import { createStackNavigator } from '@react-navigation/stack';
import {
  Profile,
  Settings,
  PrivacyAndSocial,
  DefaultWorkoutVisibility,
  Units,
  ThemeSettings,
  Language,
} from '@/screens';
import { HeaderLeftButton, HeaderRightContainer } from '@/components/molecules';
import { useTheme } from '@/theme';

const Stack = createStackNavigator();

function ProfileNavigator() {
  const { colors, fonts } = useTheme();

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
          headerTitle: 'Profile',
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: 'Settings',
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="PrivacyAndSocial"
        component={PrivacyAndSocial}
        options={{
          headerTitle: 'Privacy & Social',
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="DefaultWorkoutVisibility"
        component={DefaultWorkoutVisibility}
        options={{
          headerTitle: 'Default Workout Visibility',
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="Units"
        component={Units}
        options={{
          headerTitle: 'Select Units',
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="ThemeSettings"
        component={ThemeSettings}
        options={{
          headerTitle: 'Select Theme',
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{
          headerTitle: 'Select App Language',
          ...commonHeaderOptions,
        }}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
