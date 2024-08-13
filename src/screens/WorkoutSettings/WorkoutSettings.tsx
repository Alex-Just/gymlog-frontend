import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/theme';
import { SettingItem } from '@/components/molecules';
import { SafeScreen } from '@/components/template';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';

function WorkoutSettings() {
  const { gutters, fonts } = useTheme();
  const { t } = useTranslation('workoutSettings');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleFirstDayOfWeekPress = () => {
    navigation.navigate('FirstWeekday');
  };

  const handleTimerSoundVolumePress = () => {
    navigation.navigate('TimerSoundVolume');
  };

  return (
    <SafeScreen>
      <ScrollView style={[gutters.paddingBottom_16]}>
        <TouchableOpacity onPress={handleFirstDayOfWeekPress}>
          <SettingItem label={t('firstDayOfWeek')}>
            <Text style={[fonts.size_16, fonts.text]}>{t('days.monday')}</Text>
          </SettingItem>
        </TouchableOpacity>

        <SettingItem label={t('previousWorkoutValues')}>
          <Text style={[fonts.size_16, fonts.text]}>
            {t('defaults.default')}
          </Text>
        </SettingItem>

        <TouchableOpacity onPress={handleTimerSoundVolumePress}>
          <SettingItem label={t('timerVolume')}>
            <Text style={[fonts.size_16, fonts.text]}>{t('volume.high')}</Text>
          </SettingItem>
        </TouchableOpacity>

        <SettingItem label={t('defaultRestTimer')}>
          <Text style={[fonts.size_16, fonts.text]}>
            {t('timer.default', { time: '1 min 0s' })}
          </Text>
        </SettingItem>
      </ScrollView>
    </SafeScreen>
  );
}

export default WorkoutSettings;
