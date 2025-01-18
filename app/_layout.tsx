import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView, View } from "react-native";
import { WebView } from "react-native-webview";
import Onboarding from "@/components/onboarding/onboarding"; // Ensure this path is correct
import AsyncStorage from "@react-native-async-storage/async-storage";
import StickySidebar from "@/components/sidebar/sidebar";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const { isOnboarding } = useOnboarding(); // Start with null to handle loading state
  const [isOnboarding, setIsOnboarding] = useState(true);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      // checkOnboardingStatus();
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const onboardingStatus = await AsyncStorage.getItem("onboardingComplete");

      if (onboardingStatus) {
        setIsOnboarding(false);
      } else {
        setIsOnboarding(true);
      }
    };
    checkOnboardingStatus();
    return () => {};
  }, []);
  if (!isOnboarding) {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#fff", paddingTop: 20 }}
      >
        <View style={{ flex: 1 }}>
          <WebView source={{ uri: "https://theinfinixrealestate.com/" }} />
        </View>
        <StickySidebar />
      </SafeAreaView>
    );
  }

  // Otherwise, show the onboarding screen
  return <Onboarding setIsOnboarding={setIsOnboarding} />;
}
