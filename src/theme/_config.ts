import { DarkTheme, DefaultTheme } from '@react-navigation/native';

import type { ThemeConfiguration } from '@/types/theme/config';

const colorsLight = {
  background: '#FFFFFF',
  blue: '#0000FF',
  button: '#1E90FF',
  card: '#F0F1F5',
  lightCard: '#f7f8fa',
  gray100: '#DFDFDF',
  gray200: '#A1A1A1',
  gray400: '#787A7B',
  gray50: '#EFEFEF',
  gray800: '#404040',
  primaryBtnBg: '#007bff',
  primaryBtnText: '#fff',
  secondaryBtnText: '#fff',
  purple100: '#E1E1EF',
  purple50: '#1B1A23',
  purple500: '#44427D',
  red500: '#C13333',
  text: '#000000',
  white: '#FFFFFF',
} as const;

const colorsDark = {
  background: '#000000',
  blue: '#0000FF',
  button: '#1F66E4',
  card: '#1f1f22',
  lightCard: '#1f1f22',
  gray100: '#000000',
  gray200: '#BABABA',
  gray400: '#969696',
  gray50: '#EFEFEF',
  gray800: '#E0E0E0',
  primaryBtnBg: '#007bff',
  primaryBtnText: '#fff',
  secondaryBtnText: '#fff',
  purple100: '#252732',
  purple50: '#1B1A23',
  purple500: '#A6A4F0',
  text: '#FFFFFF',
  white: '#FFFFFF',
  red500: '#C13333',
} as const;

const sizes = [0, 4, 6, 8, 12, 14, 16, 24, 28, 32, 40, 80] as const;

export const config = {
  colors: colorsLight,
  fonts: {
    sizes,
    colors: colorsLight,
  },
  gutters: sizes,
  backgrounds: colorsLight,
  borders: {
    widths: [1, 2],
    radius: [4, 16],
    colors: colorsLight,
  },
  navigationColors: {
    ...DefaultTheme.colors,
    background: colorsLight.gray50,
    card: colorsLight.gray50,
  },
  variants: {
    dark: {
      colors: colorsDark,
      fonts: {
        colors: colorsDark,
      },
      backgrounds: colorsDark,
      borders: {
        colors: colorsDark,
      },
      navigationColors: {
        ...DarkTheme.colors,
        background: colorsDark.card,
        card: colorsDark.purple50,
      },
    },
  },
} as const satisfies ThemeConfiguration;
