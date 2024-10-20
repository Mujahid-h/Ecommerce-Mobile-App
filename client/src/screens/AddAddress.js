// import {
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useState } from "react";
// import Header from "../common/Header";
// import { useNavigation } from "@react-navigation/native";

// const Addressses = () => {
//   const [type, setType] = useState(1);
//   const navigation = useNavigation();

//   return (
//     <View style={styles.containr}>
//       <Header
//         title={"Add New Address"}
//         leftIcon={require("../images/back.png")}
//         onClickLeftIcon={() => navigation.goBack()}
//       />
//       <TextInput
//         style={[styles.input, { marginTop: 50 }]}
//         placeholder="Enter House Number"
//       />
//       <TextInput
//         style={[styles.input, { marginTop: 20 }]}
//         placeholder="Enter City"
//       />
//       <TextInput
//         style={[styles.input, { marginTop: 20 }]}
//         placeholder="Enter State"
//       />
//       <TextInput
//         style={[styles.input, { marginTop: 20 }]}
//         placeholder="Enter ZipCode"
//         keyboardType="number-pad"
//       />
//       <View style={styles.typeView}>
//         <TouchableOpacity
//           style={[
//             styles.typeBtn,
//             {
//               borderColor: type == 0 ? "orange" : "black",
//               borderWidth: type == 0 ? 2 : 0.5,
//             },
//           ]}
//           onPress={() => setType(0)}
//         >
//           <Image
//             source={
//               type != 0
//                 ? require("../images/radio_1.png")
//                 : require("../images/radio_2.png")
//             }
//             style={[
//               styles.radio,
//               {
//                 tintColor: type == 0 ? "orange" : "black",
//               },
//             ]}
//           />
//           <Text
//             style={[
//               styles.radioText,
//               {
//                 color: type == 0 ? "orange" : "black",
//               },
//             ]}
//           >
//             Home
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.typeBtn,
//             {
//               borderColor: type == 1 ? "orange" : "black",
//               borderWidth: type == 1 ? 2 : 0.5,
//             },
//           ]}
//           onPress={() => setType(1)}
//         >
//           <Image
//             source={
//               type != 1
//                 ? require("../images/radio_1.png")
//                 : require("../images/radio_2.png")
//             }
//             style={[
//               styles.radio,
//               {
//                 tintColor: type == 1 ? "orange" : "black",
//               },
//             ]}
//           />
//           <Text
//             style={[
//               styles.radioText,
//               {
//                 color: type == 1 ? "orange" : "black",
//               },
//             ]}
//           >
//             Office
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   containr: {
//     flex: 1,
//   },
//   input: {
//     width: "90%",
//     alignSelf: "center",
//     height: 50,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     borderWidth: 0.5,
//   },
//   typeView: {
//     width: "90%",
//     alignSelf: "center",
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexDirection: "row",
//     marginTop: 50,
//   },
//   typeBtn: {
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",

//     width: "45%",
//     gap: 10,
//     height: 50,
//   },
//   radio: {
//     width: 20,
//     height: 20,
//   },
//   radioText: {
//     fontSize: 20,
//     fontWeight: "600",
//   },
// });
// export default Addressses;

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
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../common/CustomButton";

// Reusable Component for Address Type Button
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
  const [type, setType] = useState(1);
  const navigation = useNavigation();
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <View style={styles.container}>
      <Header
        title={"Add New Address"}
        leftIcon={require("../images/back.png")}
        onClickLeftIcon={() => navigation.goBack()}
      />

      <TextInput
        style={[styles.input, { marginTop: 50 }]}
        placeholder="Enter House Number"
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
        title={"Add New Address"}
        bg={"orange"}
        color={"#fff"}
        onClick={() => {}}
        border={"transparent"}
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
