import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useOnboarding = () => {
  const [isOnboarding, setIsOnboarding] = useState(true);

  const completeOnboarding = async () => {
    setIsOnboarding(false);
    await AsyncStorage.setItem("onboardingComplete", "true");
    console.log("Onboarding complete", isOnboarding);
  };

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
  }, [completeOnboarding]);

  return { isOnboarding, completeOnboarding };
};

export default useOnboarding;
