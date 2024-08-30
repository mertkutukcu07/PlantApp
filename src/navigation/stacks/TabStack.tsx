import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DiagnoseScreen,
  HomeScreen,
  MyGardenScreen,
  ProfileScreen,
  TreeScannerScreen,
} from '~/screens';
import { View } from 'react-native';
import { isAndroid, isIos } from '~/utils/platform';
import { Icons } from '~/constants/Icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case 'Home':
              return <Icons.HomeIcon width={25} height={25} fill={color} />;
            case 'Diagnose':
              return <Icons.DiagnoseIcon width={25} height={25} fill={color} />;
            case 'TreeScanner':
              return (
                <View style={{ marginBottom: 20 }}>
                  <Icons.TreeScannerIcon width={75} height={75} />
                </View>
              );
            case 'MyGarden':
              return <Icons.MyGardenIcon width={25} height={25} fill={color} />;
            case 'Profile':
              return <Icons.ProfileIcon width={25} height={25} fill={color} />;
          }
        },
        tabBarActiveTintColor: '#28AF6E',
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0.2,
          borderTopColor: '#979798',
          height: isIos ? 84 : 70,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'rubik-regular',
          fontSize: 10,
          bottom: isAndroid ? 10 : 0,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Diagnose" component={DiagnoseScreen} options={{ title: 'Diagnose' }} />
      <Tab.Screen name="TreeScanner" component={TreeScannerScreen} options={{ title: '' }} />
      <Tab.Screen name="MyGarden" component={MyGardenScreen} options={{ title: 'My Garden' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
