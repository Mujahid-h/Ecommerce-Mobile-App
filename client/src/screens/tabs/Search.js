import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const products = useSelector((state) => state.product);
  console.log(JSON.stringify(products));

  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default Search;
