import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { config } from '@/theme/_config';
import type { ComponentTheme } from '@/types/theme/theme';

interface AllStyle
  extends Record<string, AllStyle | ImageStyle | TextStyle | ViewStyle> {}

export default ({ layout, backgrounds, fonts, gutters }: ComponentTheme) => {
  const { borders } = config;
  const styles = {
    buttonCircle: {
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      ...backgrounds.purple100,
      ...fonts.gray400,
      height: 70,
      width: 70,
      borderRadius: 35,
    },
    circle250: {
      borderRadius: 140,
      height: 250,
      width: 250,
    },
    card: {
      ...backgrounds.gray50,
      borderColor: borders.colors.gray200,
      padding: 16,
      borderRadius: 10,
    },
    buttonOutline: {
      ...backgrounds.white,
      borderWidth: borders.widths[1],
      borderColor: borders.colors.gray400,
      padding: 12,
      borderRadius: 10,
      ...layout.row,
      ...layout.justifyCenter,
      ...layout.itemsCenter,
    },
    button: {
      ...backgrounds.purple500,
      borderColor: borders.colors.gray800,
      padding: 12,
      borderRadius: 10,
    },
    iconButton: {
      ...backgrounds.gray50,
      borderWidth: borders.widths[1],
      borderColor: borders.colors.gray400,
      padding: 8,
      borderRadius: 10,
      ...layout.row,
      ...layout.justifyCenter,
      ...layout.itemsCenter,
    },
    section: {
      padding: 16,
      borderRadius: 10,
      marginBottom: 16,
      ...backgrounds.gray50,
    },
  };
  return {
    ...styles,
    primaryButton: {
      ...styles.button,
      ...backgrounds.primaryBtnBg,
      ...gutters.marginTop_16,
      ...gutters.paddingHorizontal_16,
      ...gutters.paddingVertical_12,
      ...layout.itemsStart,
      ...layout.itemsCenter,
      ...fonts.primaryBtnText,
    },
    secondaryButton: {
      ...styles.button,
      ...backgrounds.card,
      ...gutters.marginTop_16,
      ...gutters.paddingHorizontal_16,
      ...gutters.paddingVertical_12,
      ...fonts.secondaryBtnText,
    },
  } as const satisfies AllStyle;
};
