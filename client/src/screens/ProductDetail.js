import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Header from "../common/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomButton from "../common/CustomButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/slices/WishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AskLogin from "../common/AskLogin";

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  // const checkUserStatus = async () => {
  //   let status = await AsyncStorage.get("IS_USER_LOGGED_IN");
  //   let isUserLoggedin = true;
  //   if (status === null) {
  //     isUserLoggedin = true;
  //   } else {
  //     isUserLoggedin = true;
  //   }
  //   return isUserLoggedin;
  // };

  const checkUserStatus = async () => {
    const status = await AsyncStorage.getItem("IS_USER_LOGGED_IN");
    return status === "true";
  };

  const handleAction = async (action) => {
    const isLoggedIn = await checkUserStatus();
    if (isLoggedIn) {
      action();
    } else {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require("../images/back.png")}
        rightIcon={require("../images/cart.png")}
        title={"Product Details"}
        onClickLeftIcon={() => navigation.goBack()}
        isCart={true}
      />
      <ScrollView>
        <View style={styles.productContainer}>
          <Image
            source={{ uri: route.params.data.image }}
            style={styles.banner}
          />
          <Text style={styles.name}>{route.params.data.title}</Text>
          <Text style={styles.desc}>{route.params.data.description}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={[styles.price]}>Price: </Text>
            <Text style={[styles.price, { color: "green" }]}>
              ${route.params.data.price}
            </Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                if (qty > 1) {
                  setQty(qty - 1);
                }
              }}
            >
              <Text style={styles.qty}> - </Text>
            </TouchableOpacity>
            <Text style={styles.qty}>{qty}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setQty(qty + 1)}
            >
              <Text style={styles.qty}> + </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 50 }}>
            <CustomButton
              title={"Add to Wishlist"}
              bg={"transparent"}
              color={"#ffc601"}
              border={"#ffc601"}
              icon={<AntDesign name="hearto" size={24} color="#ffc601" />}
              onClick={() =>
                handleAction(() => dispatch(addToWishlist(route.params.data)))
              }
            />
            <CustomButton
              title="Add to Cart"
              bg="#ffc601"
              color="#fff"
              border="transparent"
              onClick={() =>
                handleAction(() => {
                  dispatch(
                    addToCart({
                      ...route.params.data,
                      qty: qty,
                    })
                  );
                  setQty(1);
                })
              }
            />
          </View>
        </View>
      </ScrollView>
      <AskLogin
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onClickLogin={() => {
          setModalVisible(false);
          navigation.navigate("Login");
        }}
        onClickSignup={() => {
          setModalVisible(false);
          navigation.navigate("Signup");
        }}
      />
    </View>
  );
};

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useDispatch } from "react-redux";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { addToWishlist } from "../redux/slices/WishlistSlice";
// import { addToCart } from "../redux/slices/cartSlice";
// import Header from "../common/Header";
// import CustomButton from "../common/CustomButton";
// import AskLogin from "../common/AskLogin";
// import { AntDesign } from "@expo/vector-icons";

// const ProductDetail = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const dispatch = useDispatch();
//   const [qty, setQty] = useState(1);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [pendingAction, setPendingAction] = useState(null);

//   const checkUserStatus = async () => {
//     const status = await AsyncStorage.getItem("IS_USER_LOGGED_IN");
//     return status === "true";
//   };

//   const handleAction = async (action, destination) => {
//     const isLoggedIn = await checkUserStatus();
//     if (isLoggedIn) {
//       performAction(action, destination);
//     } else {
//       setPendingAction({ action, destination });
//       setModalVisible(true);
//     }
//   };

//   const performAction = (action, destination) => {
//     action();
//     navigation.navigate(destination);
//   };

//   const handleLoginSuccess = () => {
//     if (pendingAction) {
//       performAction(pendingAction.action, pendingAction.destination);
//       setPendingAction(null);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Header
//         leftIcon={require("../images/back.png")}
//         rightIcon={require("../images/cart.png")}
//         title={"Product Details"}
//         onClickLeftIcon={() => navigation.goBack()}
//         isCart={true}
//       />
//       <ScrollView>
//         <View style={styles.productContainer}>
//           <Image
//             source={{ uri: route.params.data.image }}
//             style={styles.banner}
//           />
//           <Text style={styles.name}>{route.params.data.title}</Text>
//           <Text style={styles.desc}>{route.params.data.description}</Text>
//           <View style={styles.priceContainer}>
//             <Text style={styles.price}>Price: </Text>
//             <Text style={[styles.price, { color: "green" }]}>
//               ${route.params.data.price}
//             </Text>
//             <TouchableOpacity
//               style={styles.btn}
//               onPress={() => {
//                 if (qty > 1) {
//                   setQty(qty - 1);
//                 }
//               }}
//             >
//               <Text style={styles.qty}> - </Text>
//             </TouchableOpacity>
//             <Text style={styles.qty}>{qty}</Text>
//             <TouchableOpacity
//               style={styles.btn}
//               onPress={() => setQty(qty + 1)}
//             >
//               <Text style={styles.qty}> + </Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.buttonContainer}>
//             <CustomButton
//               title={"Add to Wishlist"}
//               bg={"transparent"}
//               color={"#ffc601"}
//               border={"#ffc601"}
//               icon={<AntDesign name="hearto" size={24} color="#ffc601" />}
//               onClick={() =>
//                 handleAction(
//                   () => dispatch(addToWishlist(route.params.data)),
//                   "Wishlist"
//                 )
//               }
//             />
//             <CustomButton
//               title="Add to Cart"
//               bg="#ffc601"
//               color="#fff"
//               border="transparent"
//               onClick={() =>
//                 handleAction(() => {
//                   dispatch(addToCart({ ...route.params.data, qty: qty }));
//                   setQty(1);
//                 }, "Cart")
//               }
//             />
//           </View>
//         </View>
//       </ScrollView>
//       <AskLogin
//         modalVisible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         onClickLogin={() => {
//           setModalVisible(false);
//           navigation.navigate("Login", { onLoginSuccess: handleLoginSuccess });
//         }}
//         onClickSignup={() => {
//           setModalVisible(false);
//           navigation.navigate("Signup");
//         }}
//       />
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productContainer: {
    width: "90%",
    marginHorizontal: "auto",
    marginBottom: 30,
  },
  banner: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginVertical: 10,
  },
  name: {
    fontSize: 22,
    color: "#000",
    fontWeight: "600",
  },
  desc: {
    marginVertical: 5,
    fontSize: 14,
    color: "gray",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
    flexDirection: "row",
  },
  btn: {
    width: 40,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "tomato",
  },
  qty: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ProductDetail;
