import { Image, ImageProps, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 16,
  },
});

function Avatar(props: ImageProps) {
  return <Image style={styles.avatar} {...props} />;
}

Avatar.propTypes = {
  source: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
};

export default Avatar;
