import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Header from "../common/Header";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require("../images/back.png")}
        rightIcon={require("../images/cart.png")}
        title={"Product Details"}
        onClickLeftIcon={() => navigation.goBack()}
      />
      <View style={styles.productContainer}>
        <Image
          source={{ uri: route.params.data.image }}
          style={styles.banner}
        />
        <Text style={styles.name}>{route.params.data.title}</Text>
        <Text style={styles.desc}>{route.params.data.description}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.price]}>Price: </Text>
          <Text style={[styles.price, { color: "green" }]}>
            ${route.params.data.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productContainer: {
    width: "90%",
    marginHorizontal: "auto",
  },
  banner: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginVertical: 10,
  },
  name: {
    fontSize: 22,
    color: "#000",
    fontWeight: "600",
  },
  desc: {
    marginVertical: 5,
    fontSize: 14,
    color: "gray",
  },
  price: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
    flexDirection: "row",
  },
});

export default ProductDetail;
