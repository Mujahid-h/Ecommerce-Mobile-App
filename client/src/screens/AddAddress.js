import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../common/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomButton from "../common/CustomButton";
import { useDispatch } from "react-redux";
import { addAddress, updateAddress } from "../redux/slices/addressSlice";
import uuid from "react-native-uuid";

const AddressTypeButton = ({ selected, onPress, label }) => {
  return (
    <TouchableOpacity
      style={[
        styles.typeBtn,
        {
          borderColor: selected ? "orange" : "black",
          borderWidth: selected ? 2 : 0.5,
        },
      ]}
      onPress={onPress}
    >
      <Image
        source={
          selected
            ? require("../images/radio_2.png")
            : require("../images/radio_1.png")
        }
        style={[styles.radio, { tintColor: selected ? "orange" : "black" }]}
      />
      <Text
        style={[styles.radioText, { color: selected ? "orange" : "black" }]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Addressses = () => {
  const route = useRoute();
  const [type, setType] = useState(
    route.params.type == "edit" ? (route.params.data.type == "Home" ? 0 : 1) : 0
  );
  const navigation = useNavigation();
  const [houseNumber, setHouseNumber] = useState(
    route.params.type == "edit" ? route.params.data.houseNumber : ""
  );
  const [city, setCity] = useState(
    route.params.type == "edit" ? route.params.data.city : ""
  );
  const [state, setState] = useState(
    route.params.type == "edit" ? route.params.data.state : ""
  );
  const [zipCode, setZipCode] = useState(
    route.params.type == "edit" ? route.params.data.zipCode : ""
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Header
        title={route.params.type == "edit" ? "Edit Address" : "Add New Address"}
        leftIcon={require("../images/back.png")}
        onClickLeftIcon={() => navigation.goBack()}
      />

      <TextInput
        style={[styles.input, { marginTop: 50 }]}
        placeholder="Enter House Address"
        value={houseNumber}
        onChangeText={setHouseNumber}
      />
      <TextInput
        style={[styles.input, { marginTop: 20 }]}
        placeholder="Enter City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={[styles.input, { marginTop: 20 }]}
        placeholder="Enter State"
        value={state}
        onChangeText={setState}
      />
      <TextInput
        style={[styles.input, { marginTop: 20 }]}
        placeholder="Enter ZipCode"
        keyboardType="number-pad"
        value={zipCode}
        onChangeText={setZipCode}
      />

      {/* Type Selection */}
      <View style={styles.typeView}>
        <AddressTypeButton
          selected={type === 0}
          onPress={() => setType(0)}
          label="Home"
        />
        <AddressTypeButton
          selected={type === 1}
          onPress={() => setType(1)}
          label="Office"
        />
      </View>

      <CustomButton
        title={route.params.type == "edit" ? "Edit Address" : "Add New Address"}
        bg={"orange"}
        color={"#fff"}
        border={"transparent"}
        onClick={() => {
          if (route.params.type == "edit") {
            dispatch(
              updateAddress({
                houseNumber,
                city,
                state,
                zipCode,
                type: type == 0 ? "Home" : "Office",
                id: route.params.data.id,
              })
            );
            navigation.goBack();
          } else {
            dispatch(
              addAddress({
                houseNumber,
                city,
                state,
                zipCode,
                type: type == 0 ? "Home" : "Office",
                id: uuid.v4(),
              })
            );
            navigation.goBack();
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: "90%",
    alignSelf: "center",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  typeView: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 50,
  },
  typeBtn: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "45%",
    gap: 10,
    height: 50,
  },
  radio: {
    width: 20,
    height: 20,
  },
  radioText: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default Addressses;
