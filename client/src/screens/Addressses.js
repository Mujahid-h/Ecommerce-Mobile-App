import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Header from "../common/Header";
import { useNavigation } from "@react-navigation/native";

const Addressses = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containr}>
      <Header
        title={"My Addresses"}
        leftIcon={require("../images/back.png")}
        onClickLeftIcon={() => navigation.goBack()}
      />
      <TouchableOpacity
        style={styles.addAddress}
        onPress={() => navigation.navigate("AddAddress")}
      >
        <Text style={styles.addAddressText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containr: {
    flex: 1,
  },
  addAddress: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "tomato",
    position: "absolute",
    bottom: 50,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addAddressText: {
    fontSize: 30,
    color: "white",
  },
});

export default Addressses;
