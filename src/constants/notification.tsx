import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});

export const NotificationType = {
  Error: 'error',
  ErrorOutlined: 'error.outlined',
  ErrorMinimal: 'error.minimal',

  Warning: 'warning',
  WarningOutlined: 'warning.outlined',
  WarningMinimal: 'warning.minimal',

  Info: 'info',
  InfoOutlined: 'info.outlined',
  InfoMinimal: 'info.minimal',

  Success: 'success',
  SuccessOutlined: 'success.outlined',
  SuccessMinimal: 'success.minimal',
} as const;

type NotificationTypeKey = keyof typeof NotificationType;
type NotificationTypeValue = (typeof NotificationType)[NotificationTypeKey];

type NotificationProps = {
  color: string;
  styles: ViewStyle | TextStyle | ImageStyle;
  renderFlashMessageIcon: () => JSX.Element;
};

export const PROPS_FOR_TYPES: Record<NotificationTypeValue, NotificationProps> =
  {
    [NotificationType.Error]: {
      color: 'white',
      styles: {
        backgroundColor: '#F44336',
      },
      renderFlashMessageIcon: () => (
        <AntDesign
          style={styles.icon}
          name="exclamationcircleo"
          size={20}
          color="white"
        />
      ),
    },
    [NotificationType.ErrorOutlined]: {
      color: '#621B16',
      styles: {
        borderWidth: 1,
        borderColor: '#F44336',
        backgroundColor: 'white',
      },
      renderFlashMessageIcon: () => (
        <AntDesign
          style={styles.icon}
          name="exclamationcircleo"
          size={20}
          color="#F44336"
        />
      ),
    },
    [NotificationType.ErrorMinimal]: {
      color: '#621B16',
      styles: {
        backgroundColor: '#FEECEB',
      },
      renderFlashMessageIcon: () => (
        <AntDesign
          style={styles.icon}
          name="exclamationcircleo"
          size={20}
          color="#621B16"
        />
      ),
    },
    [NotificationType.Warning]: {
      color: '#00121A',
      styles: {
        backgroundColor: '#E1BEA2',
      },
      renderFlashMessageIcon: () => (
        <AntDesign
          style={styles.icon}
          name="warning"
          size={20}
          color="#00121A"
        />
      ),
    },
    [NotificationType.WarningOutlined]: {
      color: '#621B16',
      styles: {
        borderWidth: 1,
        borderColor: '#E1BEA2',
        backgroundColor: 'white',
      },
      renderFlashMessageIcon: () => (
        <AntDesign
          style={styles.icon}
          name="warning"
          size={20}
          color="#E1BEA2"
        />
      ),
    },
    [NotificationType.WarningMinimal]: {
      color: '#621B16',
      styles: {
        backgroundColor: '#FCF9F6',
      },
      renderFlashMessageIcon: () => (
        <AntDesign
          style={styles.icon}
          name="warning"
          size={20}
          color="#621B16"
        />
      ),
    },
    [NotificationType.Info]: {
      color: '#00121A',
      styles: {
        backgroundColor: '#A8D1D0',
      },
      renderFlashMessageIcon: () => (
        <AntDesign
          style={styles.icon}
          name="exclamationcircleo"
          size={20}
          color="#00121A"
        />
      ),
    },
    [NotificationType.InfoOutlined]: {
      color: '#621B16',
      styles: {
        borderWidth: 1,
        borderColor: '#A8D1D0',
        backgroundColor: 'white',
      },
      renderFlashMessageIcon: () => (
        <AntDesign
          style={styles.icon}
          name="exclamationcircleo"
          size={20}
          color="#A8D1D0"
        />
      ),
    },
    [NotificationType.InfoMinimal]: {
      color: '#621B16',
      styles: {
        backgroundColor: '#F6FAFA',
      },
      renderFlashMessageIcon: () => (
        <AntDesign
          style={styles.icon}
          name="exclamationcircleo"
          size={20}
          color="#621B16"
        />
      ),
    },
    [NotificationType.Success]: {
      color: '#00121A',
      styles: {
        backgroundColor: '#B2C5A8',
      },
      renderFlashMessageIcon: () => (
        <AntDesign
          style={styles.icon}
          name="checkcircleo"
          size={20}
          color="#00121A"
        />
      ),
    },
    [NotificationType.SuccessOutlined]: {
      color: '#621B16',
      styles: {
        borderWidth: 1,
        borderColor: '#B2C5A8',
        backgroundColor: 'white',
      },
      renderFlashMessageIcon: () => (
        <AntDesign
          style={styles.icon}
          name="checkcircleo"
          size={20}
          color="#B2C5A8"
        />
      ),
    },
    [NotificationType.SuccessMinimal]: {
      color: '#621B16',
      styles: {
        backgroundColor: '#F7F9F6',
      },
      renderFlashMessageIcon: () => (
        <AntDesign
          style={styles.icon}
          name="checkcircleo"
          size={20}
          color="#621B16"
        />
      ),
    },
  };

export const DEFAULT: NotificationProps = {
  color: '#20292F',
  styles: {
    backgroundColor: '#F5F5F5',
  },
  renderFlashMessageIcon: () => (
    <AntDesign style={styles.icon} name="warning" size={20} color="#20292F" />
  ),
};
