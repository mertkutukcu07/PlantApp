import { FlatList, Image, View } from 'react-native';
import React, { useMemo } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { OnboardingStackParamList } from '~/navigation/stacks/OnboardingStack';
import { RouteNames } from '~/navigation/RouteNames';
import { useNavigation } from '@react-navigation/native';
import { Body, Button, Dots, Layout, OnboardingItem, Overlay } from '~/components';
import { Images } from '~/constants/Images';
import { OnboardingItems } from '~/mocks/Onboarding';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { openPaywallModal } from '~/redux/features/paywallModal/paywallModalSlice';
import { setOnboardingCompleted } from '~/redux/features/onboarding/onboardingSlice';
type GetStartedScreenNavigationProps = StackNavigationProp<
  OnboardingStackParamList,
  RouteNames.ONBOARDING
>;

const OnboardingScreen = () => {
  const navigation = useNavigation<GetStartedScreenNavigationProps>();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const dispatch = useDispatch();

  const handleGetStarted = () => {
    if (currentIndex < OnboardingItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // @ts-ignore
      navigation.navigate(RouteNames.TABSTACK, {
        screen: RouteNames.HOME,
      });

      dispatch(openPaywallModal());
      dispatch(setOnboardingCompleted(true));
    }
  };

  return (
    <Layout>
      <StatusBar style="dark" />
      <View className="align-center flex-1 justify-between">
        {currentIndex === 1 && (
          <Image
            source={Images.ob2BG}
            className="absolute bottom-0 left-0 right-0 top-16  min-w-full"
          />
        )}
        <Body>
          <FlatList
            data={OnboardingItems}
            renderItem={({ item, index }) => (
              <OnboardingItem item={item} index={index} currentIndex={currentIndex} />
            )}
            keyExtractor={(item, index) => `${index}-onboarding-items`}
            getItemLayout={(_, index) => ({
              length: 1,
              offset: index,
              index,
            })}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            pagingEnabled
            initialScrollIndex={currentIndex}
            maxToRenderPerBatch={1}
            windowSize={1}
          />

          {currentIndex === 1 && <Overlay />}
          <Button title={'Continue'} onPress={handleGetStarted} />
          <Dots totalDots={OnboardingItems.length} currentIndex={currentIndex} />
        </Body>
      </View>
    </Layout>
  );
};

export default OnboardingScreen;
