import { StyleSheet, Text, View } from "react-native";
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
      <Text>Addressses</Text>
    </View>
  );
};

export default Addressses;

const styles = StyleSheet.create({
  containr: {
    flex: 1,
  },
});
