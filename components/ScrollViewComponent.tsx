import { ReactNode, useState } from "react";
import { SafeAreaView, View, RefreshControl } from "react-native";
import { ScrollView } from "tamagui";
import { Menu } from "@/components/topMenu";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Footer from "@/components/footer";

const ScrollViewComponentBase = ({ children }: { children: ReactNode }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{
            paddingTop: 60,
            flexGrow: 1,
            // paddingBottom: 120, // додаємо простір ПІД футером
          }}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1 }}>
            <Menu />
            {children}
            <Footer />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ScrollViewComponentBase;
