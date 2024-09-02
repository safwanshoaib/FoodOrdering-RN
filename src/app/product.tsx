import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const ProductDetailsScreen = () => {
  return (
    <View>
      <Text style={styles.text}>ProductDetailsScreen</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  text:{
    color: Colors.dark.text
  }
});
