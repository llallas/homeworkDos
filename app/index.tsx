import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{ uri: "https://via.placeholder.com/800x1200" }} // You can replace this with your own background image
      style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to MyApp</Text>
        <Text style={styles.subtitle}>
          The ultimate platform for your needs. Sign up or sign in to get
          started.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/sign-in")}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => router.push("/sign-up")}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0,0,0,0.5)", // Overlay for readability on top of the background image
    width: "100%",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#ecf0f1",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: "80%",
  },
  secondaryButton: {
    backgroundColor: "#2ecc71",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
