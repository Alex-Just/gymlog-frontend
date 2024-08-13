import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import PickerModal from '@/components/molecules/PickerModal/PickerModal';
import { storage } from '@/utils/storage';

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
  { label: 'Русский', value: 'ru' },
];

interface LanguagePickerProps {
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

function LanguagePicker({
  selectedLanguage,
  onLanguageChange,
}: LanguagePickerProps) {
  const { t } = useTranslation(['editProfile', 'common']);

  const handleLanguageChange = async (lang: string) => {
    await i18next.changeLanguage(lang);
    storage.set('selectedLanguage', lang);
    onLanguageChange(lang);
  };

  return (
    <PickerModal
      title={t('selectLanguage')}
      items={languages}
      selectedValue={selectedLanguage}
      onValueChange={lang => void handleLanguageChange(lang)}
    />
  );
}

export default LanguagePicker;
