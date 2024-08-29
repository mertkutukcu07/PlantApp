import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

interface PaywallActionsProps {
  onPressTerms: () => void;
  onPressPrivacy: () => void;
  onPressRestore: () => void;
}

const PaywallActions = ({ onPressPrivacy, onPressRestore, onPressTerms }: PaywallActionsProps) => {
  return (
    <View className="mt-4 flex-row justify-center gap-10">
      <TouchableOpacity onPress={onPressTerms}>
        <Text className="text-center font-rubik-regular text-xs text-text-muted">Terms</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressPrivacy}>
        <Text className="text-center font-rubik-regular text-xs text-text-muted">Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRestore}>
        <Text className="text-center font-rubik-regular text-xs text-text-muted">Restore</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaywallActions;
