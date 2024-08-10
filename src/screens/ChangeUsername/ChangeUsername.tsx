import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { useTranslation } from 'react-i18next';

function ChangeUsername() {
  const { gutters, layout, fonts, colors, backgrounds, borders } = useTheme();
  const { t } = useTranslation(['changeUsername']);

  return (
    <SafeScreen>
      <View style={[gutters.marginTop_16, gutters.paddingHorizontal_16]}>
        <Text style={[fonts.size_16, gutters.marginBottom_8]}>
          {t('newUsername')}
        </Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor={colors.gray400}
          defaultValue="alex74737737"
          style={[
            fonts.size_16,
            backgrounds.lightCard,
            layout.fullWidth,
            borders.rounded_4,
            gutters.paddingVertical_12,
            gutters.paddingHorizontal_16,
            fonts.text,
          ]}
        />
        <TouchableOpacity
          style={[
            layout.itemsCenter,
            backgrounds.primaryBtnBg,
            gutters.marginTop_24,
            gutters.paddingVertical_12,
            borders.rounded_4,
          ]}
        >
          <Text style={[fonts.size_16, fonts.primaryBtnText]}>{t('save')}</Text>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}

export default ChangeUsername;
