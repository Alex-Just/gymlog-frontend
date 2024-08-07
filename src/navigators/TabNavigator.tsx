import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { useTheme } from '@/theme';
import { Home, Routines } from '@/screens';
import ProfileNavigator from '@/navigators/ProfileNavigator';
import { RouteProp } from '@react-navigation/native';
import { TabBarIcon } from '@/components/organisms';

type RootTabParamList = {
  Home: undefined;
  Workout: undefined;
  ProfileTab: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const getScreenOptions = (
  route: RouteProp<RootTabParamList, keyof RootTabParamList>,
): BottomTabNavigationOptions => ({
  tabBarIcon: function TabBarIconWrapper({ color, size }) {
    return <TabBarIcon route={route} color={color} size={size} />;
  },
});

function TabNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...getScreenOptions(route),
        tabBarActiveTintColor: colors.primaryBtnBg,
        tabBarInactiveTintColor: colors.gray400,
        borderTopWidth: 0,
        tabBarStyle: {
          borderBlockColor: colors.card,
          backgroundColor: colors.card,
          elevation: 0, // Remove the shadow on Android
          shadowOpacity: 0, // Remove the shadow on iOS
          height: 50,
        },
        headerTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.card,
          borderBottomColor: colors.card,
          borderBottomWidth: 0, // Remove the light horizontal lineSafeScreen
          elevation: 0, // Remove the shadow on Android
          shadowOpacity: 0, // Remove the shadow on iOS
        },
        headerTitleStyle: {
          lineHeight: 45,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Workout" component={Routines} />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{ title: 'Profile', headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
