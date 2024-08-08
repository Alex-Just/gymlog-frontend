import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
  { label: 'Русский', value: 'ru' },
];

type LanguageCode = 'en' | 'es' | 'ru';

function Language() {
  const { gutters, colors, layout, fonts, backgrounds, borders } = useTheme();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const onChangeLanguage = (lang: LanguageCode) => {
    void i18next.changeLanguage(lang);
  };

  return (
    <SafeScreen>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View style={[gutters.marginBottom_16, gutters.marginTop_16]}>
          {languages.map(language => (
            <TouchableOpacity
              key={language.value}
              onPress={() => onChangeLanguage(language.value as LanguageCode)}
              style={[
                layout.row,
                layout.justifyBetween,
                layout.itemsCenter,
                gutters.paddingVertical_16,
                gutters.paddingHorizontal_16,
                gutters.marginBottom_8,
                currentLanguage === language.value
                  ? backgrounds.primaryBtnBg
                  : backgrounds.card,
                borders.rounded_4,
              ]}
            >
              <Text
                style={[
                  fonts.size_16,
                  currentLanguage === language.value
                    ? [fonts.primaryBtnText, fonts.bold]
                    : fonts.text,
                ]}
              >
                {language.label}
              </Text>
              {currentLanguage === language.value && (
                <Text style={[fonts.size_16, fonts.primaryBtnText]}>✓</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default Language;
