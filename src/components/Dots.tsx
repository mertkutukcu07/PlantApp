import React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

interface DotsProps {
  totalDots: number;
  currentIndex: number;
}

export const Dots: React.FC<DotsProps> = ({ totalDots, currentIndex }) => {
  return (
    <View className="mb-8 mt-4 flex-row justify-center">
      {Array.from({ length: totalDots }).map((_, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          const isActive = index === currentIndex;
          return {
            opacity: withSpring(isActive ? 1 : 0.5),
            transform: [{ scale: withSpring(isActive ? 1.2 : 1) }],
          };
        });

        return (
          <Animated.View
            key={index}
            style={animatedStyle}
            className={`mx-1 h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-dot-active' : 'bg-dot-inactive'
            }`}
          />
        );
      })}
    </View>
  );
};
