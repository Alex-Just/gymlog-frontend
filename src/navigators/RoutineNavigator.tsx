import { useTranslation } from 'react-i18next';

import { createStackNavigator } from '@react-navigation/stack';

import { EditRoutineHeaderRight } from '@/components/atoms';
import { Routine, Routines, EditRoutine } from '@/screens';
import { useTheme } from '@/theme';

const Stack = createStackNavigator();

function RoutineNavigator() {
  const { colors, fonts } = useTheme();
  const { t } = useTranslation(['common', 'routines', 'routine']);

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
        name="Routines"
        component={Routines}
        options={{
          headerTitle: t('routines:title'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="Routine"
        component={Routine}
        options={{
          headerTitle: t('routine:title'),
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="EditRoutine"
        component={EditRoutine}
        options={{
          headerTitle: t('routine:editRoutine'),
          headerRight: EditRoutineHeaderRight,
        }}
      />
    </Stack.Navigator>
  );
}

export default RoutineNavigator;
