import "@/app/global.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import { BasicLayout } from "@/components/BasicLayout";
import { StatusBar } from "expo-status-bar";
import { createTamagui, TamaguiProvider, PortalProvider } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4"; // for quick config install this
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Provider as PaperProvider } from "react-native-paper";

const config = createTamagui(defaultConfig);

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <PaperProvider>
        <TamaguiProvider config={config}>
          <Provider store={store}>
            <ErrorBoundary>
              <PortalProvider>
                <BasicLayout />
                <StatusBar
                  style='dark'
                  hidden={true}
                  backgroundColor='transparent'
                  hideTransitionAnimation='slide'
                  networkActivityIndicatorVisible={false}
                  translucent={true}
                  animated={true}
                />
              </PortalProvider>
            </ErrorBoundary>
          </Provider>
        </TamaguiProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
