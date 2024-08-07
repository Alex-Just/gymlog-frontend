import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Startup: undefined;
  Example: undefined;
  Routines: undefined;
  Settings: undefined;
  Profile: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
