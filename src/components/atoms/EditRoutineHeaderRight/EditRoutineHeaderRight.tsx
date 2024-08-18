import { Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/theme';

interface EditRoutineHeaderRightProps {
  onPress?: () => void;
}

function EditRoutineHeaderRight({ onPress }: EditRoutineHeaderRightProps) {
  const { fonts, gutters } = useTheme();
  const { t } = useTranslation('common');

  return (
    <TouchableOpacity onPress={onPress}>
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
