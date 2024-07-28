import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '@/theme';

type CollapsibleProps = {
  title: string;
  children: React.ReactNode;
  initialExpanded?: boolean;
};

function Collapsible({
  title,
  children,
  initialExpanded = true,
}: CollapsibleProps) {
  const { layout, fonts, gutters, colors } = useTheme();
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  return (
    <View style={gutters.marginTop_16}>
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        style={[layout.row, layout.itemsCenter]}
      >
        <Icon
          name={isExpanded ? 'angle-down' : 'angle-right'}
          size={16}
          color={colors.text}
        />
        <Text style={[fonts.size_16, fonts.gray400, gutters.marginLeft_8]}>
          {title}
        </Text>
      </TouchableOpacity>
      {isExpanded && <View style={gutters.marginTop_16}>{children}</View>}
    </View>
  );
}

export default Collapsible;
