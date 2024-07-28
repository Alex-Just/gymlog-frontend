import { Text, TextProps, StyleProp, TextStyle } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from '@/theme';

interface ICardSubtitleProps extends TextProps {
  subtitle: string;
  style?: StyleProp<TextStyle>;
}

function CardSubtitle({ subtitle, style = {}, ...props }: ICardSubtitleProps) {
  const { fonts, gutters } = useTheme();

  return (
    <Text
      style={[
        fonts.size_14,
        fonts.gray400,
        gutters.marginTop_8,
        style as StyleProp<TextStyle>,
      ]}
      {...props}
    >
      {subtitle}
    </Text>
  );
}

CardSubtitle.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  subtitle: PropTypes.string.isRequired,
};

export default CardSubtitle;
