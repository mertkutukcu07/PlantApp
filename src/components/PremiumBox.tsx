import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import GradientText from './GradientText';
import { Icons } from '~/constants/Icons';

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
      <Icons.PremiumLetterIcon />
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
      <Icons.PremiumArrowIcon />
    </TouchableOpacity>
  );
};

export default PremiumBox;
