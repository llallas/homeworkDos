import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileTab() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Profile Tab</Text>
      <Text style={styles.text}>
        This is your profile page. View and edit your profile details here.
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
