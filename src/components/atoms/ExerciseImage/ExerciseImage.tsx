import { Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type ExerciseImageProps = {
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
    marginRight: 10,
  },
  image: {
    resizeMode: 'cover',
  },
});

function ExerciseImage({
  uri,
  size = 50,
  iconSize = 24,
  iconColor = '#000',
}: ExerciseImageProps) {
  const hasValidUri = uri && uri.trim() !== '';

  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 8 },
      ]}
    >
      {hasValidUri ? (
        <Image
          source={{ uri }}
          style={[
            styles.image,
            { width: size, height: size, borderRadius: size / 8 },
          ]}
        />
      ) : (
        <Icon name="dumbbell" size={iconSize} color={iconColor} />
      )}
    </View>
  );
}

export default ExerciseImage;
