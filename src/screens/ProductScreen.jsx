import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ProductData } from "../data/ProductData";

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Result</Text>
        <Text style={styles.tagline}>
          {" "}
          Price and other details may vary based on product aside and colour
        </Text>
        {ProductData.map((item) => (
          <View key={item.id} style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image style={styles.productImg} source={item.image} />
            </View>

            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productName}>{item.productName}</Text>

              <View style={styles.row}>
                <Text style={styles.rating}>{item.rating}</Text>
                <Text style={styles.ratingCount}>{item.ratingCount}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.crossout}>{item.crossOutText}</Text>
              </View>

              <Text style={styles.cashback}>
                Up to 5% cashback with Amazon Pay credit card
              </Text>
              <Image style={styles.logo} />
              <Text style={styles.cashback}>
                FREE Delivery by {item.deliveryBy}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: { padding: 10 },
  tagline: { fontSize: 11, color: "gray" },
  title: { fontSize: 14, fontWeight: "bold", color: "#0000000" },
  productSection: {
    borderWidth: 1,
    borderColor: "lightgray",
    flexDirection: "row",
    marginVertical: 15,
  },
  productImgSection: {
    width: "40%",
    backgroundColor: "dddddd",
    justifyContent: "center",
  },
  productImg: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  productDetailSection: {
    width: "60%",
    padding: 10,
  },
  sponsored: {
    fontSize: 11,
    color: "black",
  },
  productName: {
    fontSize: 12,
    color: "black",
    lineHeight: 18,
  },
  row: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  rating: {
    fontSize: 13,
    color: "gold",
    fontWeight: "900",
    backgroundColor: "green",
    marginRight: 5,
    padding: 2,
  },
  ratingCount: {
    fontSize: 10,
    color: "black",
    textDecorationLine: "line-through",
  },
  price: {
    fontSize: 16,
    color: "black",
    marginRight: 5,
  },
  crossout: {
    fontSize: 10,
    color: "gray",
    textDecorationLine: "line-through",
  },
  cashback: {
    fontSize: 9,
    marginVertical: 3,
  },
  logo: {
    height: 16,
    width: 42,
    marginVertical: 3,
  },
});
