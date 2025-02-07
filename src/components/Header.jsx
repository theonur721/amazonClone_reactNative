import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
// ikon import
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#88dae0", "#98e1d6", "#9ee4d4"]}
        style={styles.container}
      >
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={32} color="black" />
            <TextInput
              placeholder="Search Amazon"
              placeholderTextColor={"gray"}
              style={styles.textInput}
            />
          </View>
          <AntDesign name="scan1" size={22} color="gray" />
        </View>
        <Feather name="mic" size={22} color="black" />
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  inputBox: {
    backgroundColor: "white",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "lightgray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    padding: 8,
  },
});
