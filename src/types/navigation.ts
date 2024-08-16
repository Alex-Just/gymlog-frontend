import type { StackScreenProps } from '@react-navigation/stack';

import { Routine } from '@/types/schemas/workout';

export type RootStackParamList = {
  ChangeEmail: undefined;
  ChangePassword: undefined;
  ChangeUsername: undefined;
  DefaultWorkoutVisibility: undefined;
  EditAccount: undefined;
  EditNotifications: undefined;
  EditProfile: undefined;
  EditRoutine: { routine: Routine };
  Example: undefined;
  FirstWeekday: undefined;
  Language: undefined;
  PrivacyAndSocial: undefined;
  Profile: undefined;
  Routine: { id: string };
  Routines: undefined;
  Settings: undefined;
  Startup: undefined;
  ThemeSettings: undefined;
  TimerSoundVolume: undefined;
  Units: undefined;
  WorkoutSettings: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
