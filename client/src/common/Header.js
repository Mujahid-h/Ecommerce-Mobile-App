import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 60,
    backgroundColor: "#0786DAFD",
  },
});
