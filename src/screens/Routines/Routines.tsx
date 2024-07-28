import { View, ScrollView, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
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
      <CardSubtitle subtitle="Calf Press (Machine), Squat (Barbell), Lat Pulldown (Cable), Bench Press (Barbell)" />
      <PrimaryButton
        label={`Start Routine (${variant})`}
        onPress={onChangeTheme}
      />
    </Card>
  );

  return (
    <SafeScreen>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <SectionHeader title="Quick Start" />
        <SecondaryButton label="Start Empty Workout" iconName="plus" />
        <SectionHeader
          title="Routines"
          iconName="folder-plus"
          onIconPress={() => {
            /* Add new routine action */
          }}
        />
        <ButtonGroup>
          <SecondaryButton
            label="New Routine"
            iconName="clipboard"
            iconLeft
            style={layout.flex_1}
          />
          <SecondaryButton
            label="Explore"
            iconName="search"
            iconLeft
            style={layout.flex_1}
          />
        </ButtonGroup>
        <Collapsible title="My Routines (1)">
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
