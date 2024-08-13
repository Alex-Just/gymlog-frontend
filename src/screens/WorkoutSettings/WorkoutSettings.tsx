import { ScrollView, Switch, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/theme';
import { SettingItem } from '@/components/molecules';
import { SafeScreen } from '@/components/template';

function WorkoutSettings() {
  const { gutters, fonts } = useTheme();
  const { t } = useTranslation('workoutSettings');

  return (
    <SafeScreen>
      <ScrollView style={[gutters.paddingBottom_16]}>
        <SettingItem label={t('firstDayOfWeek')}>
          <Text style={[fonts.size_16, fonts.text]}>{t('days.monday')}</Text>
        </SettingItem>

        <SettingItem label={t('previousWorkoutValues')}>
          <Text style={[fonts.size_16, fonts.text]}>
            {t('defaults.default')}
          </Text>
        </SettingItem>

        <SettingItem label={t('warmUpCalculator')}>
          <Switch value={false} />
        </SettingItem>

        <SettingItem label={t('keepAwakeDuringWorkout')}>
          <Switch value={false} />
        </SettingItem>

        <SettingItem label={t('plateCalculator')}>
          <Switch value />
        </SettingItem>

        <SettingItem label={t('rpeTracking')}>
          <Switch value={false} />
        </SettingItem>

        <SettingItem label={t('timerSound')}>
          <Text style={[fonts.size_16, fonts.text]}>{t('sound.default')}</Text>
        </SettingItem>

        <SettingItem label={t('timerVolume')}>
          <Text style={[fonts.size_16, fonts.text]}>{t('volume.high')}</Text>
        </SettingItem>

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
