import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://t3.ftcdn.net/jpg/02/67/48/66/360_F_267486690_Mbbt7H2aXtAcTep2b9UewRX0u0okIowU.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Home Tab</Text>
      <Text style={styles.text}>
        Welcome to the Home tab. Here you can find all the latest updates!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "#34495e",
    textAlign: "center",
  },
});
