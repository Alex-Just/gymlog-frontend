import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type RootTabParamList = {
  Home: undefined;
  Workout: undefined;
  Profile: undefined;
};

interface ITabBarIconProps {
  route: RouteProp<RootTabParamList, keyof RootTabParamList>;
  color: string;
  size: number;
}

function TabBarIcon({ route, color, size }: ITabBarIconProps) {
  let iconName: string;
  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Workout':
      iconName = 'dumbbell';
      break;
    case 'Profile':
      iconName = 'user';
      break;
    default:
      iconName = 'question';
  }
  return <Icon name={iconName} size={size} color={color} />;
}

export default TabBarIcon;
