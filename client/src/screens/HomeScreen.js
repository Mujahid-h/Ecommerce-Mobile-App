import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../common/Header";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require("../images/menu.png")}
        rightIcon={require("../images/cart.png")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
