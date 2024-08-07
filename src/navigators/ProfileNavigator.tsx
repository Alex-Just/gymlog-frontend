import { createStackNavigator } from '@react-navigation/stack';
import { Profile, Settings } from '@/screens';
import { HeaderLeftButton, HeaderRightContainer } from '@/components/molecules';
import { useTheme } from '@/theme';

const Stack = createStackNavigator();

function ProfileNavigator() {
  const { colors, fonts } = useTheme();

  const profileHeaderOptions = {
    headerLeft: HeaderLeftButton,
    headerRight: HeaderRightContainer,
    headerTitle: 'Profile',
    headerStyle: {
      backgroundColor: colors.card,
      borderBottomColor: colors.card,
      borderBottomWidth: 0, // Remove the light horizontal line
      elevation: 0, // Remove the shadow on Android
      shadowOpacity: 0, // Remove the shadow on iOS
    },
    headerTitleStyle: {
      color: colors.text,
      fontSize: fonts.size_16.fontSize,
    },
    headerTintColor: colors.text,
  };

  const settingsHeaderOptions = {
    headerTitle: 'Settings',
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: colors.card,
      borderBottomColor: colors.card,
      borderBottomWidth: 0, // Remove the light horizontal line
      elevation: 0, // Remove the shadow on Android
      shadowOpacity: 0, // Remove the shadow on iOS
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
        options={profileHeaderOptions}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={settingsHeaderOptions}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
