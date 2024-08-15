import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useTheme } from '@/theme';

interface TextWithIconProps {
  icon: string;
  text: string;
}

function TextWithIcon({ icon, text }: TextWithIconProps) {
  const { layout, fonts, colors, gutters } = useTheme();

  return (
    <View style={[layout.row, layout.itemsCenter]}>
      <Icon
        name={icon}
        size={16}
        color={colors.primaryBtnBg}
        style={gutters.marginRight_8}
      />
      <Text style={[fonts.size_16, fonts.primaryBtnBg]}>{text}</Text>
    </View>
  );
}

export default TextWithIcon;
