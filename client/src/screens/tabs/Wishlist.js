import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Wishlist = () => {
  const items = useSelector((state) => state.wishlist.data);
  const [wishlistItems, setWishlistItems] = useState(items);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlistItems}
        renderItem={(item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              key={item.id}
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
                <Text style={styles.price}>{"$" + item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});

export default Wishlist;
