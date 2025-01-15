import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
} from "react-native";

const StickySidebar: React.FC = () => {
  const handleContactUs = () => {
    Linking.openURL("https://theinfinixrealestate.com/contact-us/").catch(
      (err) => console.error("Failed to open URL:", err)
    );
  };

  return (
    <View style={styles.sidebar}>
      {/* <Text style={styles.title}>Sidebar awesome</Text> */}
      <TouchableOpacity onPress={handleContactUs} style={styles.button}>
        <Image
          source={require("@/assets/images/contact.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleContactUs} style={styles.button}>
        <Image
          source={require("@/assets/images/about.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    position: "absolute",
    top: 20,
    left: 0,
    height: "100%",
    width: 60,
    // backgroundColor: "#2C3E50",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#eda024",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default StickySidebar;
