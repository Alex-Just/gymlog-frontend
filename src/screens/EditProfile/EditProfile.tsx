import { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { launchImageLibrary, Asset } from 'react-native-image-picker';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

import {
  PrimaryButton,
  Avatar,
  LanguagePicker,
  Switch,
} from '@/components/atoms';
import { SafeScreen } from '@/components/template';
import { fetchOne, updateOne } from '@/services/users';
import { useTheme } from '@/theme';
import { appendFileToFormData, FileData } from '@/utils/appendFileToFormData';

function EditProfile() {
  const { gutters, layout, fonts, backgrounds, colors, borders } = useTheme();
  const { t } = useTranslation(['editProfile', 'common']);
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: fetchOne,
  });

  const mutation = useMutation({
    mutationFn: updateOne,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] });
      navigation.goBack();
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

  const handleImagePicker = async () => {
    try {
      const response = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: false,
      });

      if (response.errorCode) {
        Alert.alert('Error', `Image picker error: ${response.errorMessage}`);
      } else if (response.assets && response.assets.length > 0) {
        const pickedImage: Asset = response.assets[0];
        if (pickedImage.uri) {
          setProfilePicture(pickedImage.uri);
        } else {
          Alert.alert('Error', 'Image URI is not available.');
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong with the image picker.');
    }
  };

  const handleSave = () => {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('bio', bio);
    formData.append('language', language);
    formData.append('private_profile', privateProfile.toString());

    if (profilePicture) {
      const fileData: FileData = {
        uri: profilePicture,
        type: 'image/jpeg',
        name: 'profile_picture.jpg',
      };
      appendFileToFormData(formData, 'profile_picture', fileData);
    }

    mutation.mutate(formData);
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
          <TouchableOpacity
            style={gutters.marginVertical_14}
            onPress={() => {
              void handleImagePicker();
            }}
          >
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
          style={[gutters.marginBottom_16]}
        />

        <PrimaryButton label={t('save')} onPress={handleSave} />
      </ScrollView>
    </SafeScreen>
  );
}

export default EditProfile;
