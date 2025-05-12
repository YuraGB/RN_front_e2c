// components/Footer.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2025 MyApp. All rights are protected.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
  },
  text: {
    color: "#aaa",
    fontSize: 12,
  },
});

export default Footer;
