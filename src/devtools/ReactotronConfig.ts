import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({ name: 'PlantApp' })
  .useReactNative()
  .connect();

Reactotron.onCustomCommand({
  title: 'Show Dev Menu',
  description: 'Opens the React Native dev menu',
  command: 'showDevMenu',
  handler: () => {
    Reactotron.log('Showing React Native dev menu');
    NativeModules.DevMenu.show();
  },
});

Reactotron.onCustomCommand({
  title: 'Reload App',
  description: 'Reloads the React Native app',
  command: 'reloadApp',
  handler: () => {
    Reactotron.log('Reloading React Native app');
    NativeModules.DevMenu.reload();
  },
});

Reactotron.onCustomCommand({
  title: 'Clear Cache',
  description: 'Clears the React Native cache',
  command: 'clearCache',
  handler: () => {
    Reactotron.log('Clearing React Native cache');
    NativeModules.DevMenu.clearCache();
  },
});

Reactotron.onCustomCommand({
  title: 'Clear AsyncStorage',
  description: 'Clears the React Native AsyncStorage',
  command: 'clearAsyncStorage',
  handler: () => {
    Reactotron.log('Clearing React Native AsyncStorage');
    AsyncStorage.clear();
  },
});
