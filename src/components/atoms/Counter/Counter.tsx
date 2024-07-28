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
      style={[
        layout.itemsStart,
        gutters.marginRight_16,
        gutters.marginBottom_12,
      ]}
    >
      <Text style={[fonts.size_14, fonts.gray400]}>{label}</Text>
      <Text style={[fonts.size_16, fonts.text]}>{value}</Text>
    </View>
  );
}

Counter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Counter;
