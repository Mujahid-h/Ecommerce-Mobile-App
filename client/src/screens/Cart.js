import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Header from "../common/Header";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import CheckoutLayout from "../common/CheckoutLayout";

const Cart = () => {
  const items = useSelector((state) => state.cart.data);
  const [cartItems, setCartItems] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  const getTotal = () => {
    let total = 0;
    cartItems.map((item) => (total = total + item.qty * item.price));
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Header
        title={"Cart Items"}
        leftIcon={require("../images/back.png")}
        onClickLeftIcon={() => navigation.goBack()}
      />
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.productItem}
            onPress={() => {
              navigation.navigate("ProductDetail", { data: item });
            }}
          >
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.name}>
                {item.title.length > 20
                  ? item.title.substring(0, 20) + "..."
                  : item.title}
              </Text>
              <Text style={styles.desc}>
                {item.description.length > 30
                  ? item.description.substring(0, 30) + "..."
                  : item.description}
              </Text>
              <View style={styles.qtyView}>
                <Text style={styles.price}>{"$" + item.price}</Text>

                <TouchableOpacity
                  style={[styles.btn, { marginTop: 10 }]}
                  onPress={() => dispatch(removeFromCart(item))}
                >
                  <Text style={styles.qty}> - </Text>
                </TouchableOpacity>
                <Text style={[styles.qty, { marginTop: 10 }]}>{item.qty}</Text>
                <TouchableOpacity
                  style={[styles.btn, { marginTop: 10 }]}
                  onPress={() => dispatch(addToCart(item))}
                >
                  <Text style={styles.qty}> + </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      {cartItems.length > 0 && (
        <CheckoutLayout items={cartItems.length} total={getTotal()} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  productItem: {
    width: Dimensions.get("window").width,
    height: 110,
    marginTop: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  itemDetails: {
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  desc: {
    fontSize: 14,
    color: "gray",
  },
  price: {
    fontSize: 18,
    color: "green",
    fontWeight: "600",
    marginTop: 5,
  },
  qtyView: {
    flexDirection: "row",
    alignItems: "center",
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

export default Cart;
