import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';

import {
  PrimaryButton,
  Avatar,
  LanguagePicker,
  Switch,
} from '@/components/atoms';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';

import { useEditProfile } from './hooks/useEditProfile';

function EditProfile() {
  const { gutters, layout, backgrounds, colors, borders, fonts } = useTheme();
  const { t } = useTranslation(['editProfile', 'common']);
  const {
    control,
    handleSubmit,
    watch,
    isLoading,
    handleImagePicker,
    onSubmit,
  } = useEditProfile();

  const profilePicture = watch('profilePicture');

  const styles = StyleSheet.create({
    changePictureText: {
      ...fonts.size_16,
      ...fonts.primaryBtnBg,
    },
    labelText: {
      ...fonts.size_16,
      ...gutters.marginBottom_8,
      ...fonts.bold,
    },
    input: {
      ...fonts.size_16,
      ...gutters.paddingVertical_12,
      ...gutters.paddingHorizontal_16,
      ...gutters.marginBottom_16,
      ...backgrounds.lightCard,
      ...layout.fullWidth,
      ...borders.rounded_4,
    },
    avatarContainer: {
      ...layout.itemsCenter,
      ...gutters.marginBottom_6,
      ...gutters.marginTop_12,
    },
    changePictureButton: {
      ...gutters.marginVertical_14,
    },
    switchContainer: {
      ...gutters.marginBottom_16,
    },
  });

  if (isLoading) {
    return (
      <SafeScreen>
        <ActivityIndicator size="large" color={colors.primaryBtnBg} />
      </SafeScreen>
    );
  }

  return (
    <SafeScreen>
      <ScrollView>
        <View style={styles.avatarContainer}>
          <Avatar uri={profilePicture} />
          <TouchableOpacity
            style={styles.changePictureButton}
            onPress={() => void handleImagePicker()}
          >
            <Text style={styles.changePictureText}>{t('changePicture')}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelText}>{t('name')}</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder={t('name')}
              placeholderTextColor={colors.gray400}
              value={value}
              onChangeText={onChange}
              style={styles.input}
            />
          )}
        />

        <Text style={styles.labelText}>{t('bio')}</Text>
        <Controller
          control={control}
          name="bio"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder={t('bio')}
              placeholderTextColor={colors.gray400}
              value={value}
              onChangeText={onChange}
              style={styles.input}
            />
          )}
        />

        <Text style={styles.labelText}>{t('language')}</Text>
        <Controller
          control={control}
          name="language"
          render={({ field: { onChange, value } }) => (
            <LanguagePicker
              selectedLanguage={value}
              onLanguageChange={onChange}
            />
          )}
        />

        <Text style={styles.labelText}>{t('privateProfile')}</Text>
        <Controller
          control={control}
          name="privateProfile"
          render={({ field: { onChange, value } }) => (
            <Switch
              value={value}
              onValueChange={onChange}
              style={styles.switchContainer}
            />
          )}
        />

        <PrimaryButton
          label={t('save')}
          onPress={() => void handleSubmit(onSubmit)()}
        />
      </ScrollView>
    </SafeScreen>
  );
}

export default EditProfile;
