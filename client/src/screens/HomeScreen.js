import {
  View,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./tabs/Home";
import Search from "./tabs/Search";
import Wishlist from "./tabs/Wishlist";
import Notification from "./tabs/Notification";
import User from "./tabs/User";

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Wishlist />
      ) : selectedTab == 3 ? (
        <Notification />
      ) : (
        <User />
      )}

      {!isKeyboardVisible && (
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setSelectedTab(0)}
          >
            <Image
              source={
                selectedTab == 0
                  ? require("../images/home_fill.png")
                  : require("../images/home.png")
              }
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setSelectedTab(1)}
          >
            <Image
              source={
                selectedTab == 1
                  ? require("../images/search_fill.png")
                  : require("../images/search.png")
              }
              style={[
                styles.bottomTabIcon,
                selectedTab == 1 ? "" : { width: 35 },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setSelectedTab(2)}
          >
            <Image
              source={
                selectedTab == 2
                  ? require("../images/wishlist_fill.png")
                  : require("../images/wishlist.png")
              }
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setSelectedTab(3)}
          >
            <Image
              source={
                selectedTab == 3
                  ? require("../images/noti_fill.png")
                  : require("../images/noti.png")
              }
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => setSelectedTab(4)}
          >
            <Image
              source={
                selectedTab == 4
                  ? require("../images/profile_fill.png")
                  : require("../images/profile.png")
              }
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity>
        </View>
      )}
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
