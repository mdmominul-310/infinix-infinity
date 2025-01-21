import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useOnboarding from "@/hooks/useOnboarding";

const colors = {
  primary: "#eda024",
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFF",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

interface OnboardingProps {
  setIsOnboarding: (value: boolean) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ setIsOnboarding }) => {
  const [idxActive, setIdxActive] = useState(0);
  // const { isOnboarding, completeOnboarding } = useOnboarding(); // Using the custom hook

  // useEffect(() => {
  //   if (!isOnboarding) {
  //     // Perform any action when onboarding is complete, if necessary
  //     console.log("Onboarding complete");
  //   }
  // }, [isOnboarding]);

  const completeOnboarding = async () => {
    setIsOnboarding(false);
    await AsyncStorage.setItem("onboardingComplete", "true");
    // console.log("Onboarding complete", isOnboarding);
  };

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={idxActive < 2}
      activeDotStyle={{
        width: 25,
        backgroundColor: colors.primary,
        marginBottom: 100,
      }}
      dotColor="#5A6070"
      loop={false} // Disable looping
      scrollEnabled={false} // Disable swipe gestures
      dotStyle={{ marginBottom: 100 }}
      index={0}
      buttonWrapperStyle={{
        position: "absolute",
        top: 0,
        alignItems: "flex-end",
        justifyContent: "center",
      }}
      onIndexChanged={(idxActive: number) => setIdxActive(idxActive)}
      nextButton={
        <Text
          style={{
            textAlign: "center",
            fontWeight: "800",
            fontSize: 20,
            color: "#FFFFFF",
            backgroundColor: colors.primary,
            marginBottom: 30,
            borderRadius: 30,
            padding: 10,
            paddingHorizontal: 140,
          }}
        >
          Next
        </Text>
      }
      prevButton={<View style={{ width: 0 }} />}
    >
      {/* Slide 1 */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 100,
        }}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 100, height: 100 }}
        />
        <Image
          source={require("@/assets/images/onboard/01.png")}
          style={{ width: 300, height: 300 }}
        />
        <Text style={{ fontWeight: 700, fontSize: 34 }}>Welcome to</Text>
        <Text style={{ fontWeight: 700, fontSize: 34 }}>
          Infinix Real Estate
        </Text>
        <Text style={{ textAlign: "center", marginTop: 40, padding: 20 }}>
          Discover Dubai's finest properties with expert guidance and exclusive
          opportunities tailored just for you
        </Text>
      </View>

      {/* Slide 2 */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 100,
        }}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 100, height: 100 }}
        />
        <Image
          source={require("@/assets/images/onboard/02.png")}
          style={{ width: 300, height: 300 }}
        />
        <Text style={{ fontWeight: 700, fontSize: 34 }}>Trusted Expertise</Text>
        <Text style={{ fontWeight: 700, fontSize: 34 }}>You Can Rely On</Text>
        <Text style={{ textAlign: "center", marginTop: 40, padding: 20 }}>
          Join countless clients who trust us to turn their real estate goals
          into reality.
        </Text>
      </View>

      {/* Slide 3 */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: 100, height: 100 }}
        />
        <Image
          source={require("@/assets/images/onboard/03.png")}
          style={{ width: 300, height: 300 }}
        />
        <Text style={{ fontWeight: 700, fontSize: 34 }}>Find Your Dream</Text>
        <Text style={{ fontWeight: 700, fontSize: 34 }}>Property</Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 40,
            padding: 20,
            marginBottom: 30,
          }}
        >
          Explore luxury homes and investment options with ease. Let us help you
          make the perfect choice.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            width: "100%",
            position: "absolute",
            bottom: 0,
            borderRadius: 30,
            padding: 10,
            marginVertical: 20,
            marginHorizontal: 10,
          }}
          onPress={completeOnboarding}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "800",
              fontSize: 20,
              color: "#FFFFFF",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default Onboarding;
