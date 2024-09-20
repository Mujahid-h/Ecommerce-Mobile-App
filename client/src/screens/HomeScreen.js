import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Header from "../common/Header";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require("../images/menu.png")}
        rightIcon={require("../images/cart.png")}
        title={"Ecommerce App"}
      />
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.bottomTab}>
          <Image
            source={require("../images/home.png")}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Image
            source={require("../images/search.png")}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <Image
            source={require("../images/wishlist.png")}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTab}>
          <Image
            source={require("../images/noti.png")}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTab}>
          <Image
            source={require("../images/profile.png")}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 70,
    width: "100%",
    backgroundColor: "#fff",
  },
  bottomTab: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
});
