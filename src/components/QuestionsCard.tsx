import { Image, Text, View } from 'react-native';
import React from 'react';
import { Questions } from '~/services/types/response/questions';

interface QuestionsCardProps {
  item: Questions;
  index: number;
}

const QuestionsCard = ({ item, index }: QuestionsCardProps) => {
  return (
    <View key={index} className="mt-4">
      <View className="h-[175px] w-[220px] overflow-hidden rounded-xl">
        <Image
          source={{ uri: item?.image_uri, cache: 'force-cache' }}
          className="h-full w-full"
          resizeMode="cover"
        />
      </View>
      <View className="absolute bottom-0 left-3 right-3 max-w-[250px] overflow-hidden py-4">
        <Text numberOfLines={1} className="font-rubik-medium text-lg text-white">
          {item?.title}
        </Text>
        <Text className="font-rubik-light text-sm text-white">{item?.subtitle}</Text>
      </View>
    </View>
  );
};

export default QuestionsCard;
