import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const SubHeader = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#88dae0", "#bdeee9", "#c3f1e3"]}
      style={styles.container}
    >
      <Feather name="map-pin" size={24} color="black" />
      <Text style={styles.deliver}>Delive to Turkey - 721721</Text>
      <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  deliver: { marginHorizontal: 10, fontWeight: "bold" },
});
