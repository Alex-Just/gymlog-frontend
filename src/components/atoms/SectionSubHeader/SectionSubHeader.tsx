import { Text, TouchableOpacity } from 'react-native';

import { useTheme } from '@/theme';

interface SectionSubHeaderProps {
  title: string;
  small?: boolean;
  onPress?: () => void;
}

function SectionSubHeader({
  title,
  onPress,
  small = false,
}: SectionSubHeaderProps) {
  const { fonts, gutters } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          small ? fonts.size_14 : fonts.size_16,
          fonts.text,
          gutters.marginTop_8,
          gutters.marginBottom_4,
          fonts.gray400,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default SectionSubHeader;
