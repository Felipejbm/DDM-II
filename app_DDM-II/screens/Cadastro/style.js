import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080808",
  },
  authContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 28,
    paddingTop: 48,
    paddingBottom: 48,
  },
  logo: {
    alignSelf: "center",
    fontSize: 48,
    marginBottom: 8,
  },
  brand: {
    color: "#c7a96b",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 12,
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    color: "#b5b5b5",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 28,
  },
  inputLabel: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#151515",
    borderColor: "#333333",
    borderRadius: 12,
    borderWidth: 1,
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
});
