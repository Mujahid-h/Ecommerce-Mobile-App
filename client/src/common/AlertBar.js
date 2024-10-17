import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AlertBar = ({ message, type = "success", onClose }) => {
  // Set background color based on the type of alert
  const backgroundColor =
    type === "success"
      ? "#4CAF50"
      : type === "error"
      ? "#F44336"
      : type === "warning"
      ? "#FF9800"
      : "#2196F3";

  return (
    <View style={[styles.alertContainer, { backgroundColor }]}>
      <Text style={styles.alertText}>{message}</Text>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.closeText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  alertText: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  closeText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default AlertBar;
