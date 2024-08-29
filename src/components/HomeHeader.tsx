import { Text, View } from 'react-native';
import React from 'react';
import Input from './Input';
import { SearchIcon } from '~/assets/icons';

interface HomeHeaderProps {
  title: string;
  subtitle: string;
  search: string;
  setSearch: (text: string) => void;
}

const HomeHeader = ({ title, subtitle, search, setSearch }: HomeHeaderProps) => {
  return (
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
  );
};

export default HomeHeader;
