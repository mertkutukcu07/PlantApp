import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RouteNames } from '~/navigation/RouteNames';
import { OnboardingStackParamList } from '~/navigation/stacks/OnboardingStack';

type WelcomeScreenNavigationProps = StackNavigationProp<
  OnboardingStackParamList,
  RouteNames.WELCOME
>;

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProps>();
  return (
    <View
      style={{
        marginTop: 100,
      }}></View>
  );
};

export default WelcomeScreen;
