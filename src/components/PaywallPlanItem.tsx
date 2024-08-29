import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { PaywallPlanType } from '~/mocks/Paywall';
import { PaywallPlan } from '~/constants/Paywall';
import { ActiveIcon } from '~/assets/icons';
import InActiveIcon from '~/assets/icons/InActive';

interface PaywallPlanItemProps {
  item: PaywallPlanType;
  selectedPlan: PaywallPlan;
  handleSelectPlan: (plan: PaywallPlan) => void;
}

const PaywallPlanItem = ({ item, selectedPlan, handleSelectPlan }: PaywallPlanItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => handleSelectPlan(item.id)}
      className="relative overflow-hidden rounded-2xl"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
      }}>
      <View
        className={`flex-row items-center justify-between rounded-2xl border-2 px-4 py-3 ${item.id === PaywallPlan.yearly ? 'border-primary' : 'border-paywall-monthlyBorder'}`}>
        {item.id === selectedPlan ? <ActiveIcon /> : <InActiveIcon />}
        {item.discount && (
          <View className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-2xl bg-primary px-2 py-1">
            <Text className="font-rubik-bold text-sm text-white opacity-75">Save %50</Text>
          </View>
        )}
        <View className="ml-4 flex-1">
          <Text className="text-md font-rubik-medium text-white">{item.title}</Text>
          <Text className="font-rubik-light text-sm text-white opacity-75">{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PaywallPlanItem;
