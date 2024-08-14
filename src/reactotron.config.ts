import Reactotron, { ReactotronReactNative } from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import {
  QueryClientManager,
  reactotronReactQuery,
} from 'reactotron-react-query';

import { storage } from '@/utils/storage';

import { queryClient } from './App';
import config from '../app.json';

const queryClientManager = new QueryClientManager({
  queryClient,
});

Reactotron.configure({
  name: config.name,
  onDisconnect: () => {
    queryClientManager.unsubscribe();
  },
})
  .useReactNative()
  .use(mmkvPlugin<ReactotronReactNative>({ storage }))
  .use(reactotronReactQuery(queryClientManager))
  .connect();

Reactotron.onCustomCommand({
  title: 'Clear MMKV Storage',
  description: 'Clears all data in MMKV storage',
  command: 'clear_mmkv_storage',
  handler: () => {
    storage.clearAll();
    Reactotron.display({
      name: 'MMKV Storage Cleared',
      value: 'All data has been cleared from MMKV storage.',
      important: true,
    });
  },
});
