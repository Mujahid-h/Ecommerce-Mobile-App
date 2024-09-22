import { View, Text } from "react-native";
import React from "react";
import Header from "../../common/Header";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header
        leftIcon={require("../../images/menu.png")}
        rightIcon={require("../../images/cart.png")}
        title={"Ecommerce App"}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default Home;
