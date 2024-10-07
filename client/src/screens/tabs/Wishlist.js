import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.data);
  console.log(
    "Wishlist Items: ",
    JSON.stringify(wishlistItems) + " Length: " + wishlistItems.length
  );

  return (
    <View>
      <Text>Wishlist</Text>
    </View>
  );
};

export default Wishlist;
