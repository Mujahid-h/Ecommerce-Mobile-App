import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

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

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={onClickLeftIcon}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {!isCart && <Text></Text>}
      {isCart && (
        <TouchableOpacity style={styles.btn}>
          <Image source={rightIcon} style={styles.icon} />
          <View style={styles.cartItems}>
            <Text>{cartItems.length}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 70,
    backgroundColor: "#0786DAFD",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
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
  },
  cartItems: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
