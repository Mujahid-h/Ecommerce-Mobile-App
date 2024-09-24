import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";

const CustomButton = ({ title, bg, color, onClick, border }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: bg, borderColor: border }]}
      onPress={onClick}
      activeOpacity={0.8}
    >
      <Text
        style={{
          color: color,
          fontSize: 18,
          fontWeight: "500",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 40,
    height: 50,
    borderRadius: 10,
    gap: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    alignSelf: "center",
  },
});

export default CustomButton;
