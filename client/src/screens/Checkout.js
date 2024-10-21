import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import Header from "../common/Header";
import CustomButton from "../common/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Checkout = () => {
  const items = useSelector((state) => state.cart.data);
  const [cartItems, setCartItems] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(
    "Please Select Address"
  );
  const isFocused = useIsFocused();

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  useEffect(() => {
    getSelectedAddress();
  }, [isFocused]);

  const getSelectedAddress = async () => {
    setSelectedAddress(await AsyncStorage.getItem("MY_ADDRESS"));
  };

  const getTotal = () => {
    let total = 0;
    cartItems.map((item) => (total = total + item.qty * item.price));
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Header
        title={"Checkout"}
        leftIcon={require("../images/back.png")}
        onClickLeftIcon={() => navigation.goBack()}
      />
      <ScrollView>
        <Text style={styles.title}>Added Items</Text>
        <View>
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
                    <Text style={[styles.qty, { marginTop: 10 }]}>
                      {item.qty}
                    </Text>
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
        </View>
        <View style={styles.totalView}>
          <Text style={styles.title}>Total</Text>
          <Text style={[styles.title, { marginRight: 20 }]}>
            {"$" + getTotal()}
          </Text>
        </View>
        <Text style={styles.title}>Select Payment Mode</Text>
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => {
            setSelectedMethod(0);
          }}
        >
          <Image
            source={
              selectedMethod == 0
                ? require("../images/radio_2.png")
                : require("../images/radio_1.png")
            }
            style={[
              styles.img,
              { tintColor: selectedMethod == 0 ? "orange" : "black" },
            ]}
          />
          <Text style={styles.paymentMethdodsTxt}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => {
            setSelectedMethod(1);
          }}
        >
          <Image
            source={
              selectedMethod == 1
                ? require("../images/radio_2.png")
                : require("../images/radio_1.png")
            }
            style={[
              styles.img,
              { tintColor: selectedMethod == 1 ? "orange" : "black" },
            ]}
          />
          <Text style={styles.paymentMethdodsTxt}>Debit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => {
            setSelectedMethod(2);
          }}
        >
          <Image
            source={
              selectedMethod == 2
                ? require("../images/radio_2.png")
                : require("../images/radio_1.png")
            }
            style={[
              styles.img,
              { tintColor: selectedMethod == 2 ? "orange" : "black" },
            ]}
          />
          <Text style={styles.paymentMethdodsTxt}>Easypaisa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => {
            setSelectedMethod(3);
          }}
        >
          <Image
            source={
              selectedMethod == 3
                ? require("../images/radio_2.png")
                : require("../images/radio_1.png")
            }
            style={[
              styles.img,
              { tintColor: selectedMethod == 3 ? "orange" : "black" },
            ]}
          />
          <Text style={styles.paymentMethdodsTxt}>Cash on Delivery</Text>
        </TouchableOpacity>
        <View style={styles.addressView}>
          <Text style={styles.title}>Address</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Addresses");
            }}
          >
            <Text
              style={[
                styles.title,
                { textDecorationLine: "underline", color: "#0269A0FB" },
              ]}
            >
              Edit Address
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.title,
            { marginTop: 10, fontSize: 16, color: "#636363" },
          ]}
        >
          {selectedAddress}
        </Text>
        <CustomButton
          bg={"green"}
          title={"Pay & Order"}
          color={"#fff"}
          onClick={() => {
            // Your payment logic here
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    paddingBottom: 30,
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 30,
    color: "#000",
    fontWeight: "600",
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
  totalView: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "#B7B7B7",
  },
  paymentMethods: {
    flexDirection: "row",
    width: "90%",
    marginTop: 20,
    paddingLeft: 20,
  },
  img: {
    width: 24,
    height: 24,
  },
  paymentMethdodsTxt: {
    marginLeft: 15,
    fontSize: 16,
    color: "#000",
  },
  addressView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 0,
    paddingRight: 20,
  },
});

export default Checkout;
