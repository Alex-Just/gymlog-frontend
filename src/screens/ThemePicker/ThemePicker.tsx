import { useTranslation } from 'react-i18next';

import PickerModal from '@/components/molecules/PickerModal/PickerModal';
import { useTheme } from '@/theme';

const themes = [
  { label: 'Light', value: 'default' as const },
  { label: 'Dark', value: 'dark' as const },
];

function ThemePicker() {
  const { variant, changeTheme } = useTheme();
  const { t } = useTranslation(['settings']);

  const handleThemeChange = (theme: 'default' | 'dark') => {
    changeTheme(theme);
  };

  return (
    <PickerModal
      title={t('settings:theme')}
      items={themes}
      selectedValue={variant}
      onValueChange={handleThemeChange}
    />
  );
}

export default ThemePicker;
