import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Startup: undefined;
  Example: undefined;
  Routines: undefined;
  Routine: { id: string };
  Settings: undefined;
  Profile: undefined;
  PrivacyAndSocial: undefined;
  DefaultWorkoutVisibility: undefined;
  Units: undefined;
  ThemeSettings: undefined;
  Language: undefined;
  EditProfile: undefined;
  EditAccount: undefined;
  ChangeUsername: undefined;
  ChangeEmail: undefined;
  ChangePassword: undefined;
  EditNotifications: undefined;
  WorkoutSettings: undefined;
  FirstWeekday: undefined;
  TimerSoundVolume: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
