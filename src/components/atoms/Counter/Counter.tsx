import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '@/theme';

interface ICounterProps {
  label: string;
  value: number;
}

function Counter({ label, value }: ICounterProps) {
  const { fonts, gutters, layout } = useTheme();

  return (
    <View
      style={[layout.flex_1, gutters.marginRight_8, gutters.marginBottom_12]}
    >
      <Text style={[fonts.size_12, fonts.gray400, layout.wrapText]}>
        {label}
      </Text>
      <Text style={[fonts.size_14, fonts.text]}>{value}</Text>
    </View>
  );
}

Counter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Counter;
