import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '@/theme';

interface IPrimaryButtonProps extends TouchableOpacityProps {
  label: string;
}

function PrimaryButton({ label, ...props }: IPrimaryButtonProps) {
  const { components, fonts, gutters } = useTheme();

  return (
    <TouchableOpacity
      style={[components.primaryButton, gutters.marginTop_14]}
      {...props}
    >
      <Text style={[fonts.size_16, fonts.bold, fonts.primaryBtnText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PrimaryButton;
