import { ReactNode } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '@/theme';
import SettingIcon from '@/components/atoms/SettingIcon/SettingIcon';

interface SettingItemProps {
  label: string;
  icon: string;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  noBorder?: boolean;
  description?: string;
}

function SettingItem({
  label,
  icon,
  style,
  children,
  noBorder,
  description,
}: SettingItemProps) {
  const { layout, fonts, gutters, borders } = useTheme();

  return (
    <View
      style={[
        gutters.paddingVertical_16,
        borders.lightCard,
        !noBorder && borders.wBottom_1,
        style,
      ]}
    >
      <View style={[layout.row, layout.itemsCenter]}>
        <SettingIcon name={icon} />
        <View style={[layout.flex_1, gutters.marginLeft_16]}>
          <Text style={(fonts.size_16, fonts.text)}>{label}</Text>
          {description && (
            <Text style={[fonts.size_14, fonts.gray400, gutters.marginTop_4]}>
              {description}
            </Text>
          )}
        </View>
        {children && <View>{children}</View>}
      </View>
    </View>
  );
}

export default SettingItem;
