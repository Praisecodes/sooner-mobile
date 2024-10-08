import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/routers/app_stack';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    "inter": require('./assets/fonts/Inter-Regular.ttf'),
    "inter-bold": require('./assets/fonts/Inter-Bold.ttf'),
    "inter-light": require('./assets/fonts/Inter-Light.ttf'),
    "inter-semibold": require('./assets/fonts/Inter-SemiBold.ttf'),
    "inter-thin": require('./assets/fonts/Inter-Thin.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
