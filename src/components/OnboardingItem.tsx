import React from 'react';
import { Images } from '~/constants/Images';
import { OnboardingType } from '~/mocks/Onboarding';
import { OnboardingContent } from './OnboardingContent';
import { OnboardingHeader } from './OnboardingHeader';
import { View } from 'react-native';

interface OnboardingItemProps {
  item: OnboardingType;
  index: number;
  currentIndex: number;
}

const OnboardingItem: React.FC<OnboardingItemProps> = ({ item, index, currentIndex }) => {
  if (index !== currentIndex) return null;

  return (
    <View key={`${index}-onboarding-item`}>
      <OnboardingHeader
        title={item.title}
        titleFontWeight="medium"
        highlightFontWeight="bold"
        highlightWord={item.highlightWord}
        brush={Images.brush}
        brushClassName={
          item.highlightWord === 'identify'
            ? 'absolute bottom-[20] right-5 h-4 w-[40%]'
            : 'absolute bottom-[-20] right-12 h-4 w-[50%]'
        }
      />
      <OnboardingContent
        image={item.contentImage}
        imageClassName={`${index === 1 ? 'top-5' : undefined}  `}
      />
    </View>
  );
};

export default OnboardingItem;
