import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Body, Button } from '~/components';
import { OnboardingContent } from '~/components/OnboardingContent';
import { OnboardingHeader } from '~/components/OnboardingHeader';
import { TermsAndConditions } from '~/components/TermsAndConditions';
import { Images } from '~/constants/Images';
import { RouteNames } from '~/navigation/RouteNames';
import { OnboardingStackParamList } from '~/navigation/stacks/OnboardingStack';
import useSafeAreaPadding, { height, width } from '~/utils/WindowSize';

type GetStartedScreenNavigationProps = StackNavigationProp<
  OnboardingStackParamList,
  RouteNames.GETSTARTED
>;

const GetStartedScreen = () => {
  const { top, bottom } = useSafeAreaPadding();
  const navigation = useNavigation<GetStartedScreenNavigationProps>();

  const handleGetStarted = () => {
    navigation.navigate(RouteNames.ONBOARDING);
  };

  return (
    <ImageBackground source={Images.getStartedBG} className="h-full w-full ">
      <View
        style={[
          {
            paddingTop: top,
            paddingBottom: bottom,
          },
        ]}
        className="align-center flex-1 justify-between">
        <Body>
          <OnboardingHeader
            introText="Welcome to"
            title="PlantApp"
            subtitle="Identify more than 3000+ plants and 88% accuracy."
            titleFontWeight="bold"
          />
          <OnboardingContent image={Images.getStartedContent} />
          <Button title="Get Started" onPress={handleGetStarted} />
          <TermsAndConditions
            footerText="By tapping next, you are agreeing to PlantID"
            termsText="Terms of Use"
            privacyText="Privacy Policy"
            onTermsPress={() => {}}
            onPrivacyPress={() => {}}
          />
        </Body>
      </View>
    </ImageBackground>
  );
};

export default GetStartedScreen;
