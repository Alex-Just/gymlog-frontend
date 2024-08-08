import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';

function ThemeSettings() {
  const {
    gutters,
    colors,
    layout,
    fonts,
    changeTheme,
    variant,
    backgrounds,
    borders,
  } = useTheme();

  const themes: { label: string; value: 'default' | 'dark' | 'system' }[] = [
    { label: 'Use OS Setting', value: 'system' },
    { label: 'Dark', value: 'dark' },
    { label: 'Light', value: 'default' },
  ];

  const onSelectTheme = (theme: string) => {
    changeTheme(theme === 'default' ? 'default' : 'dark');
  };

  return (
    <SafeScreen>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View style={[gutters.marginBottom_16, gutters.marginTop_16]}>
          {themes.map(theme => (
            <TouchableOpacity
              key={theme.value}
              onPress={() => onSelectTheme(theme.value)}
              style={[
                layout.row,
                layout.justifyBetween,
                layout.itemsCenter,
                gutters.paddingVertical_16,
                gutters.paddingHorizontal_16,
                gutters.marginBottom_8,
                variant === theme.value
                  ? backgrounds.primaryBtnBg
                  : backgrounds.card,
                borders.rounded_4,
              ]}
            >
              <Text
                style={[
                  fonts.size_16,
                  variant === theme.value
                    ? [fonts.primaryBtnText, fonts.bold]
                    : fonts.text,
                ]}
              >
                {theme.label}
              </Text>
              {variant === theme.value && (
                <Text style={[fonts.size_16, fonts.primaryBtnText]}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default ThemeSettings;
