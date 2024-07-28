import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '@/theme';

interface IStatProps {
  label: string;
  value: string;
}

function Stat({ label, value }: IStatProps) {
  const { fonts, colors } = useTheme();

  return (
    <View>
      <Text style={[fonts.size_14, fonts.gray400]}>{label}</Text>
      <Text style={[fonts.size_16, { color: colors.text }]}>{value}</Text>
    </View>
  );
}

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Stat;
