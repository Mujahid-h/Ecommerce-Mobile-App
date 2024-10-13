import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
  isCart,
}) => {
  const cartItems = useSelector((state) => state.cart.data);
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        {leftIcon ? (
          <TouchableOpacity style={styles.btn} onPress={onClickLeftIcon}>
            <Image source={leftIcon} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <View style={styles.btn} />
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
        {isCart ? (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Cart")}
          >
            <Image source={rightIcon} style={styles.icon} />
            <View style={styles.cartItems}>
              <Text>{cartItems.length}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.btn} />
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 100,
    backgroundColor: "#0786DAFD",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  titleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  btn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "#ffffff",
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItems: {
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 9,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
