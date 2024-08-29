import { Text, View } from 'react-native';
import React from 'react';
import { FasterIcon, UnlimitedIcon } from '~/assets/icons';
import { PaywallFeaturesType } from '~/mocks/Paywall';

interface PaywallFeatureItemProps {
  index: number;
  item: PaywallFeaturesType;
}

const PaywallFeatureItem = ({ item, index }: PaywallFeatureItemProps) => {
  const dynamicIcon = () => {
    switch (item.title) {
      case 'Unlimited':
        return <UnlimitedIcon />;
      case 'Faster':
        return <FasterIcon />;
      default:
        return <UnlimitedIcon />;
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      }}
      key={index}
      className="relative  rounded-2xl px-4 py-4">
      <View className="relative h-32 w-32 ">
        {dynamicIcon()}
        <View className="mt-6 gap-y-2">
          <Text className="font-rubik-medium text-2xl text-white">{item.title}</Text>
          <Text className="text-md font-rubik-regular text-white">{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaywallFeatureItem;
