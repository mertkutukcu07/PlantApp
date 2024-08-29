import { ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { Category } from '~/services/types/response/categories';

interface CategoryCardProps {
  item: Category;
  index: number;
}

const CategoryCard = ({ item, index }: CategoryCardProps) => {
  return (
    <View
      key={index}
      className="mb-4 aspect-square w-[48%] overflow-hidden rounded-xl bg-category-background"
      style={{
        borderWidth: 1,
        borderColor: '#E7EBE9',
      }}>
      <ImageBackground
        source={{ uri: item.image.url, cache: 'force-cache' }}
        className="h-full w-full items-end justify-end overflow-hidden rounded-xl"
        resizeMode="cover">
        <View className="absolute left-0 right-0 top-0 p-3">
          <Text className="text-text-text w-[75%] font-rubik-medium text-lg">{item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CategoryCard;
