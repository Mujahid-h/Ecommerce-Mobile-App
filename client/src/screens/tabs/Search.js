import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../common/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const [search, setSearch] = useState("");
  const products = useSelector((state) => state.product);
  const [oldData, setOldData] = useState(products.data);
  const [searchedList, setSearchedList] = useState(oldData);
  const navigation = useNavigation();

  const filterData = (txt) => {
    let newData = oldData.filter((item) => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    setSearchedList(newData);
  };

  return (
    <View style={styles.container}>
      <Header title={"Search Items"} />
      <View style={styles.serachView}>
        <View style={styles.inputcontainer}>
          <Image
            source={require("../../images/search_fill.png")}
            style={styles.icon}
          />
          <TextInput
            value={search}
            onChangeText={(txt) => {
              setSearch(txt);
              filterData(txt);
            }}
            placeholder="search here"
            style={{ width: "80%" }}
          />
        </View>
        {search !== "" && (
          <TouchableOpacity
            onPress={() => {
              setSearch("");
              filterData("");
            }}
          >
            <Image
              source={require("../../images/clear.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ marginTop: 50 }}>
        <FlatList
          data={searchedList}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  serachView: {
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  inputcontainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
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

export default Search;
