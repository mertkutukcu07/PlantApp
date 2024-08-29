import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { PremiumArrow, PremiumLetterIcon } from '~/assets/icons';
import GradientText from './GradientText';

interface PremiumBoxProps {
  onPress: () => void;
  title: string;
  subtitle: string;
}

const PremiumBox = ({ onPress, title, subtitle }: PremiumBoxProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="mt-4 flex-row items-center justify-between rounded-xl bg-premiumBox-background px-2 py-3">
      <PremiumLetterIcon />
      <View>
        <GradientText
          colors={['#E5C990', '#E4B046']}
          className="font-rubik-semi-bold text-xl text-white">
          {title}
        </GradientText>
        <GradientText
          colors={['#E5C990', '#E4B046']}
          className="text-md font-rubik-regular text-white">
          {subtitle}
        </GradientText>
      </View>
      <PremiumArrow />
    </TouchableOpacity>
  );
};

export default PremiumBox;