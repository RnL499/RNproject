import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
}
