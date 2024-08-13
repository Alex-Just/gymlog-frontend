import { Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type AvatarProps = {
  uri?: string;
  size?: number;
  iconSize?: number;
  iconColor?: string;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    marginRight: 16,
  },
  image: {
    resizeMode: 'cover',
  },
});

function Avatar({
  uri,
  size = 80,
  iconSize = 50,
  iconColor = '#000',
}: AvatarProps) {
  const hasValidUri = uri && uri.trim() !== '';

  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      {hasValidUri ? (
        <Image
          source={{ uri }}
          style={[
            styles.image,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
        />
      ) : (
        <Icon name="user-circle" size={iconSize} color={iconColor} />
      )}
    </View>
  );
}

export default Avatar;
