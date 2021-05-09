/* eslint-disable @typescript-eslint/no-empty-function */
import Reactotron from 'reactotron-react-native';
import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

if (__DEV__ && process.env.NODE_ENV !== 'test') {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];

  const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
    .configure({
      name: 'Restaurants Finder',
      host: scriptHostname,
    })
    .useReactNative()
    .connect();

  if (tron && tron.clear && tron.log && tron.logImportant && tron.error) {
    tron.clear();
    console.tron = tron as typeof console.tron;
  }
} else {
  console.tron = ({
    log: () => {},
    logImportant: () => {},
    error: () => {},
  } as unknown) as typeof console.tron;
}
