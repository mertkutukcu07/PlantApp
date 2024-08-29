import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppNavigatorParamList } from '~/navigation';
import { RouteNames } from '~/navigation/RouteNames';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import useSafeAreaPadding, { width } from '~/utils/WindowSize';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { fetchCategories } from '~/redux/features/categories/categoriesSlice';
import { fetchQuestions } from '~/redux/features/questions/questionsSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';

type GetStartedScreenNavigationProps = StackNavigationProp<
  AppNavigatorParamList,
  RouteNames.SPLASH
>;

const SplashScreen = () => {
  const { top, bottom } = useSafeAreaPadding();
  const navigation = useNavigation<GetStartedScreenNavigationProps>();
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, any>>();
  const { isOnboardingCompleted } = useSelector((state: RootState) => state.onboarding);
  const { status: categoriesStatus } = useSelector((state: RootState) => state.categories);
  const { status: questionsStatus } = useSelector((state: RootState) => state.questions);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchQuestions());
  }, [dispatch]);

  const fakeLoadingTimeout = async (
    callback: (progress: number) => void,
    finalizeCallback: () => void
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    callback(0.27);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    callback(0.62);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    callback(1);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    finalizeCallback();
  };

  useEffect(() => {
    if (categoriesStatus === 'succeeded' && questionsStatus === 'succeeded') {
      fakeLoadingTimeout(setProgress, () => {
        if (isOnboardingCompleted) {
          navigation.navigate(RouteNames.TABSTACK);
        } else {
          navigation.navigate(RouteNames.ONBOARDINGSTACK);
        }
      });
    }
  }, [categoriesStatus, questionsStatus, navigation]);

  return (
    <View
      style={{
        paddingTop: top,
        paddingBottom: bottom,
      }}
      className="flex-1 items-center justify-between bg-background">
      <View></View>
      <View className="flex-row items-center justify-center">
        <Text className="font-rubik-bold text-4xl text-text">Plant</Text>
        <Text className="font-rubik-light text-4xl text-text">App</Text>
      </View>

      <Progress.Bar
        className="w-full"
        progress={progress}
        color="#28AF6E"
        unfilledColor="#E5E5E5"
        borderColor="transparent"
      />
    </View>
  );
};

export default SplashScreen;
