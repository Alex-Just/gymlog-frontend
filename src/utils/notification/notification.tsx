import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Platform,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  showMessage,
  hideMessage,
  MessageOptions,
  MessageType,
} from 'react-native-flash-message';

import { DEFAULT, PROPS_FOR_TYPES } from '@/constants/notification';

const ALERT_OFFSET = 24;
const ICONS_OFFSET = 48;
const MESSAGE_OFFSET = 90;
const MAX_WIDTH_WEB = 600;

let windowWidth = Dimensions.get('window').width;
if (Platform.OS === 'web' && windowWidth > MAX_WIDTH_WEB) {
  windowWidth = MAX_WIDTH_WEB;
}

interface Action {
  text?: string;
  onPress?: () => void;
}

interface NotificationParams extends Omit<MessageOptions, 'icon'> {
  icon: {
    icon: MessageType;
    position: 'left' | 'right';
    props: Record<string, unknown>;
  };
  renderCustomContent?: () => JSX.Element;
  hideOnPress?: boolean;
  color?: string;
}

const styles = StyleSheet.create({
  customContentContainer: {
    position: 'absolute',
    top: '50%',
    marginTop: -9,
    right: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    marginRight: 6,
  },
});

export const notify = (
  type: keyof typeof PROPS_FOR_TYPES,
  title: string,
  description: string = '',
  duration: number = 6000,
  showClose: boolean = false,
  action?: Action,
) => {
  const propsForType = PROPS_FOR_TYPES[type] || DEFAULT;

  const messageParams: NotificationParams = {
    ...propsForType,
    type: type as MessageType, // Explicitly cast to MessageType
    message: title,
    description,
    duration,
    floating: true,
    hideOnPress: true,
    icon: {
      icon: type as MessageType, // Assuming the type corresponds to an icon in your system
      position: 'left', // Or 'right'
      props: {}, // Additional props for the icon component
    },
    titleStyle: {
      width: windowWidth - ALERT_OFFSET - ICONS_OFFSET,
    },
    ...(description
      ? {
          textStyle: {
            width: windowWidth - ALERT_OFFSET - ICONS_OFFSET - MESSAGE_OFFSET,
          } as StyleProp<TextStyle>,
        }
      : { height: 0 }),
    style: {
      marginTop: 8,
      minHeight: 40,
      paddingVertical: 10,
      paddingHorizontal: 18,
      borderRadius: 6,
      ...(propsForType.styles || {}),
    } as StyleProp<ViewStyle>,
  };

  if (action || showClose) {
    messageParams.renderCustomContent = () => (
      <View style={styles.customContentContainer}>
        {action && (
          <TouchableWithoutFeedback onPress={action?.onPress}>
            <Text style={[styles.actionText, { color: messageParams.color }]}>
              {action?.text || ''}
            </Text>
          </TouchableWithoutFeedback>
        )}
        {showClose && (
          <TouchableWithoutFeedback onPress={hideMessage}>
            <AntDesign name="close" size={18} color={messageParams.color} />
          </TouchableWithoutFeedback>
        )}
      </View>
    );
    messageParams.hideOnPress = false;
  }

  showMessage(messageParams);
};
