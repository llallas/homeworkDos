import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useState } from "react";

export default function SettingsTab() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Tab</Text>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#2ecc71" }}
          thumbColor={isEnabled ? "#3498db" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text style={styles.text}>Manage your app settings here.</Text>
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
    color: "#34495e",
  },
  text: {
    fontSize: 18,
    color: "#34495e",
    textAlign: "center",
  },
});
