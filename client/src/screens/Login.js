import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import AlertBar from "../common/AlertBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const q = query(collection(db, "Users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setAlertMessage("No user found with this email");
        setAlertType("error");
        setShowAlert(true);
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      if (userData.password === password) {
        // console.log("Login successful:", userData);
        setAlertMessage("Login successful");
        setAlertType("success");
        setShowAlert(true);
        navigation.navigate("HomeScreen");
      } else {
        setAlertMessage("Incorrect password");
        setAlertType("error");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setAlertMessage("An error occurred during login");
      setAlertType("error");
      setShowAlert(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signInLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // For Android shadow
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#ff6347",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    shadowColor: "#ff6347",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 3, // For Android shadow
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  signInContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signInText: {
    fontSize: 16,
    color: "#999",
  },
  signInLink: {
    fontSize: 16,
    color: "#ff6347",
    marginLeft: 5,
    fontWeight: "bold",
  },
});

export default Login;
