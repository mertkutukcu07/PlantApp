import React from 'react';
import { View, Text, ImageSourcePropType, Image } from 'react-native';

interface OnboardingHeaderProps {
  title: string;
  subtitle?: string;
  introText?: string;
  highlightWord?: string;
  brush?: ImageSourcePropType;
  brushClassName?: string;
  titleFontWeight?: string;
  highlightFontWeight?: string;
  introTextFontWeight?: string;
  subtitleFontWeight?: string;
}

export const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  introText,
  title,
  subtitle,
  highlightWord,
  brush,
  brushClassName,
  titleFontWeight = 'regular',
  highlightFontWeight = 'semi-bold',
  introTextFontWeight = 'light',
  subtitleFontWeight = 'regular',
}) => {
  const getFontWeightClass = (weight: string) => `font-rubik-${weight}`;

  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return (
        <Text
          className={`${getFontWeightClass(titleFontWeight)}
        text-3xl text-text`}>
          {title}
        </Text>
      );
    }

    const parts = title.split(highlightWord);
    return (
      <>
        <Text className={`${getFontWeightClass(titleFontWeight)} text-3xl text-text`}>
          {parts[0]}
        </Text>
        <Text className={`${getFontWeightClass(highlightFontWeight)} text-3xl text-text`}>
          {highlightWord}
        </Text>
        <Text className={`${getFontWeightClass(titleFontWeight)} text-3xl text-text`}>
          {parts[1]}
        </Text>
      </>
    );
  };

  return (
    <View className="mt-3 gap-3">
      <View className="flex-row flex-wrap items-center gap-2">
        {introText && (
          <Text className={`${getFontWeightClass(introTextFontWeight)} text-3xl text-text`}>
            {introText}
          </Text>
        )}
        {renderTitle()}
        {brush && (
          <View className={brushClassName}>
            <Image source={brush} resizeMode="stretch" />
          </View>
        )}
      </View>
      {subtitle && (
        <Text className={`${getFontWeightClass(subtitleFontWeight)} text-xl text-text-light`}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};
