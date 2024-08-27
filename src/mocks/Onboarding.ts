import { ImageSourcePropType } from 'react-native';
import { Images } from '~/constants/Images';

export interface OnboardingType {
  title: string;
  description?: string;
  brush?: boolean;
  contentImage: ImageSourcePropType;
  backgroundImage?: ImageSourcePropType;
}

export const OnboardingItems: OnboardingType[] = [
  {
    title: 'Welcome to',
    description: 'Identify more than 3000+ plants and 88% accuracy.',
    backgroundImage: Images.getStartedBG,
    contentImage: Images.getStartedContent,
  },
  {
    title: 'Take a photo to identify the plant!',
    contentImage: Images.ob1Content,
    brush: true,
  },
  {
    title: 'Get plant care guides',
    contentImage: Images.ob2Content,
    brush: true,
  },
];
