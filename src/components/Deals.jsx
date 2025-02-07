import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import RecommendProduct from "../assets/recommend.jpg";

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image style={styles.imgStyle} source={RecommendProduct} />

      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.discountPrice}>1,79999 $</Text>

          <Text style={styles.actualPrice}>1,900 $</Text>
        </View>

        <Text style={styles.productName}>
          {" "}
          Nykaa Face Wash Gentle Skin Cleanser for all skin type
        </Text>

        <TouchableOpacity>
          <Text style={styles.allDeals}>See all deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 10,
  },
  imgStyle: {
    width: "100%",
    height: 200,
  },
  bottomSection: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  offDealBtn: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    width: 60,
    marginTop: 5,
    marginBottom: 5,
  },
  offDeal: {
    color: "white",
  },
  deal: {
    color: "red",
    marginHorizontal: 5,
    fontWeight: "bold",
  },
  discountPrice: {
    fontWeight: "700",
    fontSize: 18,
  },
  actualPrice: {
    paddingHorizontal: 10,
    fontSize: 12,
    textDecorationLine: "line-through",
    fontWeight: "600",
  },
  productName: {
    marginVertical: 5,
    fontWeight: "700",
  },
  allDeals: { color: "#017185", fontWeight: "700", fontSize: 16 },
});
