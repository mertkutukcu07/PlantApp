import { ImageBackground, ScrollView, Text, View } from 'react-native';
import React from 'react';
import PaywallModal from '../Paywall/PaywallScreen';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { closePaywallModal } from '~/redux/features/paywallModal/paywallModalSlice';
import { Images } from '~/constants/Images';
import useSafeAreaPadding from '~/utils/WindowSize';
import { StatusBar } from 'expo-status-bar';
import { Body, GradientText, Input } from '~/components';
import { PremiumArrow, PremiumLetterIcon, SearchIcon } from '~/assets/icons';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { top } = useSafeAreaPadding();
  const isOpen = useSelector((state: RootState) => state.paywallModal.isOpen);
  const categories = useSelector((state: RootState) => state.categories.categories);
  const questions = useSelector((state: RootState) => state.questions.questions);

  console.log(categories, questions);
  const [search, setSearch] = React.useState('');
  return (
    <View className="bg-background">
      <StatusBar style="dark" />
      <ImageBackground
        className="h-[210px] w-full"
        style={{
          paddingTop: top,
        }}
        source={Images.homeHeaderBG}
        resizeMode="cover">
        <Body>
          <View className="mt-2 gap-3">
            <Text className="font-rubik-regular text-2xl text-text">Hi, plant lover!</Text>
            <Text className="font-rubik-medium text-3xl text-text">Good Afternoon! ⛅</Text>
            <Input
              value={search}
              onChangeText={setSearch}
              placeholder="Search for plants"
              leftIcon={<SearchIcon />}
            />
          </View>
        </Body>
      </ImageBackground>
      <ScrollView
        contentContainerClassName="w-full h-full"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Body>
          <View className="bg-premiumBox-background mt-4 flex-row items-center justify-between rounded-xl px-2 py-3">
            <PremiumLetterIcon />
            <View>
              <GradientText
                colors={['#E5C990', '#E4B046']}
                className="font-rubik-semi-bold text-xl text-white">
                FREE Premium Available
              </GradientText>
              <GradientText
                colors={['#E5C990', '#E4B046']}
                className="text-md font-rubik-regular text-white">
                Tap to upgrade your account!
              </GradientText>
            </View>
            <PremiumArrow />
          </View>

          <View className="mt-8">
            <Text className="font-rubik-medium text-xl text-text">Get Started</Text>
          </View>
        </Body>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
