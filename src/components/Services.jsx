import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AmazonPay from "../assets/amazon-pay.png";
import SendMoney from "../assets/send-money.jpg";
import ScanQR from "../assets/scan-qr.jpeg";
import PayBills from "../assets/pay-bills.jpeg";
import { RecentSearchData } from "../data/RecentSearchData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 20 }}
    >
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={AmazonPay} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={SendMoney} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={ScanQR} />
            <Text style={styles.title}>Scan QR</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={PayBills} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map((item) => (
        <ServiceCard item={item} />
      ))}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: -80,
  },
  serviceContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    padding: 10,
    alignItems: "center",
    paddingTop: 15,
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 10,
    marginTop: 2,
  },
});
