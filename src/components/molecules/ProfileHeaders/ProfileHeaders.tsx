import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useTheme } from '@/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RootStackParamList } from '@/types/navigation';

const styles = StyleSheet.create({
  headerLeftButtonText: {
    lineHeight: 45,
  },
});

export function ProfileHeaderLeft() {
  const { fonts, gutters } = useTheme();
  const { t } = useTranslation('profile');

  return (
    <TouchableOpacity style={[gutters.marginLeft_16]}>
      <Text
        style={[fonts.size_16, fonts.primaryBtnBg, styles.headerLeftButtonText]}
      >
        {t('editProfile')}
      </Text>
    </TouchableOpacity>
  );
}

export function ProfileHeaderRight() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { colors, layout, gutters } = useTheme();

  return (
    <View
      style={[
        layout.row,
        layout.itemsCenter,
        gutters.marginRight_16,
        gutters.marginBottom_4,
      ]}
    >
      <Icon
        name="share"
        size={24}
        color={colors.text}
        style={[gutters.marginRight_16]}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Icon name="cog" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}
