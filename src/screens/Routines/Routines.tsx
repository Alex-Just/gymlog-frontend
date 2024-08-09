import { View, ScrollView, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { SafeScreen } from '@/components/template';
import { fetchAll } from '@/services/routines';
import { useTheme } from '@/theme';
import { Routine } from '@/types/schemas/routine';
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

function Routines() {
  const { t } = useTranslation(['routines']);
  const { changeTheme, variant, layout, gutters, colors } = useTheme();
  const { isLoading, data } = useQuery<Routine[]>({
    queryKey: ['routines'],
    queryFn: fetchAll,
  });

  const onChangeTheme = () => {
    changeTheme(variant === 'default' ? 'dark' : 'default');
  };

  const renderRoutine = (routine: Routine) => (
    <Card key={routine.id}>
      <CardTitle
        title={routine.name}
        onMenuPress={() => {
          /* Handle three-dot menu action */
        }}
      />
      <CardSubtitle
        subtitle={t('routines:exercises', {
          defaultValue:
            'Calf Press (Machine), Squat (Barbell), Lat Pulldown (Cable), Bench Press (Barbell)',
        })}
      />
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
          title={t('routines:title')}
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
