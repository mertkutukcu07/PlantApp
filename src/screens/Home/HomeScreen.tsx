import { FlatList, ImageBackground, ScrollView, Text, View } from 'react-native';
import React from 'react';
import PaywallModal from '../Paywall/PaywallScreen';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import {
  closePaywallModal,
  openPaywallModal,
} from '~/redux/features/paywallModal/paywallModalSlice';
import { Images } from '~/constants/Images';
import useSafeAreaPadding from '~/utils/WindowSize';
import { StatusBar } from 'expo-status-bar';
import { Body, CategoryCard, HomeHeader, PremiumBox, QuestionsCard } from '~/components';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { top } = useSafeAreaPadding();
  const isOpen = useSelector((state: RootState) => state.paywallModal.isOpen);
  const categories = useSelector((state: RootState) => state.categories.categories);
  const questions = useSelector((state: RootState) => state.questions.questions);

  const [search, setSearch] = React.useState('');
  return (
    <View className="flex-1 bg-background">
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          className="h-[210px] w-full"
          style={{
            paddingTop: top,
          }}
          source={Images.homeHeaderBG}
          resizeMode="cover">
          <Body>
            <HomeHeader
              title="Hi, plant lover!"
              subtitle="Good Afternoon! ⛅"
              search={search}
              setSearch={setSearch}
            />
          </Body>
        </ImageBackground>

        <Body>
          <PremiumBox
            onPress={() => dispatch(openPaywallModal())}
            title="FREE Premium Available"
            subtitle="Tap to upgrade your account!"
          />
          <View className="mt-8">
            <Text className="font-rubik-medium text-xl text-text">Get Started</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="gap-4 rounded-xl"
              data={questions}
              keyExtractor={(item, index) => `${index}-questions`}
              renderItem={({ item, index }) => <QuestionsCard item={item} index={index} />}
            />
          </View>
          <FlatList
            data={categories}
            numColumns={2}
            scrollEnabled={false}
            ListHeaderComponent={
              <Text className="font-rubik-medium text-xl text-text">Category</Text>
            }
            contentContainerClassName="gap-4 mt-6 pb-6"
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item, index }) => <CategoryCard item={item} index={index} />}
          />
        </Body>
      </ScrollView>
      <PaywallModal visible={isOpen} onDismiss={() => dispatch(closePaywallModal())} />
    </View>
  );
};

export default HomeScreen;
