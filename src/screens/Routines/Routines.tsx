import {
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';

import { SafeScreen } from '@/components/template';
import {
  PrimaryButton,
  SecondaryButton,
  Card,
  CardTitle,
  CardSubtitle,
  SectionHeader,
  Collapsible,
} from '@/components/atoms';
import { ButtonGroup } from '@/components/molecules';
import { textOverflowEllipsis } from '@/utils/textOverflowEllipsis';
import { fetchAll } from '@/services/routines';
import { useTheme } from '@/theme';
import { Routine } from '@/types/schemas/routine';
import { RootStackParamList } from '@/types/navigation';

function Routines() {
  const { t } = useTranslation(['routines']);
  const { changeTheme, variant, layout, gutters, colors } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { isLoading, data } = useQuery<Routine[]>({
    queryKey: ['routines'],
    queryFn: fetchAll,
  });

  const onChangeTheme = () => {
    changeTheme(variant === 'default' ? 'dark' : 'default');
  };

  const renderRoutine = (routine: Routine) => (
    <Card key={routine.id}>
      <TouchableOpacity
        style={[layout.fullWidth]}
        onPress={() => navigation.navigate('Routine', { id: routine.id })}
        activeOpacity={0.8}
      >
        <CardTitle
          title={routine.name}
          onMenuPress={() => {
            /* Handle three-dot menu action */
          }}
        />
        <CardSubtitle subtitle={textOverflowEllipsis(routine.exercisesTxt)} />
      </TouchableOpacity>

      <PrimaryButton
        label={t('routines:startRoutine')}
        onPress={onChangeTheme}
      />
    </Card>
  );

  return (
    <SafeScreen>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <SectionHeader title={t('routines:quickStart')} />
        <SecondaryButton
          label={t('routines:startEmptyWorkout')}
          iconName="plus"
        />
        <SectionHeader
          title={t('routines:routines')}
          iconName="folder-plus"
          onIconPress={() => {
            /* Add new routine action */
          }}
        />
        <ButtonGroup>
          <SecondaryButton
            label={t('routines:newRoutine')}
            iconName="clipboard"
            iconLeft
            style={layout.flex_1}
          />
          <SecondaryButton
            label={t('routines:explore')}
            iconName="search"
            iconLeft
            style={layout.flex_1}
          />
        </ButtonGroup>
        <Collapsible title={t('routines:myRoutines', { count: 1 })}>
          {isLoading ? (
            <ActivityIndicator
              style={gutters.marginTop_32}
              color={colors.text}
              size="large"
            />
          ) : (
            <View>
              {data?.map((routine: Routine) => renderRoutine(routine))}
            </View>
          )}
        </Collapsible>
      </ScrollView>
    </SafeScreen>
  );
}

export default Routines;
