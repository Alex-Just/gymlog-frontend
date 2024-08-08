import { useState } from 'react';
import { View, ScrollView, Switch, Text, TouchableOpacity } from 'react-native';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { SettingItem } from '@/components/atoms';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

function PrivacyAndSocial() {
  const { gutters, colors, fonts, layout } = useTheme();
  const [isPrivateProfile, setIsPrivateProfile] = useState(false);
  const [hideSuggestedUsers, setHideSuggestedUsers] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeScreen>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View style={[gutters.marginBottom_16, gutters.marginTop_12]}>
          <SettingItem
            label="Private Profile"
            icon="lock"
            description="Having a private profile means other users need to request to follow you. Only if you accept their follow request, will they be able to see your workouts."
            noBorder
          >
            <Switch
              value={isPrivateProfile}
              onValueChange={setIsPrivateProfile}
              style={[gutters.marginLeft_28]}
            />
          </SettingItem>

          <SettingItem
            label="Hide Suggested Users"
            icon="user-slash"
            description="Enabling this will remove the suggested user section from your feed."
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
              label="Default Workout Visibility"
              icon="eye-slash"
              description="Set the default workout visibility for new workouts. You can change it for specific workouts when saving them. It does not affect existing workouts retroactively."
              noBorder
            >
              <View
                style={[layout.row, layout.itemsCenter, gutters.marginLeft_12]}
              >
                <Text style={[fonts.size_16, fonts.text]}>Private</Text>
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
