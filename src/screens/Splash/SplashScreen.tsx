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
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

type GetStartedScreenNavigationProps = StackNavigationProp<
  AppNavigatorParamList,
  RouteNames.SPLASH
>;

const SplashScreen = () => {
  const { top, bottom } = useSafeAreaPadding();
  const navigation = useNavigation<GetStartedScreenNavigationProps>();
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const { status: categoriesStatus } = useSelector((state: RootState) => state.categories);
  const { status: questionsStatus } = useSelector((state: RootState) => state.questions);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchQuestions());
  }, [dispatch]);

  useEffect(() => {
    let newProgress = 0;
    if (categoriesStatus === 'loading') newProgress += 0.1;
    if (questionsStatus === 'loading') newProgress += 0.2;
    if (categoriesStatus === 'succeeded') newProgress += 0.3;
    if (questionsStatus === 'succeeded') newProgress += 0.4;
    setProgress(newProgress);

    if (categoriesStatus === 'succeeded' && questionsStatus === 'succeeded') {
      setProgress(1);
      setTimeout(() => {
        navigation.navigate(RouteNames.ONBOARDINGSTACK);
      }, 2000);
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
