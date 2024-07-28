import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '@/theme';
import layout from '@/theme/layout';

interface IUserInfoProps {
  name: string;
}

function UserInfo({ name }: IUserInfoProps) {
  const { fonts, gutters } = useTheme();

  return (
    <View style={[layout.flex_1, layout.justifyCenter, gutters.marginTop_8]}>
      <Text style={[fonts.size_24, fonts.text, fonts.bold]}>{name}</Text>
    </View>
  );
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserInfo;
