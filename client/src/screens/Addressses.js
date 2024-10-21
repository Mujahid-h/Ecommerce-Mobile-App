import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Header from "../common/Header";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Addressses = () => {
  const navigation = useNavigation();
  const addressList = useSelector((state) => state.address.data);
  const isFocused = useIsFocused();

  const defaultAddress = async (item) => {
    await AsyncStorage.setItem(
      "MY_ADDRESS",
      `${item.houseNumber}, ${item.city}, ${item.state}, ZipCode: ${item.zipCode}, type: ${item.type}`
    );
    navigation.goBack();
  };

  useEffect(() => {
    console.log(addressList);
  }, [isFocused]);

  return (
    <View style={styles.containr}>
      <Header
        title={"My Addresses"}
        leftIcon={require("../images/back.png")}
        onClickLeftIcon={() => navigation.goBack()}
      />
      <View style={{ marginVertical: 20 }}>
        <FlatList
          data={addressList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={item.id}
              style={styles.productItem}
              onPress={() => defaultAddress(item)}
            >
              <View style={styles.productTextView}>
                <Text
                  style={styles.productText}
                >{`Address: ${item.houseNumber}`}</Text>
                <Text style={styles.productText}>{`City: ${item.city}`}</Text>
                <Text style={styles.productText}>{`State: ${item.state}`}</Text>
                <Text
                  style={styles.productText}
                >{`ZipCode: ${item.zipCode}`}</Text>
              </View>

              <View style={styles.productBtn}>
                <Text
                  style={[
                    styles.productText,
                    {
                      backgroundColor: "lightblue",
                      padding: 5,
                      borderRadius: 5,
                    },
                  ]}
                >
                  {item.type}
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Image
                    source={require("../images/radio_1.png")}
                    style={{ width: 24, height: 24 }}
                  />
                  <Image
                    source={require("../images/radio_2.png")}
                    style={{ width: 24, height: 24 }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.addAddress}
        onPress={() => navigation.navigate("AddAddress")}
      >
        <Text style={styles.addAddressText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containr: {
    flex: 1,
  },
  addAddress: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "tomato",
    position: "absolute",
    bottom: 50,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addAddressText: {
    fontSize: 30,
    color: "white",
  },
  productItem: {
    width: Dimensions.get("window").width * 0.9,
    alignSelf: "center",
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  productTextView: {
    width: "70%",
  },
  productText: {
    fontSize: 14,
    fontWeight: "500",
  },
  productBtn: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
  },
});

export default Addressses;
