import { StyleSheet } from 'react-native';
import { useTheme } from '@/theme';

const useStyles = () => {
  const { layout, gutters, components, colors } = useTheme();

  return StyleSheet.create({
    primaryBtn: {
      ...layout.row,
      ...layout.itemsCenter,
      ...layout.itemsStart,
      ...components.button,
      ...gutters.paddingHorizontal_16,
      ...gutters.paddingVertical_12,
      backgroundColor: colors.purple50,
      color: '#fff',
      borderRadius: 8,
    },
    secondaryBtn: {
      ...layout.row,
      ...layout.itemsCenter,
      ...layout.itemsStart,
      ...gutters.paddingHorizontal_16,
      ...gutters.paddingVertical_12,
      backgroundColor: colors.card,
      color: '#000',
      borderRadius: 8,
      textAlign: 'center',
    },
    flexMarginRight8: {
      marginRight: 8,
    },
    gap16: {
      gap: 16,
    },
  });
};

export default useStyles;
