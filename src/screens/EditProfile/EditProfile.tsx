import { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Switch,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { PrimaryButton, Avatar, LanguagePicker } from '@/components/atoms';
import { fetchOne, updateOne } from '@/services/users';

function EditProfile() {
  const { gutters, layout, fonts, backgrounds, colors, borders } = useTheme();
  const { t } = useTranslation(['editProfile', 'common']);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: fetchOne,
  });

  const mutation = useMutation({
    mutationFn: updateOne,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const [name, setName] = useState(data?.name || '');
  const [bio, setBio] = useState(data?.bio || '');
  const [language, setLanguage] = useState('en');
  const [profilePicture, setProfilePicture] = useState(
    data?.profile_picture || '',
  );
  const [privateProfile, setPrivateProfile] = useState(
    data?.private_profile || false,
  );

  useEffect(() => {
    if (data) {
      setName(data.name);
      setBio(data.bio);
      setLanguage(data.language);
      setProfilePicture(data.profile_picture);
      setPrivateProfile(data.private_profile);
    }
  }, [data]);

  if (isLoading) {
    return (
      <SafeScreen>
        <ActivityIndicator size="large" color={colors.primaryBtnBg} />
      </SafeScreen>
    );
  }

  const handleSave = () => {
    mutation.mutate({
      name,
      bio,
      language,
      profile_picture: profilePicture,
      private_profile: privateProfile,
    });
  };

  return (
    <SafeScreen>
      <ScrollView>
        <View
          style={[
            layout.itemsCenter,
            gutters.marginBottom_6,
            gutters.marginTop_12,
          ]}
        >
          <Avatar uri={profilePicture} />
          <TouchableOpacity style={gutters.marginVertical_14}>
            <Text style={[fonts.size_16, fonts.primaryBtnBg]}>
              {t('changePicture')}
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            fonts.size_16,
            fonts.bold,
            fonts.text,
            gutters.marginBottom_8,
          ]}
        >
          {t('name')}
        </Text>
        <TextInput
          placeholder={t('name')}
          placeholderTextColor={colors.gray400}
          value={name}
          onChangeText={setName}
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
          value={bio}
          onChangeText={setBio}
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
          {t('language')}
        </Text>
        <LanguagePicker
          selectedLanguage={language}
          onLanguageChange={setLanguage}
        />

        <Text
          style={[
            fonts.size_16,
            fonts.bold,
            fonts.text,
            gutters.marginBottom_8,
          ]}
        >
          {t('privateProfile')}
        </Text>
        <Switch
          value={privateProfile}
          onValueChange={setPrivateProfile}
          style={gutters.marginBottom_16}
          trackColor={{ false: colors.text, true: colors.primaryBtnBg }}
        />

        <PrimaryButton label={t('save')} onPress={handleSave} />
      </ScrollView>
    </SafeScreen>
  );
}

export default EditProfile;
