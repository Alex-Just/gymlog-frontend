import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@/theme';

interface SettingHeaderProps {
  title: string;
}

function SettingHeader({ title }: SettingHeaderProps): React.ReactElement {
  const { fonts, backgrounds, gutters } = useTheme();

  return (
    <Text
      style={[
        fonts.size_16,
        backgrounds.lightCard,
        gutters.padding_12,
        fonts.text,
      ]}
    >
      {title}
    </Text>
  );
}

export default SettingHeader;
