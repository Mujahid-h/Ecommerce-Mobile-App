import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addProducts } from "../../redux/slices/productsSlice";

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  // const getProducts = async () => {
  //   try {
  //     await fetch("https://fakestoreapi.com/products")
  //       .then((res) => {
  //         res.json();
  //       })
  //       .then((json) => {
  //         setProducts(json);
  //         json.map((item) => (item.qty = 1));
  //         dispatch(addProducts(json));
  //       });
  //   } catch (error) {
  //     console.log("Error while fetching products");
  //   }
  // };

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json(); // Ensure the json data is returned
      json.forEach((item) => (item.qty = 1)); // Add qty field to each product
      setProducts(json); // Set the products locally
      dispatch(addProducts(json)); // Dispatch the products to the Redux store
    } catch (error) {
      console.log("Error while fetching products", error);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require("../../images/menu.png")}
        rightIcon={require("../../images/cart.png")}
        title={"Ecommerce App"}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
        isCart={true}
      />

      <FlatList
        data={products}
        renderItem={({ item, index }) => (
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
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default Home;
