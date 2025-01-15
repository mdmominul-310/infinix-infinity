import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";

// import onBoardImage1 from "@/assets/images/icon.png";

// Define the type for the component state
interface State {
  idxActive: number;
}

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
    // fontFamily: "Inter-Regular",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

class Onboarding extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      idxActive: 0,
    };
  }

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={this.state.idxActive < 2 ? true : false}
        activeDotStyle={{
          width: 25,
          backgroundColor: colors?.primary,
          marginBottom: 100,
        }}
        dotColor="#5A6070"
        dotStyle={{ marginBottom: 100 }}
        index={0}
        buttonWrapperStyle={{
          position: "absolute",
          top: 0,
          alignItems: "flex-end",
          justifyContent: "center",
        }}
        onIndexChanged={(idxActive: number) => this.setState({ idxActive })}
        nextButton={
          <Text
            style={{
              textAlign: "center",
              fontWeight: "800",
              fontSize: 20,
              color: "#FFFFFF",
              backgroundColor: colors?.primary,
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
            Discover Dubai's finest properties with expert guidance and
            exclusive apportunities tailored just for you
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
          <Text style={{ fontWeight: 700, fontSize: 34 }}>
            Trusted Expertise
          </Text>
          <Text style={{ fontWeight: 700, fontSize: 34 }}>You Can Rely On</Text>
          <Text style={{ textAlign: "center", marginTop: 40, padding: 20 }}>
            join countless clients who trust us to turn their real estate goals
            into reality
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
            Explore luxry homes and investment options with ease . Let us help
            you make the perfect choice
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: colors?.primary,
              //   marginBottom: 30,
              width: "100%",
              position: "absolute",
              bottom: 0,
              borderRadius: 30,
              padding: 10,
              marginVertical: 20,
              marginHorizontal: 10,
            }}
            onPress={async () => {
              try {
                await AsyncStorage.setItem("onboard", "yes");
              } catch (e) {
                // saving error
              }
            }}
            // onPress={() => this.props.dispatch(fristUser(false))}
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
  }
}

// AppRegistry.registerComponent("infinix-infinity", () => Onboarding);
export default Onboarding;
