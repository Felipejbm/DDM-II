import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginTop: 4,
    paddingVertical: 16,
  },
  buttonText: {
    color: "#080808",
    fontSize: 16,
    fontWeight: "800",
  },
  authLink: {
    alignItems: "center",
    marginTop: 22,
    padding: 8,
  },
  authLinkText: {
    color: "#c7a96b",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});

export function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function AuthLink({ children, onPress }) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={styles.authLink}
      onPress={onPress}
    >
      <Text style={styles.authLinkText}>{children}</Text>
    </TouchableOpacity>
  );
}
