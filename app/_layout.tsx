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
  const [isOnboarding, setIsOnboarding] = useState<boolean | null>(null); // Start with null to handle loading state
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const value = await AsyncStorage.getItem("onboard");
        if (value === "yes") {
          console.log(value);
          setIsOnboarding(false); // Set to false if onboarding is complete
        } else {
          setIsOnboarding(true); // Show onboarding if not completed
        }
      } catch (e) {
        setIsOnboarding(true); // In case of error, assume onboarding is required
      }
    };

    if (loaded) {
      checkOnboardingStatus();
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (isOnboarding === null || !loaded) {
    return null; // Loading state, ensure the app doesn't render prematurely
  }

  // Show the WebView or main app content if onboarding is complete
  if (!isOnboarding) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1 }}>
          <WebView source={{ uri: "https://theinfinixrealestate.com/" }} />
        </View>
        <StickySidebar />
      </SafeAreaView>
    );
  }

  // Otherwise, show the onboarding screen
  return <Onboarding />;
}
