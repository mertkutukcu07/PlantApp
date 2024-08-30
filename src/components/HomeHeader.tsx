import { Text, View } from 'react-native';
import React from 'react';
import Input from './Input';
import { Icons } from '~/constants/Icons';

interface HomeHeaderProps {
  title: string;
  subtitle: string;
  search: string;
  setSearch: (text: string) => void;
}

const HomeHeader = ({ title, subtitle, search, setSearch }: HomeHeaderProps) => {
  return (
    <View className="mt-2 gap-3">
      <Text className="font-rubik-regular text-2xl text-text">{title}</Text>
      <Text className="font-rubik-medium text-3xl text-text">{subtitle}</Text>
      <Input
        value={search}
        onChangeText={setSearch}
        placeholder="Search for plants"
        leftIcon={<Icons.SearchIcon />}
      />
    </View>
  );
};

export default HomeHeader;
