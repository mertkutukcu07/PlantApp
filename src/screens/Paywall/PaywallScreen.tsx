import {
  FlatList,
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import { Images } from '~/constants/Images';
import useSafeAreaPadding from '~/utils/WindowSize';
import { CloseIcon } from '~/assets/icons';
import { Body, Button, PaywallActions, PaywallFeatureItem, PaywallPlanItem } from '~/components';
import { PaywallFeatures, PaywallPlans } from '~/mocks/Paywall';
import { PaywallPlan } from '~/constants/Paywall';
import { isIos } from '~/utils/platform';

interface PaywallModalProps {
  visible: boolean;
  onDismiss: () => void;
}

const PaywallModal = ({ visible, onDismiss }: PaywallModalProps) => {
  const { top, bottom } = useSafeAreaPadding();
  const [selectedPlan, setSelectedPlan] = React.useState(PaywallPlan.yearly);

  const handleSelectPlan = (plan: PaywallPlan) => {
    setSelectedPlan(plan);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onDismiss}>
      <StatusBar barStyle="light-content" />
      <View className="flex-1 bg-paywall-background">
        <ImageBackground
          style={{
            paddingTop: isIos ? top : 0,
            paddingBottom: isIos ? bottom : 0,
          }}
          className="h-[65%] w-full justify-between"
          source={Images.paywall}
          resizeMode="cover">
          <Body>
            <TouchableOpacity className="mt-4 items-end justify-end" onPress={onDismiss}>
              <CloseIcon />
            </TouchableOpacity>
          </Body>
          <Body>
            <View>
              <View className="flex-row items-center">
                <Text className="font-rubik-bold text-4xl text-white">PlantApp</Text>
                <Text className="ml-2 font-rubik-light text-3xl text-white">Premium</Text>
              </View>
              <Text className="mt-2 font-rubik-light text-xl text-white opacity-75">
                Access All Features
              </Text>
              <FlatList
                data={PaywallFeatures}
                horizontal
                className="mt-4 gap-4"
                contentContainerClassName="gap-4"
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => `${index}-features`}
                renderItem={({ item, index }) => <PaywallFeatureItem index={index} item={item} />}
              />
            </View>
          </Body>
        </ImageBackground>
        <Body>
          <View className="bottom-4 mb-10 gap-4">
            {PaywallPlans.map((item, index) => (
              <PaywallPlanItem
                key={`${index}-plans`}
                selectedPlan={selectedPlan}
                handleSelectPlan={handleSelectPlan}
                item={item}
              />
            ))}
          </View>
          <View className="bottom-6">
            <Button title="Try free for 3 days" />
          </View>
          <Text
            style={{
              fontSize: 9,
            }}
            className="text-center font-rubik-regular text-text-muted">
            After the 3-day free trial period you'll be charged ₺274.99 per year unless you cancel
            before the trial expires. Yearly Subscription is Auto-Renewable
          </Text>
          <PaywallActions
            onPressPrivacy={() => {}}
            onPressRestore={() => {}}
            onPressTerms={() => {}}
          />
        </Body>
      </View>
    </Modal>
  );
};

export default PaywallModal;
