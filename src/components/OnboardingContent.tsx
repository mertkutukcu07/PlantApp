import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';

interface OnboardingContentProps {
  image: ImageSourcePropType;
  imageClassName?: string;
}

export const OnboardingContent: React.FC<OnboardingContentProps> = ({ image, imageClassName }) => (
  <View className="bg-red top-10  items-center justify-center">
    <Image source={image} className={imageClassName} />
  </View>
);
