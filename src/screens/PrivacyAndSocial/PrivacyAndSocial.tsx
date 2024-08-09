import { useState } from 'react';
import { View, ScrollView, Switch, Text, TouchableOpacity } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { SettingItem } from '@/components/atoms';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTranslation } from 'react-i18next';

function PrivacyAndSocial() {
  const { gutters, colors, fonts, layout } = useTheme();
  const { t } = useTranslation(['settings']);
  const [isPrivateProfile, setIsPrivateProfile] = useState(false);
  const [hideSuggestedUsers, setHideSuggestedUsers] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeScreen>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View style={[gutters.marginBottom_16, gutters.marginTop_12]}>
          <SettingItem
            label={t('settings:privateProfile')}
            icon="lock"
            description={t('settings:privateProfileDescription')}
            noBorder
          >
            <Switch
              value={isPrivateProfile}
              onValueChange={setIsPrivateProfile}
              style={[gutters.marginLeft_28]}
            />
          </SettingItem>

          <SettingItem
            label={t('settings:hideSuggestedUsers')}
            icon="user-slash"
            description={t('settings:hideSuggestedUsersDescription')}
            noBorder
          >
            <Switch
              value={hideSuggestedUsers}
              onValueChange={setHideSuggestedUsers}
              style={[gutters.marginLeft_28]}
              trackColor={{ false: colors.text, true: colors.primaryBtnBg }}
            />
          </SettingItem>

          <TouchableOpacity
            onPress={() => navigation.navigate('DefaultWorkoutVisibility')}
          >
            <SettingItem
              label={t('settings:defaultWorkoutVisibility')}
              icon="eye-slash"
              description={t('settings:defaultWorkoutVisibilityDescription')}
              noBorder
            >
              <View
                style={[layout.row, layout.itemsCenter, gutters.marginLeft_12]}
              >
                <Text style={[fonts.size_16, fonts.text]}>
                  {t('settings:private')}
                </Text>
                <Icon
                  name="angle-right"
                  size={24}
                  color={colors.gray400}
                  style={gutters.paddingLeft_8}
                />
              </View>
            </SettingItem>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default PrivacyAndSocial;
