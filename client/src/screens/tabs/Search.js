import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../common/Header";
import { TouchableOpacity } from "react-native-gesture-handler";

const Search = () => {
  const [search, setSearch] = useState("");
  const products = useSelector((state) => state.product);
  // console.log(JSON.stringify(products.data));

  return (
    <View style={styles.container}>
      <Header title={"Serach Items"} />
      <View style={styles.serachView}>
        <View style={styles.inputcontainer}>
          <Image
            source={require("../../images/search_fill.png")}
            style={styles.icon}
          />
          <TextInput
            value={search}
            onChangeText={(txt) => setSearch(txt)}
            placeholder="search here"
            style={{ width: "85%" }}
          />
        </View>
        {search !== "" && (
          <TouchableOpacity>
            <Image
              source={require("../../images/clear.png")}
              style={{ width: 16, height: 16 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  serachView: {
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
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
});

export default Search;
