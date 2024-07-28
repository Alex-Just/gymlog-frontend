import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@/theme';

const styles = StyleSheet.create({
  headerLeftButtonText: {
    lineHeight: 45,
  },
});

export function HeaderLeftButton() {
  const { fonts, gutters } = useTheme();
  return (
    <TouchableOpacity style={[gutters.marginLeft_16]}>
      <Text
        style={[fonts.size_16, fonts.primaryBtnBg, styles.headerLeftButtonText]}
      >
        Edit Profile
      </Text>
    </TouchableOpacity>
  );
}

export function HeaderRightContainer() {
  const { colors, layout, gutters } = useTheme();
  return (
    <View
      style={[
        layout.row,
        layout.itemsCenter,
        gutters.marginRight_16,
        gutters.marginTop_4,
      ]}
    >
      <Icon
        name="share"
        size={24}
        color={colors.text}
        style={[gutters.marginRight_16]}
      />
      <Icon name="cog" size={24} color={colors.text} />
    </View>
  );
}
