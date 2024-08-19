import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { launchImageLibrary, Asset } from 'react-native-image-picker';

import { useNavigation } from '@react-navigation/native';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchOne, updateOne } from '@/services/users';
import { appendFileToFormData } from '@/utils/appendFileToFormData';
import { notify } from '@/utils/notification';
import { User } from '@/types/schemas/user';

export const useEditProfile = () => {
  const { t } = useTranslation(['editProfile', 'common']);
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  const { control, handleSubmit, setValue, watch, reset } = useForm<User>({
    defaultValues: {
      name: '',
      bio: '',
      language: 'en',
      profilePicture: '',
      privateProfile: false,
    },
  });

  const { data, isLoading, error } = useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: fetchOne,
  });

  useEffect(() => {
    if (error) {
      notify('error', t('common:error'), error.message);
    }
  }, [error, t]);

  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
        bio: data.bio,
        language: data.language || 'en',
        profilePicture: data.profilePicture,
        privateProfile: data.privateProfile,
      });
    }
  }, [data, reset]);

  const mutation = useMutation({
    mutationFn: updateOne,
    onSuccess: updatedUser => {
      queryClient.setQueryData(['user'], updatedUser);
      notify('success', t('common:updated'));
      navigation.goBack();
    },
  });

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
          setValue('profilePicture', pickedImage.uri);
        } else {
          Alert.alert('Error', 'Image URI is not available.');
        }
      }
    } catch (pickerError) {
      Alert.alert('Error', String(pickerError));
    }
  };

  const onSubmit = (user: User) => {
    const form = new FormData();
    form.append('name', user.name);
    form.append('bio', user.bio);
    form.append('language', user.language);
    form.append('privateProfile', user.privateProfile.toString());

    if (user.profilePicture) {
      appendFileToFormData(form, 'profilePicture', {
        uri: user.profilePicture,
        type: 'image/jpeg',
        name: 'profile_picture.jpg',
      });
    }

    mutation.mutate(form);
  };

  return {
    control,
    handleSubmit,
    watch,
    isLoading,
    handleImagePicker,
    onSubmit,
  };
};
