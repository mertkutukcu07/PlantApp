import { ImageSourcePropType } from 'react-native';
import { Images } from '~/constants/Images';

export interface OnboardingType {
  title: string;
  contentImage: ImageSourcePropType;
  highlightWord: string;
}

export const OnboardingItems: OnboardingType[] = [
  {
    title: 'Take a photo to identify the plant!',
    contentImage: Images.ob1Content,
    highlightWord: 'identify',
  },
  {
    title: 'Get plant care guides',
    contentImage: Images.ob2Content,
    highlightWord: 'care guides',
  },
];
