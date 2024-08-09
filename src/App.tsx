import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';

import '@/translations';
import { ThemeProvider } from '@/theme';
import TabNavigator from '@/navigators/TabNavigator';
import { loadSavedLanguage } from '@/utils/languageUtils';
import { storage } from '@/utils/storage';

export const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    void loadSavedLanguage();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider storage={storage}>
        <SafeAreaProvider>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
