import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/theme';

interface IPickerModalProps<T> {
  title: string;
  items: { label: string; value: T }[];
  selectedValue: T;
  onValueChange: (value: T) => void;
}

function PickerModal<T extends string | number>({
  title,
  items,
  selectedValue,
  onValueChange,
}: IPickerModalProps<T>) {
  const { layout, fonts, gutters, backgrounds, borders, colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const { t } = useTranslation(['common']);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleSelectValue = (value: T) => {
    onValueChange(value);
    closeModal();
  };

  return (
    <View>
      <TouchableOpacity
        style={[
          backgrounds.lightCard,
          layout.fullWidth,
          borders.rounded_4,
          gutters.paddingVertical_12,
          gutters.paddingHorizontal_16,
          gutters.marginBottom_16,
        ]}
        onPress={openModal}
      >
        <Text style={[fonts.size_16, fonts.text]}>
          {items.find(item => item.value === selectedValue)?.label || title}
        </Text>
      </TouchableOpacity>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={closeModal}
        backdropOpacity={0.5}
        animationIn="fadeIn"
        animationOut="fadeOut"
        useNativeDriver
      >
        <View
          style={[
            backgrounds.card,
            gutters.paddingVertical_16,
            gutters.paddingHorizontal_16,
          ]}
        >
          <Text style={[fonts.size_16, fonts.bold, gutters.marginBottom_12]}>
            {title}
          </Text>
          <FlatList
            data={items}
            keyExtractor={item => String(item.value)}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  layout.row,
                  layout.justifyBetween,
                  gutters.paddingVertical_16,
                  gutters.paddingHorizontal_16,
                  selectedValue === item.value
                    ? backgrounds.primaryBtnBg
                    : backgrounds.lightCard,
                  gutters.marginBottom_8,
                  borders.rounded_4,
                ]}
                onPress={() => handleSelectValue(item.value)}
              >
                <Text
                  style={[
                    fonts.size_16,
                    selectedValue === item.value
                      ? fonts.primaryBtnText
                      : fonts.text,
                  ]}
                >
                  {item.label}
                </Text>
                {selectedValue === item.value && (
                  <Icon name="check" size={16} color={colors.primaryBtnText} />
                )}
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={[
              backgrounds.lightCard,
              gutters.paddingVertical_12,
              gutters.paddingHorizontal_16,
              borders.rounded_4,
              layout.itemsCenter,
              gutters.marginTop_12,
            ]}
            onPress={closeModal}
          >
            <Text style={[fonts.size_16, fonts.text]}>{t('cancel')}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default PickerModal;
