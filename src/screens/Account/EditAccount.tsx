import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { SettingItem } from '@/components/atoms';
import { useTranslation } from 'react-i18next';

function EditAccount() {
  const { gutters, layout, fonts } = useTheme();
  const { t } = useTranslation(['editAccount']);

  const accountOptions = [
    {
      label: t('changeUsername'),
      icon: 'user',
      onPress: () => {
        /* Navigate to Change Username */
      },
    },
    {
      label: t('changeEmail'),
      icon: 'envelope',
      onPress: () => {
        /* Navigate to Change Email */
      },
    },
    {
      label: t('updatePassword'),
      icon: 'lock',
      onPress: () => {
        /* Navigate to Update Password */
      },
    },
  ];

  return (
    <SafeScreen>
      <ScrollView style={[gutters.paddingBottom_16]}>
        <View style={[gutters.marginBottom_16, gutters.marginTop_12]}>
          {accountOptions.map(option => (
            <TouchableOpacity key={option.label} onPress={option.onPress}>
              <SettingItem label={option.label} icon={option.icon} />
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => {
              /* Handle account deletion */
            }}
            style={layout.itemsCenter}
          >
            <Text
              style={[
                fonts.size_14,
                gutters.marginTop_20,
                fonts.red500,
                layout.justifyCenter,
              ]}
            >
              {t('deleteAccount')}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}

export default EditAccount;
