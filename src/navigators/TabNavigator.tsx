import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { useTheme } from '@/theme';
import Home from '@/screens/Home/Home';
import Routines from '@/screens/Routines/Routines';
import Profile from '@/screens/Profile/Profile';
import { RouteProp } from '@react-navigation/native';
import { HeaderLeftButton, HeaderRightContainer } from '@/components/molecules';
import { TabBarIcon } from '@/components/organisms';

type RootTabParamList = {
  Home: undefined;
  Workout: undefined;
  Profile: undefined;
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
        name="Profile"
        component={Profile}
        options={{
          headerTitle: 'alex74737737',
          headerLeft: HeaderLeftButton,
          headerRight: HeaderRightContainer,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
