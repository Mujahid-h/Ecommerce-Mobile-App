import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../common/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomButton from "../common/CustomButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/slices/WishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require("../images/back.png")}
        rightIcon={require("../images/cart.png")}
        title={"Product Details"}
        onClickLeftIcon={() => navigation.goBack()}
        isCart={true}
      />
      <ScrollView>
        <View style={styles.productContainer}>
          <Image
            source={{ uri: route.params.data.image }}
            style={styles.banner}
          />
          <Text style={styles.name}>{route.params.data.title}</Text>
          <Text style={styles.desc}>{route.params.data.description}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={[styles.price]}>Price: </Text>
            <Text style={[styles.price, { color: "green" }]}>
              ${route.params.data.price}
            </Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                if (qty > 1) {
                  setQty(qty - 1);
                }
              }}
            >
              <Text style={styles.qty}> - </Text>
            </TouchableOpacity>
            <Text style={styles.qty}>{qty}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setQty(qty + 1)}
            >
              <Text style={styles.qty}> + </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 50 }}>
            <CustomButton
              title={"Add to Wishlist"}
              bg={"transparent"}
              color={"#ffc601"}
              border={"#ffc601"}
              icon={<AntDesign name="hearto" size={24} color="#ffc601" />}
              onClick={() => {
                dispatch(addToWishlist(route.params.data));
              }}
            />
            <CustomButton
              title={"Add to Cart"}
              bg={"#ffc601"}
              color={"#fff"}
              border={"transparent"}
              onClick={() => {
                dispatch(addToCart(route.params.data));
              }}
            />
          </View>
        </View>
      </ScrollView>
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
    marginBottom: 30,
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
  btn: {
    width: 40,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "tomato",
  },
  qty: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ProductDetail;
