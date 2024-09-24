import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

const CustomButton = ({ title, bg, color, onClick }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: bg }]}
      onPress={() => onClick()}
    >
      <Text style={{ color: color, fontSize: 18, fontWeight: "500" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get("window").width - 40,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomButton;
