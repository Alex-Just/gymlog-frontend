import { TextInput, TouchableOpacity, Text } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { useTranslation } from 'react-i18next';

function ChangePassword() {
  const { gutters, layout, fonts, colors, backgrounds, borders } = useTheme();
  const { t } = useTranslation(['changePassword']);

  return (
    <SafeScreen>
      <Text
        style={[fonts.size_16, gutters.marginBottom_8, gutters.marginTop_14]}
      >
        {t('newPassword')}
      </Text>
      <TextInput
        placeholder={t('passwordPlaceholder')}
        placeholderTextColor={colors.gray400}
        secureTextEntry
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
    </SafeScreen>
  );
}

export default ChangePassword;
