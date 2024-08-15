import { Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/theme';

function EditRoutineHeaderRight() {
  const { fonts, gutters } = useTheme();
  const { t } = useTranslation('common');

  const handleUpdate = () => {
    // Handle the update action here
  };

  return (
    <TouchableOpacity onPress={handleUpdate}>
      <Text
        style={[
          fonts.size_16,
          fonts.primaryBtnBg,
          gutters.paddingHorizontal_14,
        ]}
      >
        {t('update')}
      </Text>
    </TouchableOpacity>
  );
}

export default EditRoutineHeaderRight;
