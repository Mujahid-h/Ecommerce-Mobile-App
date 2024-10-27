import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../common/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const User = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.setItem("IS_USER_LOGGED_IN", "false");
  };

  return (
    <View style={styles.container}>
      <Header title={"User Profile"} />
      <Image
        source={require("../../images/default_user.png")}
        style={styles.image}
      />
      <Text style={styles.name}>Mujahid Hussain</Text>
      <Text style={styles.email}>mujahid@gmail.com</Text>

      <TouchableOpacity style={styles.tab}>
        <Text style={styles.txt}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, { marginTop: 20 }]}
        onPress={() => navigation.navigate("Orders")}
      >
        <Text style={styles.txt}>Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, { marginTop: 20 }]}
        onPress={() => navigation.navigate("Addresses")}
      >
        <Text style={styles.txt}>Address</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.tab, { marginTop: 20 }]}>
        <Text style={styles.txt}>Payment Methods</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, { marginTop: 20 }]}
        onPress={handleLogout}
      >
        <Text style={styles.txt}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 30,
    alignSelf: "center",
  },
  name: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    textAlign: "center",
  },
  tab: {
    marginTop: 50,
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    width: "90%",
    alignSelf: "center",
    padding: 10,
  },
  txt: {
    fontSize: 16,
    fontWeight: "600",
  },
});
export default User;
