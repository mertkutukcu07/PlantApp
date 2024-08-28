import React from 'react';
import { View, Text, Pressable } from 'react-native';

interface TermsAndConditionsProps {
  footerText: string;
  termsText: string;
  privacyText: string;
  onTermsPress: () => void;
  onPrivacyPress: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  footerText,
  termsText,
  privacyText,
  onTermsPress,
  onPrivacyPress,
}) => (
  <View>
    <View className="mt-4 items-center">
      <Text className="text-md text-center font-rubik-regular text-text-muted">
        {footerText}{' '}
        <Pressable onPress={onTermsPress}>
          <Text className="text-md top-0.5 font-rubik-regular text-text-muted underline">
            {termsText}
          </Text>
        </Pressable>{' '}
        &{' '}
        <Pressable onPress={onPrivacyPress}>
          <Text className="text-md top-0.5 text-text-muted underline first-letter:font-rubik-regular">
            {privacyText}
          </Text>
        </Pressable>
      </Text>
    </View>
  </View>
);
