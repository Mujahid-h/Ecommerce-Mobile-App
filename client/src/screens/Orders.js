import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Header from "../common/Header";

const Orders = () => {
  const orders = useSelector((state) => state.order.data);
  const navigation = useNavigation();

  const OrderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.name}>
          {item.title?.length > 20
            ? item.title.substring(0, 20) + "..."
            : item.title}
        </Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.qty}>Quantity: {item.qty}</Text>
      </View>
    </View>
  );

  const OrderCard = ({ order }) => (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <View>
          <Text style={styles.orderId}>Order #{order.orderId}</Text>
          <Text style={styles.orderDate}>{order.orderDate}</Text>
        </View>
        <Text style={styles.totalAmount}>
          Total: ${order.totalAmount.toFixed(2)}
        </Text>
      </View>

      <View style={styles.itemsList}>
        {order.items.map((item, index) => (
          <OrderItem key={index} item={item} />
        ))}
      </View>

      <View style={styles.orderFooter}>
        <Text style={styles.deliveryStatus}>Status: Processing</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        title={"My Orders"}
        leftIcon={require("../images/back.png")}
        onClickLeftIcon={() => navigation.navigate("HomeScreen")}
      />

      {orders && orders.length > 0 ? (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.orderId}
          renderItem={({ item }) => <OrderCard order={item} />}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.noOrdersText}>
            No orders have been placed yet!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 10,
  },
  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10,
    marginBottom: 10,
  },
  orderId: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  orderDate: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "700",
    color: "green",
  },
  itemsList: {
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  itemImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    borderRadius: 8,
  },
  itemDetails: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  price: {
    fontSize: 15,
    color: "green",
    fontWeight: "600",
    marginTop: 4,
  },
  qty: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  orderFooter: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  deliveryStatus: {
    fontSize: 14,
    color: "#666",
    fontWeight: "600",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noOrdersText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});

export default Orders;
