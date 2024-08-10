import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
  TextStyle,
} from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { PrimaryButton, Avatar, SectionHeader } from '@/components/atoms';
import { useTranslation } from 'react-i18next';

function EditProfile() {
  const { gutters, layout, fonts, backgrounds, colors, borders } = useTheme();
  const { t } = useTranslation(['editProfile']);

  return (
    <SafeScreen>
      <ScrollView>
        <View style={[layout.itemsCenter, gutters.marginBottom_6]}>
          <Avatar source={{ uri: 'https://i.pravatar.cc/150?img=3' }} />
          <TouchableOpacity style={gutters.marginTop_12}>
            <Text style={[fonts.size_16, fonts.primaryBtnBg]}>
              {t('changePicture')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Public Profile Section */}
        <SectionHeader
          title={t('publicProfile')}
          style={fonts.gray400 as TextStyle}
        />
        <Text
          style={[
            fonts.size_16,
            fonts.bold,
            fonts.text,
            gutters.marginBottom_8,
            gutters.marginTop_12,
          ]}
        >
          {t('name')}
        </Text>
        <TextInput
          placeholder={t('name')}
          placeholderTextColor={colors.gray400}
          defaultValue="Alex"
          style={[
            fonts.size_16,
            gutters.marginBottom_16,
            backgrounds.lightCard,
            layout.fullWidth,
            borders.rounded_4,
            gutters.paddingVertical_12,
            gutters.paddingHorizontal_16,
            fonts.text,
          ]}
        />

        <Text
          style={[
            fonts.size_16,
            fonts.bold,
            fonts.text,
            gutters.marginBottom_8,
          ]}
        >
          {t('bio')}
        </Text>
        <TextInput
          placeholder={t('bio')}
          placeholderTextColor={colors.gray400}
          style={[
            fonts.size_16,
            gutters.marginBottom_16,
            backgrounds.lightCard,
            layout.fullWidth,
            borders.rounded_4,
            gutters.paddingVertical_12,
            gutters.paddingHorizontal_16,
            fonts.text,
          ]}
        />

        <Text
          style={[
            fonts.size_16,
            fonts.bold,
            fonts.text,
            gutters.marginBottom_8,
          ]}
        >
          {t('link')}
        </Text>
        <TextInput
          placeholder={t('link')}
          placeholderTextColor={colors.gray400}
          defaultValue="https://example.com"
          style={[
            fonts.size_16,
            backgrounds.lightCard,
            layout.fullWidth,
            borders.rounded_4,
            gutters.paddingVertical_12,
            gutters.paddingHorizontal_16,
            fonts.gray400,
          ]}
        />

        {/* Private Data Section */}
        <SectionHeader
          title={t('privateData')}
          style={[fonts.gray400, gutters.marginTop_8] as TextStyle}
        />
        <Text
          style={[
            fonts.size_16,
            fonts.bold,
            fonts.text,
            gutters.marginBottom_8,
            gutters.marginTop_14,
          ]}
        >
          {t('sex')}
        </Text>
        <Text
          style={[
            fonts.size_16,
            fonts.gray400,
            gutters.marginBottom_16,
            backgrounds.lightCard,
            gutters.padding_12,
          ]}
        >
          {t('male')}
        </Text>

        <Text
          style={[
            fonts.size_16,
            fonts.bold,
            fonts.text,
            gutters.marginBottom_8,
          ]}
        >
          {t('birthday')}
        </Text>
        <Text
          style={[
            fonts.size_16,
            fonts.gray400,
            gutters.marginBottom_6,
            gutters.padding_12,
            backgrounds.lightCard,
          ]}
        >
          {t('sampleDate')}
        </Text>

        <PrimaryButton label={t('save')} />
      </ScrollView>
    </SafeScreen>
  );
}

export default EditProfile;
