import { View } from 'react-native';
import React from 'react';

interface BodyProps {
  children: React.ReactNode;
}
const Body = ({ children }: BodyProps) => {
  return <View className="flex-1 px-9">{children}</View>;
};

export default Body;
